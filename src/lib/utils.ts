//Add dot at the end, if it not exist
export function ensureDot(text: string): string {
  return text.trimEnd().endsWith('.') ? text : `${text}.`;
}

//Take only first 11 digits from string
export function stripNonDigits(value: string): string {
  return value.replace(/\D/g, '').slice(0, 11);
}

//Add dash after 6th digit
export function formatPersonalCode(digits: string): string {
  return digits.length >= 6 ? `${digits.slice(0, 6)}-${digits.slice(6)}` : digits;
}
