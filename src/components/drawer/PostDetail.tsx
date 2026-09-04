import { useGetPostQuery } from '@/store/api/postsApi';
import { MESSAGES } from '@/lib/const';
import { ensureDot } from '@/lib/utils';
import Spinner from '@/components/common/Spinner';
import ErrorAlert from '@/components/common/ErrorAlert';
import EmptyState from '@/components/common/EmptyState';

interface PostDetailProps {
  postId: number;
}

export default function PostDetail({ postId }: PostDetailProps) {
  const { data: post, isLoading, isError } = useGetPostQuery(postId);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorAlert message={MESSAGES.FAILED_LOAD_POST} />;
  if (!post) return <EmptyState message={MESSAGES.NO_DATA} />;

  return (
    <>
      <h3>
        <span className="badge bg-primary">#{post.id}</span>
      </h3>
      <h2 className="mb-3 first-upper">{post.title}</h2>
      <p className="first-upper lead">{ensureDot(post.body)}</p>
    </>
  );
}
