'use client';

import { SyntheticEvent } from 'react';

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
        <h4 className="card-title mb-4 text-center">Sign In</h4>
        <form onSubmit={onSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              Personal Code
            </label>
            <input
              id="code"
              type="text"
              className={`form-control ${error ? 'is-invalid' : ''}`}
              placeholder="XXXXXX-XXXXX"
              value={code}
              onChange={(e) => onCodeChange(e.target.value)}
              autoComplete="off"
              autoFocus
            />
            {error && <div className="invalid-feedback">{error}</div>}
          </div>
          <button type="submit" className="btn btn-primary btn-lg w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
