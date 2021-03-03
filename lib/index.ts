import { BinanceClient } from './binance-client';
import {
  SiteType,
  ClientConfigOptions,
  NumString,
  APIEndpoints,
} from './models';
import {
  SymbolStatus,
  SymbolType,
  ExchangePermission,
  OrderType,
  RateLimitInterval,
  RateLimitType,
  ChartInterval,
  ContingencyType,
  OCOOrderStatus,
  OCOStatus,
  OrderResponseType,
  OrderSide,
  OrderStatus,
  TimeInForce,
} from './binance-enum';
import {
  SymbolFilter,
  SymbolPriceFilter,
  SymbolPercentPriceFilter,
  SymbolMinNotionalFilter,
  SymbolMaxPositionFilter,
  SymbolMaxNumOrdersFilter,
  SymbolMaxNumIcebergOrdersFilter,
  SymbolMaxNumAlgoOrdersFilter,
  SymbolMarketLotSizeFilter,
  SymbolLotSizeFilter,
  SymbolIcebergPartsFilter,
  ExchangeMaxNumAlgoOrderFilter,
  ExchangeMaxNumOrderFilter,
  ExchangeFilter,
} from './binance-filter';
import { ExchangeInfo } from 'binance-response';

export { BinanceClient, APIEndpoints };

/** re-export library models */
export type { SiteType, ClientConfigOptions, NumString };

/** re-export binance response types */
export type { ExchangeInfo };

/** re-export binance enum types */
export type {
  SymbolStatus,
  SymbolType,
  ExchangePermission,
  OrderType,
  RateLimitInterval,
  RateLimitType,
  ChartInterval,
  ContingencyType,
  OCOOrderStatus,
  OCOStatus,
  OrderResponseType,
  OrderSide,
  OrderStatus,
  TimeInForce,
};

/** re-export binance filter types */
export type {
  SymbolFilter,
  SymbolPriceFilter,
  SymbolPercentPriceFilter,
  SymbolMinNotionalFilter,
  SymbolMaxPositionFilter,
  SymbolMaxNumOrdersFilter,
  SymbolMaxNumIcebergOrdersFilter,
  SymbolMaxNumAlgoOrdersFilter,
  SymbolMarketLotSizeFilter,
  SymbolLotSizeFilter,
  SymbolIcebergPartsFilter,
  ExchangeMaxNumAlgoOrderFilter,
  ExchangeMaxNumOrderFilter,
  ExchangeFilter,
};
