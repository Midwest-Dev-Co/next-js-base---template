// * Capitalize the first letter of every word in a string
export default function capitalize(str: string): string {
  return str
    .split('-')
    .join(' ')
    .split('_')
    .join(' ')
    .toLowerCase()
    .replace(/\b(\w)/g, (match) => match.toUpperCase());
}
