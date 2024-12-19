// Hàm để tính giờ hiện tại theo GMT+7
function getCurrentTime() {
	const options = { timeZone: 'Asia/Ho_Chi_Minh', hour12: false };
	const currentTime = new Date().toLocaleString('en-US', options);  // Lấy thời gian theo múi giờ GMT+7
	return new Date(currentTime);
}

function changeBackgroundColor() {
	const container = document.querySelector('.container');
	const currentTime = getCurrentTime();
	const hours = currentTime.getHours();

	if (hours >= 5 && hours < 18) {  // Từ 6h sáng đến 5h chiều
		container.style.backgroundColor = "#0093d8";  // Màu nền ban ngày
		container.style.background = "-moz-linear-gradient(top, #0093d8, #fff)";  // Gradient cho Firefox
		container.style.background = "-webkit-gradient(linear, left bottom, left top, color-stop(0, #fff), color-stop(1, #0093d8))";  // Gradient cho Webkit
	} else if (hours >= 16 && hours < 18) {  // Từ 4h chiều đến 18h tối
		container.style.backgroundColor = "rgb(255, 140, 0)";  // Màu hoàng hôn
		container.style.background = "-moz-linear-gradient(top, rgb(255, 140, 0), #fff)";  // Gradient cho Firefox
		container.style.background = "-webkit-gradient(linear, left bottom, left top, color-stop(0, #fff), color-stop(1, rgb(255, 140, 0)))";  // Gradient cho Webkit
	} else {  // Từ 18h tối đến 5h sáng
		container.style.backgroundColor = "rgb(26, 13, 171)";  // Màu ban đêm
		container.style.background = "-moz-linear-gradient(top, rgb(26, 13, 171), #fff)";  // Gradient cho Firefox
		container.style.background = "-webkit-gradient(linear, left bottom, left top, color-stop(0, #fff), color-stop(1, rgb(26, 13, 171)))";  // Gradient cho Webkit
	}
}

function updateCountdown() {
	const countdownElement = document.querySelector('.countdown');

	// Ngày Giáng Sinh (24/12)
	const xmasDate = new Date('December 24, 2024 00:00:00 GMT+0700');

	// Lấy thời gian hiện tại
	const currentTime = getCurrentTime();

	// Tính toán thời gian còn lại
	const timeDiff = xmasDate - currentTime;

	// Chuyển đổi thời gian còn lại thành ngày, giờ, phút, giây
	const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

	// Hiển thị đếm ngược
	countdownElement.innerHTML = `Còn lại: ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây <br> là đến Giáng Sinh của đôi mình`;

	if (timeDiff <= 0) {
		countdownElement.innerHTML = "Chúc mừng Giáng Sinh của đôi mình!";
	}
}

window.onload = function () {
	changeBackgroundColor();
	updateCountdown();
};

setInterval(changeBackgroundColor, 60000);  // Cập nhật mỗi phút
setInterval(updateCountdown, 1000); 


function createSnowflakes() {
	const container = document.querySelector('.fall_snow');
	const numberOfSnowflakes = 50;

	for (let i = 0; i < numberOfSnowflakes; i++) {
		const snowflake = document.createElement('div');
		snowflake.classList.add('snowflake');

		// Tạo hiệu ứng tuyết rơi tự do và ngẫu nhiên
		snowflake.style.left = `${Math.random() * window.innerWidth}px`;
		snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
		snowflake.style.animationDelay = `${Math.random() * 5}s`;

		container.appendChild(snowflake);
	}
}

createSnowflakes();
