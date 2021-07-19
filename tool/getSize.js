const body = document.body

sendSize() // 初始化时
addLoadEvent(sendSize) // 页面内容加载完成时
const observer = new MutationObserver(sendSize) // 当结点变更时
observer.disconnect()
observer.observe(body, {
  attributes: true,
  childList: true,
  subtree: true,
})

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    }
  }
}

function sendSize() {
  const height = getComputedStyle(body).height
  console.log('height', height)
  window.parent.postMessage({ action: 'resize', data: height }, '*')
}
