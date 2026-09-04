import { store } from '@/store/store';
import { postsApi } from '@/store/api/postsApi';

describe('store', () => {
  it('has postsApi reducer mounted', () => {
    const state = store.getState();
    expect(state).toHaveProperty(postsApi.reducerPath);
  });

  it('has dispatch function', () => {
    expect(typeof store.dispatch).toBe('function');
  });

  it('has getState function', () => {
    expect(typeof store.getState).toBe('function');
  });
});

describe('postsApi', () => {
  it('has correct reducerPath', () => {
    expect(postsApi.reducerPath).toBe('postsApi');
  });

  it('has getPosts endpoint', () => {
    expect(postsApi.endpoints).toHaveProperty('getPosts');
  });

  it('has getPost endpoint', () => {
    expect(postsApi.endpoints).toHaveProperty('getPost');
  });
});
