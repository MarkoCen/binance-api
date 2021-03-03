import { RestfulAPIClient } from '../lib/http';

describe('http', () => {
  describe('restful api client', () => {
    let client: RestfulAPIClient;

    beforeEach(() => {
      client = new RestfulAPIClient({
        website: 'binance.us',
        apiKey: process.env.API_KEY as string,
        apiSecret: process.env.API_SECRET as string,
        useServerTime: true,
      });
    });

    it('should able to request public api', async () => {
      const ticker = await client.get<{ symbol: string; price: string }>({
        path: '/api/v3/ticker/price',
        private: false,
        params: { symbol: 'BNBBTC' },
      });
      expect(ticker.symbol).toEqual('BNBBTC');
    });

    it('should able to request private api', async () => {
      const info = await client.get<{ accountType: string }>({
        path: '/api/v3/account',
        private: true,
        params: { recvWindow: 20000 },
      });
      expect(info.accountType).toEqual('SPOT');
    });
  });
});
