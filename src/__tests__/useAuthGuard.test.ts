import { renderHook } from '@testing-library/react';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { SESSION_KEY } from '@/lib/const';

const mockReplace = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({ replace: mockReplace }),
}));

beforeEach(() => {
  mockReplace.mockClear();
  localStorage.clear();
});

describe('useAuthGuard', () => {
  it('redirects to / when not authenticated', () => {
    renderHook(() => useAuthGuard());
    expect(mockReplace).toHaveBeenCalledWith('/');
  });

  it('does not redirect when authenticated', () => {
    localStorage.setItem(SESSION_KEY, 'true');
    renderHook(() => useAuthGuard());
    expect(mockReplace).not.toHaveBeenCalled();
  });
});
