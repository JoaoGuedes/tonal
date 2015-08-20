var isInterval = require('../interval/isInterval')

/**
 * Test is the given set is an interval set
 *
 * An interval set is an array where all items are inteval strings and
 * the first item is 'P1'
 *
 * @param {Object} set - the set to be tested
 * @return {Boolean} true if is an interval set
 *
 * @example
 * isIntervalList(['P1']) // => true
 */
function isIntervalList (set) {
  if (typeof (set) === 'string') set = set.split(' ')
  else if (!Array.isArray(set)) return false

  if (set[0] !== 'P1' && set[0] !== 'P-1') return false
  for (var i = 0, total = set.length; i < total; i++) {
    if (!isInterval(set[i])) return false
  }
  return true
}

module.exports = isIntervalList