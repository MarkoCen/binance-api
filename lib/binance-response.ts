import {
  ExchangePermission,
  OrderType,
  RateLimitInterval,
  RateLimitType,
  SymbolStatus,
} from './binance-enum';
import { ExchangeFilter, SymbolFilter } from './binance-filter';
import { NumString } from './models';

export interface ExchangeInfo {
  timezone: 'UTC';
  serverTime: number;
  rateLimits: {
    rateLimitType: RateLimitType;
    interval: RateLimitInterval;
    intervalNum: number;
    limit: number;
  }[];
  exchangeFilters: ExchangeFilter[];
  symbols: {
    symbol: string;
    status: SymbolStatus;
    baseAsset: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quotePrecision: number;
    quoteAssetPrecision: number;
    baseCommissionPrecision: number;
    quoteCommissionPrecision: number;
    orderTypes: OrderType[];
    icebergAllowed: boolean;
    ocoAllowed: boolean;
    quoteOrderQtyMarketAllowed: boolean;
    isSpotTradingAllowed: boolean;
    isMarginTradingAllowed: boolean;
    filters: SymbolFilter[];
    permissions: ExchangePermission[];
  }[];
}

export interface OrderBook {
  lastUpdateId: number;
  bids: { price: NumString; qty: NumString }[];
  asks: { price: NumString; qty: NumString }[];
}
