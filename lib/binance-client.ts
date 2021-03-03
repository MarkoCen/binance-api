import { RestfulAPIClient } from './http';
import { ClientConfigOptions, SiteType } from './models';

export class BinanceClient {
  static create(opts: ClientConfigOptions): BinanceClient {
    if (!opts.apiKey) {
      throw new Error(
        'Failed to create binance api client, no api key provided.',
      );
    } else if (!opts.apiSecret) {
      throw new Error(
        'Failed to create binance api client, no api secret provided.',
      );
    } else if (
      !opts.site ||
      opts.site !== 'binance.us' ||
      // @ts-ignore
      opts.site !== 'binance.com'
    ) {
      throw new Error(
        'Failed to create binance api client, wrong site provided.',
      );
    } else {
      return new BinanceClient(opts);
    }
  }

  private readonly apiKey: string;
  private readonly apiSecret: string;
  private readonly site: SiteType;
  private readonly restfulApi: RestfulAPIClient;

  constructor(opts: ClientConfigOptions) {
    this.apiKey = opts.apiKey;
    this.apiSecret = opts.apiSecret;
    this.site = opts.site;
    this.restfulApi = new RestfulAPIClient({
      apiKey: opts.apiKey,
      apiSecret: opts.apiSecret,
      website: opts.site,
      useServerTime: opts.useServerTime !== false,
    });
  }
}
