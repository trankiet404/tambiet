// Countdown
const targetDate = new Date("Sep 13, 2025 00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;

}, 1000);

// Auto play music on load
window.addEventListener('load', () => {
    const music = document.getElementById('bg-music');
    music.play().catch(() => {
        document.body.addEventListener('click', () => music.play(), { once: true });
    });
});

// Message sequence (tách câu ngắn hơn để dễ đọc)
const messages = [
    "Ngày chia tay lớp Nhật đã gần kề...",
    "Ngày chia tay cô Thảo cũng đã đến...",
    "Sau hôm đó, cô sẽ dừng bước trên con đường giảng dạy...",
    "Cô đã dành trọn tình yêu và tâm huyết cho từng tiết học...",
    "Mỗi buổi sáng đến lớp, chúng em lại thấy nụ cười dịu dàng của cô,",
    "ánh mắt ấm áp chứa chan niềm tin...",
    "Những lúc tụi em mệt mỏi hay chán nản, cô vẫn luôn ở bên,",
    "động viên và truyền cho chúng em sức mạnh...",
    "Cô không chỉ dạy kiến thức mà còn dạy cách làm người,",
    "cách đứng dậy sau mỗi lần vấp ngã...",
    "Cảm ơn cô vì đã thương yêu và dạy dỗ tụi em nên người...",
    "Dù mai này mỗi người một nơi, kỷ niệm vẫn mãi còn...",
    "Mong rằng cô sẽ luôn hạnh phúc và mỉm cười,",
    "vì với chúng em, cô mãi là người cô đặc biệt nhất...",
    "Cảm ơn cô Thảo – người đã để lại dấu ấn không thể phai",
    "trong thanh xuân của chúng em."
];

const messageBox = document.getElementById("message-box");
let index = 0;

function showMessage() {
    // fade out chữ hiện tại
    messageBox.style.opacity = 0;

    setTimeout(() => {
        // đổi chữ mới sau khi fade out
        messageBox.textContent = messages[index];
        index = (index + 1) % messages.length;

        // fade in chữ mới
        messageBox.style.opacity = 1;
    }, 800); // fade out 800ms rồi đổi chữ
}

setTimeout(() => {
    showMessage();
    setInterval(showMessage, 4000);
}, 100000);


// Sakura effect
const canvas = document.getElementById('sakura');
const ctx = canvas.getContext('2d');
let petals = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Petal() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 4 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 + 0.5;
    this.opacity = Math.random();

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,182,193,${this.opacity})`;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    };

    this.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y > canvas.height) {
            this.x = Math.random() * canvas.width;
            this.y = -10;
        }
        this.draw();
    };
}

function init() {
    petals = [];
    for (let i = 0; i < 80; i++) {
        petals.push(new Petal());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(petal => petal.update());
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
const music = document.getElementById('bg-music');
const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
  music.play();
  overlay.style.display = 'none';
});
