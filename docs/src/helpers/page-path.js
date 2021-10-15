export const pagePath = location => {
  return `${location.pathname}${location.hash}`
}