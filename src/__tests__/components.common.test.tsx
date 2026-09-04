import { render, screen } from '@testing-library/react';
import EmptyState from '@/components/common/EmptyState';
import ErrorAlert from '@/components/common/ErrorAlert';
import Spinner from '@/components/common/Spinner';

describe('EmptyState', () => {
  it('matches snapshot', () => {
    const { container } = render(<EmptyState message="No data." />);
    expect(container).toMatchSnapshot();
  });

  it('renders the message', () => {
    render(<EmptyState message="Nothing here." />);
    expect(screen.getByText('Nothing here.')).toBeInTheDocument();
  });
});

describe('ErrorAlert', () => {
  it('matches snapshot', () => {
    const { container } = render(<ErrorAlert message="Something went wrong." />);
    expect(container).toMatchSnapshot();
  });

  it('renders the message', () => {
    render(<ErrorAlert message="Failed to load." />);
    expect(screen.getByText('Failed to load.')).toBeInTheDocument();
  });
});

describe('Spinner', () => {
  it('matches snapshot', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });

  it('renders loading text for screen readers', () => {
    render(<Spinner />);
    expect(screen.getByText('Loading…')).toBeInTheDocument();
  });
});
