import fetch from 'isomorphic-fetch';
import createHmac from 'create-hmac';
import { stringify } from 'query-string';
import { APIEndpoints, APISecurityType, SiteType } from './models';

export class RestfulAPIClient {
  private readonly apiKey: string;
  private readonly apiSecret: string;
  private readonly useServerTime: boolean;
  private readonly baseUrl: string;

  constructor(opts: {
    apiKey: string;
    apiSecret: string;
    useServerTime: boolean;
    website: SiteType;
  }) {
    this.apiKey = opts.apiKey;
    this.apiSecret = opts.apiSecret;
    this.useServerTime = opts.useServerTime;
    this.baseUrl =
      opts.website === 'binance.com'
        ? 'https://api.binance.com'
        : 'https://api.binance.us';
  }

  private async timestamp(): Promise<number> {
    if (this.useServerTime) {
      const { serverTime } = await this.request<{ serverTime: number }>({
        method: 'GET',
        url: APIEndpoints.time,
      });
      return serverTime;
    } else {
      return Promise.resolve(Date.now());
    }
  }

  private sign(payload: any = {}): string {
    const queryStr = stringify(payload);

    return createHmac('sha256', this.apiSecret).update(queryStr).digest('hex');
  }

  request<T = unknown>(opts: {
    method: 'GET' | 'POST';
    url: string;
    params?: { [key in string]: any };
    headers?: { [key in string]: any };
  }): Promise<T> {
    const queryStr = opts.params ? stringify(opts.params) : '';

    const headers = opts.headers || {};
    headers['Content-Type'] = 'application/json';

    return fetch(
      `${this.baseUrl}${opts.url}${queryStr ? `?${queryStr}` : ''}`,
      {
        method: opts.method,
        headers,
      },
    ).then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    });
  }

  async get<T = unknown>(opts: {
    path: string;
    security?: APISecurityType;
    params?: { [key in string]: any };
  }): Promise<T> {
    let params = opts.params ? { ...opts.params } : {};
    const headers: { [key in string]: string } = {};

    const needApiKey = opts.security && opts.security !== 'NONE';
    const needSignature =
      opts.security &&
      (opts.security === 'TRADE' || opts.security === 'USER_DATA');

    if (needApiKey) {
      headers['X-MBX-APIKEY'] = this.apiKey;
    }

    if (needSignature) {
      params.timestamp = await this.timestamp();
      params.signature = await this.sign(params);
    }

    return await this.request<T>({
      method: 'GET',
      params,
      headers,
      url: opts.path,
    });
  }

  async post<T = unknown>(opts: {
    path: string;
    security?: APISecurityType;
    params?: { [key in string]: any };
  }): Promise<T> {
    let params = opts.params ? { ...opts.params } : {};
    const headers: { [key in string]: string } = {};

    const needApiKey = opts.security && opts.security !== 'NONE';
    const needSignature =
      opts.security &&
      (opts.security === 'TRADE' || opts.security === 'USER_DATA');

    if (needApiKey) {
      headers['X-MBX-APIKEY'] = this.apiKey;
    }

    if (needSignature) {
      params.timestamp = await this.timestamp();
      params.signature = await this.sign(params);
    }

    return await this.request<T>({
      method: 'POST',
      params,
      headers,
      url: opts.path,
    });
  }
}
