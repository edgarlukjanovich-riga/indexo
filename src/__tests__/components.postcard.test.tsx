import { render, screen, fireEvent } from '@testing-library/react';
import PostCard from '@/components/dashboard/PostCard';
import { POST_BODY_PREVIEW_LENGTH } from '@/lib/const';
import { Post } from '@/lib/types';

const mockPost: Post = {
  id: 1,
  userId: 1,
  title: 'test title',
  body: 'test body content',
};

const longBodyPost: Post = {
  ...mockPost,
  body: 'a'.repeat(POST_BODY_PREVIEW_LENGTH + 10),
};

describe('PostCard', () => {
  it('matches snapshot', () => {
    const { container } = render(<PostCard post={mockPost} onClick={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });

  it('renders post id, title and body', () => {
    render(<PostCard post={mockPost} onClick={jest.fn()} />);
    expect(screen.getByText(`#${mockPost.id}`)).toBeInTheDocument();
    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
  });

  it('calls onClick when card is clicked', () => {
    const onClick = jest.fn();
    render(<PostCard post={mockPost} onClick={onClick} />);
    fireEvent.click(screen.getByText(mockPost.title).closest('.card')!);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('shows ellipsis when body exceeds preview length', () => {
    render(<PostCard post={longBodyPost} onClick={jest.fn()} />);
    expect(screen.getByText(/…$/)).toBeInTheDocument();
  });

  it('adds dot when body is shorter than preview length', () => {
    render(<PostCard post={mockPost} onClick={jest.fn()} />);
    expect(screen.getByText(/\.$/)).toBeInTheDocument();
  });
});
