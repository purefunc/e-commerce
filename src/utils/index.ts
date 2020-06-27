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
