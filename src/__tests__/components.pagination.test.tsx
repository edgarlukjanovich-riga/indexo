import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '@/components/common/Pagination';

const onPageChange = jest.fn();

beforeEach(() => onPageChange.mockClear());

describe('Pagination', () => {
  it('returns null when totalPages <= 1', () => {
    const { container } = render(
      <Pagination page={1} totalPages={1} onPageChange={onPageChange} />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('matches snapshot on middle page', () => {
    const { container } = render(
      <Pagination page={3} totalPages={5} onPageChange={onPageChange} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('hides previous button on first page', () => {
    render(<Pagination page={1} totalPages={3} onPageChange={onPageChange} />);
    expect(screen.queryByText('<<')).not.toBeInTheDocument();
    expect(screen.getByText('>>')).toBeInTheDocument();
  });

  it('hides next button on last page', () => {
    render(<Pagination page={3} totalPages={3} onPageChange={onPageChange} />);
    expect(screen.queryByText('>>')).not.toBeInTheDocument();
    expect(screen.getByText('<<')).toBeInTheDocument();
  });

  it('calls onPageChange with next page when >> clicked', () => {
    render(<Pagination page={2} totalPages={5} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText('>>'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange with previous page when << clicked', () => {
    render(<Pagination page={2} totalPages={5} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText('<<'));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it('calls onPageChange with correct page number when page button clicked', () => {
    render(<Pagination page={1} totalPages={3} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText('3'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('marks current page as active', () => {
    render(<Pagination page={2} totalPages={3} onPageChange={onPageChange} />);
    const activeItem = screen.getByText('2').closest('li');
    expect(activeItem).toHaveClass('active');
  });
});
