/**
 * binance api returns numeric strings instead of numbers
 * ex "0.000015"
 */
export type NumString = string;

export interface ClientConfigOptions {
  site: SiteType;
  apiKey: string;
  apiSecret: string;
  useServerTime?: boolean;
}

export type SiteType = 'binance.com' | 'binance.us';

export const APIEndpoints = {
  ping: '/api/v3/ping',
  time: '/api/v3/time',
  exchangeInfo: '/api/v3/exchangeInfo',
  depth: '/api/v3/depth',
};
