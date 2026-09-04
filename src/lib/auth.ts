import { SESSION_KEY } from '@/lib/const';

export function login(): void {
  localStorage.setItem(SESSION_KEY, 'true');
}

export function logout(): void {
  localStorage.removeItem(SESSION_KEY);
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(SESSION_KEY) === 'true';
}
