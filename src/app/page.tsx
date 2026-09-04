'use client';

import { useState, useEffect, SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { login, isAuthenticated } from '@/lib/auth';
import { VALID_PERSONAL_CODE, PERSONAL_CODE_REGEX, MESSAGES } from '@/lib/const';
import { stripNonDigits, formatPersonalCode } from '@/lib/utils';
import LoginCard from '@/components/login/LoginCard';

export default function LoginPage() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated()) router.replace('/dashboard');
  }, [router]);

  function handleCodeChange(value: string) {
    setCode(formatPersonalCode(stripNonDigits(value)));
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    setError('');

    if (!PERSONAL_CODE_REGEX.test(code)) {
      setError(MESSAGES.INVALID_CODE_FORMAT);
      return;
    }
    if (code !== VALID_PERSONAL_CODE) {
      setError(MESSAGES.INVALID_CODE_VALUE);
      return;
    }

    login();
    router.push('/dashboard');
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <LoginCard
        code={code}
        error={error}
        onCodeChange={handleCodeChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
