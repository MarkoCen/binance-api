import { RestfulAPIClient } from './http';
import { APIEndpoints, ClientConfigOptions, SiteType } from './models';
import { ExchangeInfo, OrderBook } from './binance-response';

export class BinanceClient {
  /**
   * create an instance of binance api client
   * @param opts
   */
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

  /**
   * Test connectivity to the Rest API
   */
  async test(): Promise<void> {
    await this.restfulApi.get({
      path: APIEndpoints.ping,
      private: false,
    });
  }

  /**
   * Get the current server time
   */
  async checkServerTime(): Promise<number> {
    const { serverTime } = await this.restfulApi.get<{ serverTime: number }>({
      path: APIEndpoints.time,
      private: false,
    });

    return serverTime;
  }

  /**
   * Get current exchange trading rules and symbol information
   */
  async exchangeInfo(): Promise<ExchangeInfo> {
    return this.restfulApi.get<ExchangeInfo>({
      path: APIEndpoints.exchangeInfo,
      private: false,
    });
  }

  /**
   * Get order book info for given symbol
   * @param symbol
   * @param limit
   */
  async getOrderBook(
    symbol: string,
    limit?: 5 | 10 | 20 | 50 | 100 | 500 | 1000 | 5000,
  ): Promise<OrderBook> {
    return this.restfulApi.get({
      path: APIEndpoints.depth,
      private: false,
      params: {
        symbol,
        limit: limit ?? 100,
      },
    });
  }
}
