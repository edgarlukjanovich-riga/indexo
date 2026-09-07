import { Post } from '@/lib/types';
import { POST_BODY_PREVIEW_LENGTH } from '@/lib/const';
import { ensureDot } from '@/lib/utils';

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

export default function PostCard({ post, onClick }: PostCardProps) {
  return (
    <div className="card h-100 shadow-sm post-card" onClick={onClick} title="Rādīt saturu">
      <div className="card-body">
        <span className="badge bg-secondary mb-2">#{post.id}</span>
        <h5 className="card-title first-upper">{post.title}</h5>
        <p className="card-text text-muted small first-upper">
          {post.body.length > POST_BODY_PREVIEW_LENGTH
            ? `${post.body.slice(0, POST_BODY_PREVIEW_LENGTH)}…`
            : ensureDot(post.body.slice(0, POST_BODY_PREVIEW_LENGTH))}
        </p>
      </div>
    </div>
  );
}
