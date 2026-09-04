import { render, screen, fireEvent } from '@testing-library/react';
import Drawer from '@/components/drawer/Drawer';

describe('Drawer', () => {
  it('matches snapshot when visible', () => {
    const { container } = render(
      <Drawer title="Test Drawer" visible={true} onClose={jest.fn()}>
        <p>Content</p>
      </Drawer>,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot when hidden', () => {
    const { container } = render(
      <Drawer title="Test Drawer" visible={false} onClose={jest.fn()}>
        <p>Content</p>
      </Drawer>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders title and children', () => {
    render(
      <Drawer title="My Drawer" visible={true} onClose={jest.fn()}>
        <p>Drawer content</p>
      </Drawer>,
    );
    expect(screen.getByText('My Drawer')).toBeInTheDocument();
    expect(screen.getByText('Drawer content')).toBeInTheDocument();
  });

  it('shows backdrop when visible', () => {
    const { container } = render(
      <Drawer title="Test" visible={true} onClose={jest.fn()}>
        <p>Content</p>
      </Drawer>,
    );
    expect(container.querySelector('.drawer-backdrop')).toBeInTheDocument();
  });

  it('hides backdrop when not visible', () => {
    const { container } = render(
      <Drawer title="Test" visible={false} onClose={jest.fn()}>
        <p>Content</p>
      </Drawer>,
    );
    expect(container.querySelector('.drawer-backdrop')).not.toBeInTheDocument();
  });

  it('applies drawer-visible class when visible', () => {
    const { container } = render(
      <Drawer title="Test" visible={true} onClose={jest.fn()}>
        <p>Content</p>
      </Drawer>,
    );
    expect(container.querySelector('.drawer-visible')).toBeInTheDocument();
  });

  it('applies drawer-hidden class when not visible', () => {
    const { container } = render(
      <Drawer title="Test" visible={false} onClose={jest.fn()}>
        <p>Content</p>
      </Drawer>,
    );
    expect(container.querySelector('.drawer-hidden')).toBeInTheDocument();
  });

  it('calls onClose when backdrop is clicked', () => {
    const onClose = jest.fn();
    const { container } = render(
      <Drawer title="Test" visible={true} onClose={onClose}>
        <p>Content</p>
      </Drawer>,
    );
    fireEvent.click(container.querySelector('.drawer-backdrop')!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(
      <Drawer title="Test" visible={true} onClose={onClose}>
        <p>Content</p>
      </Drawer>,
    );
    fireEvent.click(screen.getByLabelText('Aizvert'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
