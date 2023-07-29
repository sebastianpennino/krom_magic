export function toCamelCase(phrase: string): string {
  return phrase
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

export function removeNonLetters(text: string): string {
  return String(text).replace(/[^a-zA-Z]+/g, "");
}

export function removeNonLettersHyphensUnderscores(text: string): string {
  return String(text).replace(/[^a-zA-Z-_]+/g, "");
}