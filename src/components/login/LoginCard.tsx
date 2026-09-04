'use client';

import { SyntheticEvent } from 'react';
import { APP_TITLE, PERSONAL_CODE_PLACEHOLDER } from '@/lib/const';

interface LoginCardProps {
  code: string;
  error: string;
  onCodeChange: (value: string) => void;
  onSubmit: (e: SyntheticEvent) => void;
}

export default function LoginCard({ code, error, onCodeChange, onSubmit }: LoginCardProps) {
  return (
    <div className="card shadow-sm login-card">
      <div className="card-body p-4">
        <h4 className="card-title mb-4 text-center">{APP_TITLE}</h4>
        <form onSubmit={onSubmit} noValidate aria-label="login">
          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              Personas kods
            </label>
            <input
              id="code"
              type="text"
              className={`form-control ${error ? 'is-invalid' : ''}`}
              placeholder={PERSONAL_CODE_PLACEHOLDER}
              value={code}
              onChange={(e) => onCodeChange(e.target.value)}
              autoComplete="off"
              autoFocus
            />
            {error && <div className="invalid-feedback">{error}</div>}
          </div>
          <button type="submit" title="Pieslēgties" className="btn btn-primary btn-lg w-100">
            Pieslēgties
          </button>
        </form>
      </div>
    </div>
  );
}
