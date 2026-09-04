export const APP_TITLE = 'INDEXO Test Portal';

export const SESSION_KEY = 'auth_session';

export const VALID_PERSONAL_CODE = '231090-14115';
export const PERSONAL_CODE_REGEX = /^\d{6}-\d{5}$/;

export const PAGE_SIZE = 12;
export const POST_BODY_PREVIEW_LENGTH = 80;
export const API_BASE = 'https://jsonplaceholder.typicode.com';

const CODE_FORMAT = 'Expected: XXXXXX-XXXXX (numbers only).';

export const MESSAGES = {
  FAILED_LOAD_POSTS: 'Failed to load posts.',
  FAILED_LOAD_POST: 'Failed to load post.',
  NO_POSTS: 'No posts found.',
  NO_DATA: 'No data available.',
  INVALID_CODE_FORMAT: 'Invalid format. ' + CODE_FORMAT,
  INVALID_CODE_VALUE: 'Personal code not recognised. ' + CODE_FORMAT,
} as const;
