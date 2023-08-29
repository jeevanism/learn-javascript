/**
 * Javascript ES2021 has a numeric seperator '-'
 * This helps to get more readability for long numbers
 * The numerica seperator has no effect other than visual readability
 */




/**
 * 45_43_000_000: Underscores (_) are used as visual separators in numeric literals for improved readability.
 * They have no impact on the actual value. So, 45_43_000_000 is the same as 45430000000.
 * 2e5: This is scientific notation. The e indicates exponent notation, and 2e5 means 2 multiplied by 10 raised to the power of 5, which equals 200000.
 * Adding 45430000000 and 200000 together gives you 45430200000.
 */

const result = 45_43_000_000 + 2e5
console.log(result)

