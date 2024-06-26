export function getLoomIframeSrc(htmlString) {
  const regex = /<iframe[^>]*src="([^"]*)"[^>]*>/i
  const match = htmlString.match(regex)
  return match ? match[1] : null
}
