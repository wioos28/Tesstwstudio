console.log("App đang chạy mượt mà!");

function testError() {
  console.warn("Cảnh báo: Bạn đang thử gọi một hàm lỗi.");
  nonExistentFunction();
}

function triggerExit() {
  window.parent.postMessage('WIO_EXIT_APP', '*');
}