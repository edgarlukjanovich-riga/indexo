import Drawer from '@/components/drawer/Drawer';
import PostDetail from '@/components/drawer/PostDetail';

interface PostDrawerProps {
  postId: number | null;
  onClose: () => void;
}

export default function PostDrawer({ postId, onClose }: PostDrawerProps) {
  return (
    <Drawer title="Ieraksta saturs" visible={postId !== null} onClose={onClose}>
      {postId !== null && <PostDetail postId={postId} />}
    </Drawer>
  );
}
