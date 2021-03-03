import { NumString } from './models';

export interface ExchangeMaxNumOrderFilter {
  filterType: 'EXCHANGE_MAX_NUM_ORDERS';
  maxNumOrders: number;
}

export interface ExchangeMaxNumAlgoOrderFilter {
  filterType: 'EXCHANGE_MAX_ALGO_ORDERS';
  maxNumAlgoOrders: number;
}

export type ExchangeFilter =
  | ExchangeMaxNumOrderFilter
  | ExchangeMaxNumAlgoOrderFilter;

export interface SymbolPriceFilter {
  filterType: 'PRICE_FILTER';
  minPrice: NumString;
  maxPrice: NumString;
  tickSize: NumString;
}

export interface SymbolPercentPriceFilter {
  filterType: 'PERCENT_PRICE';
  multiplierUp: NumString;
  multiplierDown: NumString;
  avgPriceMins: number;
}

export interface SymbolLotSizeFilter {
  filterType: 'LOT_SIZE';
  minQty: NumString;
  maxQty: NumString;
  stepSize: NumString;
}

export interface SymbolMinNotionalFilter {
  filterType: 'MIN_NOTIONAL';
  minNotional: NumString;
  applyToMarket: boolean;
  avgPriceMins: number;
}

export interface SymbolIcebergPartsFilter {
  filterType: 'ICEBERG_PARTS';
  limit: number;
}

export interface SymbolMarketLotSizeFilter {
  filterType: 'MARKET_LOT_SIZE';
  minQty: NumString;
  maxQty: NumString;
  stepSize: NumString;
}

export interface SymbolMaxNumOrdersFilter {
  filterType: 'MAX_NUM_ORDERS';
  maxNumOrders: number;
}

export interface SymbolMaxNumAlgoOrdersFilter {
  filterType: 'MAX_NUM_ALGO_ORDERS';
  maxNumAlgoOrders: number;
}

export interface SymbolMaxNumIcebergOrdersFilter {
  filterType: 'MAX_NUM_ICEBERG_ORDERS';
  maxNumIcebergOrders: number;
}

export interface SymbolMaxPositionFilter {
  filterType: 'MAX_POSITION';
  maxPosition: NumString;
}

export type SymbolFilter =
  | SymbolIcebergPartsFilter
  | SymbolLotSizeFilter
  | SymbolMarketLotSizeFilter
  | SymbolMaxNumAlgoOrdersFilter
  | SymbolMaxNumIcebergOrdersFilter
  | SymbolMaxNumOrdersFilter
  | SymbolMaxPositionFilter
  | SymbolMinNotionalFilter
  | SymbolPercentPriceFilter
  | SymbolPriceFilter;
