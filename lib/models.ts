export interface ClientConfigOptions {
  site: SiteType;
  apiKey: string;
  apiSecret: string;
  useServerTime?: boolean;
}

export type SiteType = 'binance.com' | 'binance.us';
