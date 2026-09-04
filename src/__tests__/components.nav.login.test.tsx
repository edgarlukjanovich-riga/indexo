import { render, screen, fireEvent } from '@testing-library/react';
import NavHeader from '@/components/nav/NavHeader';
import LoginCard from '@/components/login/LoginCard';
import { APP_TITLE } from '@/lib/const';

describe('NavHeader', () => {
  it('matches snapshot', () => {
    const { container } = render(<NavHeader onLogout={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });

  it('renders app title', () => {
    render(<NavHeader onLogout={jest.fn()} />);
    expect(screen.getByText(APP_TITLE)).toBeInTheDocument();
  });

  it('calls onLogout when logout button clicked', () => {
    const onLogout = jest.fn();
    render(<NavHeader onLogout={onLogout} />);
    fireEvent.click(screen.getByTitle('Iziet'));
    expect(onLogout).toHaveBeenCalledTimes(1);
  });
});

describe('LoginCard', () => {
  const defaultProps = {
    code: '',
    error: '',
    onCodeChange: jest.fn(),
    onSubmit: jest.fn(),
  };

  it('matches snapshot', () => {
    const { container } = render(<LoginCard {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    const { container } = render(<LoginCard {...defaultProps} error="Invalid code." />);
    expect(container).toMatchSnapshot();
  });

  it('renders app title', () => {
    render(<LoginCard {...defaultProps} />);
    expect(screen.getByText(APP_TITLE)).toBeInTheDocument();
  });

  it('shows error message when error prop is set', () => {
    render(<LoginCard {...defaultProps} error="Invalid code." />);
    expect(screen.getByText('Invalid code.')).toBeInTheDocument();
  });

  it('does not show error when error prop is empty', () => {
    render(<LoginCard {...defaultProps} />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('calls onCodeChange when input changes', () => {
    const onCodeChange = jest.fn();
    render(<LoginCard {...defaultProps} onCodeChange={onCodeChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '123456' } });
    expect(onCodeChange).toHaveBeenCalledWith('123456');
  });

  it('calls onSubmit when form is submitted', () => {
    const onSubmit = jest.fn();
    render(<LoginCard {...defaultProps} onSubmit={onSubmit} />);
    fireEvent.submit(screen.getByRole('form'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
