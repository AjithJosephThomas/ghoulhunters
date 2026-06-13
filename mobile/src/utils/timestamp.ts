/** ISO 8601 local datetime with timezone offset, e.g. 2026-06-13T14:30:00+10:00 */
export function getTimestampWithTimezone(date = new Date()): string {
  const offsetMinutes = -date.getTimezoneOffset();
  const sign = offsetMinutes >= 0 ? '+' : '-';
  const abs = Math.abs(offsetMinutes);
  const hours = String(Math.floor(abs / 60)).padStart(2, '0');
  const mins = String(abs % 60).padStart(2, '0');
  const local = date.toISOString().slice(0, 19);
  return `${local}${sign}${hours}:${mins}`;
}
