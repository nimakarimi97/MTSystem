/**
 * Represents a route in the application.
 * @typedef {object} Route
 * @property {string} to - The route path.
 */

/**
 * Returns an array of routes.
 * @returns {Array<{ to: string }>} - The array of routes.
 */
export function getRoutes(): Array<{ to: string }> {
  return [
    { to: 'home' },
    // { to: 'who' },
    { to: 'fx' },
    { to: 'profit' },
    { to: 'calculator' },
    { to: 'reviews' },
    { to: 'prices' },
    { to: 'vps' },
    { to: 'faq' },
    { to: 'work' },
    { to: 'contact' },
  ]
}
