// format address
export const formatAddress = (address?: string) => {
  return address ? address.replace(address?.slice(6, address.length - 4), '...') : '--'
}

// 去除末尾多余的0
export function cutZero(old: string) {
  const regexp = /(?:\.0*|(\.\d+?)0+)$/
  return old.replace(regexp, '$1')
}
