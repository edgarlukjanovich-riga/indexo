'use client';

import { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { logout } from '@/lib/auth';
import NavHeader from '@/components/nav/NavHeader';
import PostList from '@/components/dashboard/PostList';
import PostDrawer from '@/components/drawer/PostDrawer';
import Spinner from '@/components/common/Spinner';

export default function DashboardPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useAuthGuard();

  function handleLogout() {
    logout();
    router.push('/');
  }

  return (
    <div className="min-vh-100 bg-light">
      <NavHeader onLogout={handleLogout} />
      <div className="container py-4">
        <h1 className="mb-4">Posts</h1>
        <Suspense fallback={<Spinner />}>
          <PostList onPostSelect={setSelectedId} />
        </Suspense>
      </div>
      <PostDrawer postId={selectedId} onClose={() => setSelectedId(null)} />
    </div>
  );
}
