/**
 * Filters helpers
 */
class Filters {
  /** @function
   * @name capitalize
   * @param {string} value - date
   * desc String capitalize
   */
  capitalize (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

  /** @function
   * @name limitCharacters
   * @param {object} target - element to limit
   * @param {number} maxLength - Maximum length
   * @desc Limit characters into input
   */
  limitCharacters (target: any, maxLength: number) {
    if (target.value.length > maxLength)
      return (target.value = target.value.substr(0, maxLength))
  }

  /** @function
   * @name formatCurrency
   * @param {number} amount - amount to format
   * @desc Format a number to currency
   * @example
   * // returns $1,000.00
   * formatCurrency(1000)
   * @returns {string} Return format currency
   */
  formatCurrency (amount: number) {
    if (typeof amount !== 'number') {
      return amount
    }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return formatter.format(amount)
  }

  formatNumber (currency: string) {
    return Number(currency.replace(/[^0-9.-]+/g, ''))
  }

}

export default new Filters()
