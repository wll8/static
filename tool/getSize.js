const body = document.body
const height = getComputedStyle(body).height
window.parent.postMessage({ action: `resize`, data: height }, `*`)
const observer = new MutationObserver(() => {
  const height = getComputedStyle(body).height
  window.parent.postMessage({ action: `resize`, data: height }, `*`)
})
observer.disconnect()
observer.observe(body, {
  attributes: true,
  childList: true,
  subtree: true,
})
