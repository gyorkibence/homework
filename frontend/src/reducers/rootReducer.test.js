import store from 'store';
import appInitialState from './app/initialState';

describe('check initial state of the root reducer', () => {
  it('should return the initial state of the reducers', () => {
    expect(store.getState().app).toEqual(appInitialState);
  });
});
