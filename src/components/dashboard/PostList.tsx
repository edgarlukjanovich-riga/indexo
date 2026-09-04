'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PAGE_SIZE, MESSAGES } from '@/lib/const';
import { useGetPostsQuery } from '@/store/api/postsApi';
import PostCard from '@/components/dashboard/PostCard';
import Pagination from '@/components/common/Pagination';
import Spinner from '@/components/common/Spinner';
import ErrorAlert from '@/components/common/ErrorAlert';
import EmptyState from '@/components/common/EmptyState';

interface PostListProps {
  onPostSelect: (id: number) => void;
}

export default function PostList({ onPostSelect }: PostListProps) {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page') ?? 1));

  const { data: posts = [], isLoading, isError } = useGetPostsQuery();

  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  const paginated = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handlePageChange(newPage: number) {
    setPage(newPage);
    window.history.pushState(null, '', `?page=${newPage}`);
  }

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorAlert message={MESSAGES.FAILED_LOAD_POSTS} />;
  if (posts.length === 0) return <EmptyState message={MESSAGES.NO_POSTS} />;

  return (
    <>
      <div className="row g-3">
        {paginated.map((post) => (
          <div key={post.id} className="col-12 col-md-6 col-lg-4">
            <PostCard post={post} onClick={() => onPostSelect(post.id)} />
          </div>
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
}
