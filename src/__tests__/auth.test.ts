import { login, logout, isAuthenticated } from '@/lib/auth';
import { SESSION_KEY } from '@/lib/const';

describe('auth', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('login', () => {
    it('sets session key in localStorage', () => {
      login();
      expect(localStorage.getItem(SESSION_KEY)).toBe('true');
    });
  });

  describe('logout', () => {
    it('removes session key from localStorage', () => {
      localStorage.setItem(SESSION_KEY, 'true');
      logout();
      expect(localStorage.getItem(SESSION_KEY)).toBeNull();
    });
  });

  describe('isAuthenticated', () => {
    it('returns true when session key is set', () => {
      localStorage.setItem(SESSION_KEY, 'true');
      expect(isAuthenticated()).toBe(true);
    });

    it('returns false when session key is not set', () => {
      expect(isAuthenticated()).toBe(false);
    });

    it('returns false when session key has wrong value', () => {
      localStorage.setItem(SESSION_KEY, 'false');
      expect(isAuthenticated()).toBe(false);
    });
  });
});
