import { ReactNode } from 'react';

interface DrawerProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Drawer({ title, visible, onClose, children }: DrawerProps) {
  return (
    <>
      {visible && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 drawer-backdrop"
          onClick={onClose}
        />
      )}
      <div
        className={`position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column drawer ${visible ? 'drawer-visible' : 'drawer-hidden'}`}
      >
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
          <h5 className="mb-0">{title}</h5>
          <button className="btn-close" onClick={onClose} aria-label="Close" />
        </div>
        <div className="p-4 overflow-auto flex-grow-1">{children}</div>
      </div>
    </>
  );
}
