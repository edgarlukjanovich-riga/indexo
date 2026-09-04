import { PERSONAL_CODE_REGEX, VALID_PERSONAL_CODE, MESSAGES } from '@/lib/const';

describe('PERSONAL_CODE_REGEX', () => {
  it('matches valid personal code', () => {
    expect(PERSONAL_CODE_REGEX.test('231090-14115')).toBe(true);
  });

  it('rejects code without dash', () => {
    expect(PERSONAL_CODE_REGEX.test('23109014115')).toBe(false);
  });

  it('rejects code with letters', () => {
    expect(PERSONAL_CODE_REGEX.test('XXXXXX-XXXXX')).toBe(false);
  });

  it('rejects code with wrong segment lengths', () => {
    expect(PERSONAL_CODE_REGEX.test('12345-14115')).toBe(false);
    expect(PERSONAL_CODE_REGEX.test('231090-1411')).toBe(false);
  });

  it('matches the predefined valid code', () => {
    expect(PERSONAL_CODE_REGEX.test(VALID_PERSONAL_CODE)).toBe(true);
  });
});

describe('MESSAGES', () => {
  it('contains all required keys', () => {
    expect(MESSAGES).toHaveProperty('FAILED_LOAD_POSTS');
    expect(MESSAGES).toHaveProperty('FAILED_LOAD_POST');
    expect(MESSAGES).toHaveProperty('NO_POSTS');
    expect(MESSAGES).toHaveProperty('NO_DATA');
    expect(MESSAGES).toHaveProperty('INVALID_CODE_FORMAT');
    expect(MESSAGES).toHaveProperty('INVALID_CODE_VALUE');
  });

  it('all messages are non-empty strings', () => {
    Object.values(MESSAGES).forEach((msg) => {
      expect(typeof msg).toBe('string');
      expect(msg.length).toBeGreaterThan(0);
    });
  });
});
