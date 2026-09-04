import { ensureDot, stripNonDigits, formatPersonalCode } from '@/lib/utils';

describe('ensureDot', () => {
  it('adds dot when missing', () => {
    expect(ensureDot('hello')).toBe('hello.');
  });

  it('does not add dot when already present', () => {
    expect(ensureDot('hello.')).toBe('hello.');
  });

  it('adds dot when text ends with whitespace', () => {
    expect(ensureDot('hello  ')).toBe('hello  .');
  });
});

describe('stripNonDigits', () => {
  it('removes non-digit characters', () => {
    expect(stripNonDigits('abc123')).toBe('123');
  });

  it('removes dashes', () => {
    expect(stripNonDigits('231090-14115')).toBe('23109014115');
  });

  it('caps at 11 digits', () => {
    expect(stripNonDigits('123456789012345')).toBe('12345678901');
  });

  it('returns empty string for no digits', () => {
    expect(stripNonDigits('abc')).toBe('');
  });
});

describe('formatPersonalCode', () => {
  it('inserts dash after 6 digits', () => {
    expect(formatPersonalCode('23109014115')).toBe('231090-14115');
  });

  it('inserts dash when exactly 6 digits', () => {
    expect(formatPersonalCode('231090')).toBe('231090-');
  });

  it('does not insert dash for less than 6 digits', () => {
    expect(formatPersonalCode('12345')).toBe('12345');
  });

  it('returns empty string as is', () => {
    expect(formatPersonalCode('')).toBe('');
  });
});
