'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

export function useAuthGuard(): void {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) router.replace('/');
  }, [router]);
}
