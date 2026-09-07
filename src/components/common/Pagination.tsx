interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface PageButtonProps {
  label: string | number;
  onClick: () => void;
  active?: boolean;
  title?: string;
}

function PageButton({ label, onClick, active, title }: PageButtonProps) {
  return (
    <li className={`page-item ${active ? 'active' : ''}`}>
      <button className="page-link" title={title} onClick={onClick}>
        {label}
      </button>
    </li>
  );
}

export default function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav className="mt-5 d-flex justify-content-center" aria-label="Posts pagination">
      <ul className="pagination">
        {page > 1 && (
          <PageButton
            label="&laquo;"
            title="Iepriekšēja lapa"
            onClick={() => onPageChange(page - 1)}
          />
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <PageButton
            key={n}
            label={n}
            title={n + '. lapa'}
            onClick={() => onPageChange(n)}
            active={n === page}
          />
        ))}
        {page < totalPages && (
          <PageButton label="&raquo;" title="Nākamā lapa" onClick={() => onPageChange(page + 1)} />
        )}
      </ul>
    </nav>
  );
}
