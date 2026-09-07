import { APP_TITLE } from '@/lib/const';

interface NavHeaderProps {
  onLogout: () => void;
}

export default function NavHeader({ onLogout }: NavHeaderProps) {
  return (
    <nav className="navbar navbar-dark bg-primary px-3">
      <span className="navbar-brand fw-semibold">{APP_TITLE}</span>
      <button
        className="btn btn-outline-light fw-semibold btn px-4"
        title="Iziet"
        onClick={onLogout}
      >
        Iziet
      </button>
    </nav>
  );
}
