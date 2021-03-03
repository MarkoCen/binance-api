export type SymbolStatus =
  | 'PRE_TRADING'
  | 'TRADING'
  | 'POST_TRADING'
  | 'END_OF_DAY'
  | 'HALT'
  | 'AUCTION_MATCH'
  | 'BREAK';

export type SymbolType = 'SPOT';

export type OrderStatus =
  | 'NEW'
  | 'PARTIALLY_FILLED'
  | 'FILLED'
  | 'CANCELED'
  | 'PENDING_CANCEL'
  | 'REJECTED'
  | 'EXPIRED';

export type OCOStatus = 'RESPONSE' | 'EXEC_STARTED' | 'ALL_DONE';

export type OCOOrderStatus = 'EXECUTING' | 'ALL_DONE' | 'REJECT';

export type ContingencyType = 'OCO';

export type OrderType =
  | 'LIMIT'
  | 'MARKET'
  | 'STOP_LOSS'
  | 'STOP_LOSS_LIMIT'
  | 'TAKE_PROFIT'
  | 'TAKE_PROFIT_LIMIT'
  | 'LIMIT_MAKER';

export type OrderResponseType = 'ACK' | 'RESULT' | 'FULL';

export type OrderSide = 'BUY' | 'SELL';

export type TimeInForce = 'GTC' | 'IOC' | 'FOK';

export type ChartInterval =
  | '1m'
  | '3m'
  | '5m'
  | '15m'
  | '30m'
  | '1h'
  | '2h'
  | '4h'
  | '6h'
  | '8h'
  | '12h'
  | '1d'
  | '3d'
  | '1w'
  | '1M';

export type RateLimitType = 'REQUEST_WEIGHT' | 'ORDERS' | 'RAW_REQUESTS';

export type RateLimitInterval = 'SECOND' | 'MINUTE' | 'DAY';

export type ExchangePermission = 'SPOT' | 'MARGIN';
