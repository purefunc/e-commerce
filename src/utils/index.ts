export const getUrlParam = param => {
  if (typeof window !== "undefined") {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    return urlParams?.get(param)
  }
}

export const hasUrlParam = param => {
  if (typeof window !== "undefined") {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    return urlParams?.has(param)
  }
}

export const transformParams = (url: string) => {
  const idx = url.indexOf("?") + 1
  const preQuery = url.slice(0, idx)
  const postQuery = url.slice(idx)
  const replaced = postQuery.replace(/\?/g, "&")
  return preQuery + replaced
}
