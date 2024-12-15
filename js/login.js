// Khi form được gửi đi, chuyển hướng đến trang sản phẩm
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn không cho form gửi theo cách thông thường
  window.location.href = '/html/homepage.html'; // Thay 'products.html' bằng đường dẫn thực tế của bạn
});