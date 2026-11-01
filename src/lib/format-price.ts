const BENGALI_DIGITS: Record<string, string> = {
  "0": "০",
  "1": "১",
  "2": "২",
  "3": "৩",
  "4": "৪",
  "5": "৫",
  "6": "৬",
  "7": "৭",
  "8": "৮",
  "9": "৯",
};

const ENGLISH_DIGITS: Record<string, string> = {
  "০": "0",
  "১": "1",
  "২": "2",
  "৩": "3",
  "৪": "4",
  "৫": "5",
  "৬": "6",
  "৭": "7",
  "৮": "8",
  "৯": "9",
};

/**
 * Converts English numbers or numeric strings into Bengali numerals.
 */
export function toBengaliDigits(value: number | string | null | undefined): string {
  if (value === null || value === undefined || value === "") return "";
  return String(value).replace(/[0-9]/g, (digit) => BENGALI_DIGITS[digit] || digit);
}

/**
 * Converts Bengali numeral strings into standard English numeric strings.
 */
export function fromBengaliDigits(value: string | number | null | undefined): string {
  if (value === null || value === undefined) return "";
  return String(value).replace(/[০-৯]/g, (digit) => ENGLISH_DIGITS[digit] || digit);
}

/**
 * Maps English unit strings to standard Bengali display strings.
 */
export function formatUnitBn(unit?: string): string {
  if (!unit) return "";
  const normalized = unit.toLowerCase().trim();
  switch (normalized) {
    case "kg":
      return "কেজি";
    case "litre":
    case "liter":
      return "লিটার";
    case "dozen":
      return "ডজন";
    case "piece":
    case "pcs":
    case "pc":
      return "পিস";
    default:
      return unit;
  }
}

/**
 * Formats a numeric price into Bengali currency representation with ৳ symbol and optional unit.
 * Example: formatPrice(148, 'kg') => '৳১৪৮/কেজি'
 */
export function formatPrice(
  amount: number | string | null | undefined,
  unit?: string
): string {
  if (amount === null || amount === undefined || amount === "") {
    return "—";
  }

  const bnAmount = toBengaliDigits(amount);
  const formatted = `৳${bnAmount}`;

  if (unit) {
    const unitBn = formatUnitBn(unit);
    return `${formatted}/${unitBn}`;
  }

  return formatted;
}

