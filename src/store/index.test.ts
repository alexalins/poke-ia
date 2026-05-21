import { store } from './index';

describe('store', () => {
  it('registers the pokemon reducer', () => {
    expect(store.getState()).toHaveProperty('pokemon');
    expect(store.getState().pokemon).toMatchObject({
      entities: [],
      status: 'idle',
      error: null,
    });
  });
});
