
/* ================= CLOCK ================= */

setInterval(() => {
    const clock = document.getElementById("clock");

    if (clock) {
        clock.innerHTML = new Date().toLocaleTimeString();
    }
}, 1000);

/* ================= MUSIC ================= */

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

let playing = false;

function toggleMusic() {

    if (!music || !btn) return;

    if (!playing) {
        music.play();
        btn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        btn.innerHTML = "🎵 Play Music";
    }

    music.volume = 0.2;
    playing = !playing;
}

/* ================= MOBILE MENU ================= */

function toggleMenu() {
    document.getElementById("navLinks")
        .classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navLinks")
            .classList.remove("active");

    });

});

/* ================= CHATBOX ================= */

function toggleChat() {

    const chat = document.getElementById("chat-container");

    if (!chat) return;

    if (chat.style.display === "block") {
        chat.style.display = "none";
    } else {
        chat.style.display = "block";
    }
}

function handleKey(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

}

function sendMessage() {

    const input = document.getElementById("user-input");

    if (!input) return;

    const text = input.value.trim();

    if (text === "") return;

    const messages = document.getElementById("chat-messages");

    messages.innerHTML += `
        <div class="user-message">
            ${text}
        </div>
    `;

    const reply = getBotReply(text.toLowerCase());

    setTimeout(() => {

        messages.innerHTML += `
            <div class="bot-message">
                ${reply}
            </div>
        `;

        messages.scrollTop = messages.scrollHeight;

    }, 500);

    input.value = "";
}

function askBot(question) {

    const messages = document.getElementById("chat-messages");

    messages.innerHTML += `
        <div class="user-message">
            ${question}
        </div>
    `;

    const reply = getBotReply(question.toLowerCase());

    setTimeout(() => {

        messages.innerHTML += `
            <div class="bot-message">
                ${reply}
            </div>
        `;

        messages.scrollTop = messages.scrollHeight;

    }, 300);
}

/* ================= AI REPLY ================= */

function getBotReply(message) {

    if (
        message.includes("bạn là ai") ||
        message.includes("quang là ai")
    ) {
        return "👋 Mình là Thanh Quang, sinh viên Công nghệ Thông tin và đam mê lập trình web.";
    }

    if (
        message.includes("tên")
    ) {
        return "😎 Mình là trợ lý AI của Thanh Quang.";
    }

    if (
        message.includes("kỹ năng") ||
        message.includes("skill")
    ) {
        return "💻 Kỹ năng: HTML, CSS, JavaScript, Java, SQL.";
    }

    if (
        message.includes("github")
    ) {
        return "💻 Github: github.com/thanhquanggg-maker";
    }

    if (
        message.includes("discord")
    ) {
        return "🎮 Discord: _24th08_";
    }

    if (
        message.includes("facebook")
    ) {
        return "📘 Facebook: thanhquang2408";
    }

    if (
        message.includes("instagram")
    ) {
        return "📷 Instagram: _thqng";
    }

    if (
        message.includes("dự án") ||
        message.includes("project")
    ) {
        return "🚀 Các dự án hiện tại: Website Portfolio, Discord Music Bot và Minecraft Server.";
    }

    if (
        message.includes("liên hệ") ||
        message.includes("email")
    ) {
        return "📧 Email: quangnot1@gmail.com";
    }

    if (
        message.includes("game")
    ) {
        return "🎮 Mình thích PUBG, Minecraft và Arena of Valor.";
    }

    return "🤖 Xin lỗi, mình chưa được lập trình để trả lời câu hỏi này.";
}

tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 100
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.8
        },
        size: {
            value: { min: 1, max: 4 }
        },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: true
        }
    }
});

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 500);

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

function scrollToTop(){

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


const quotes = [
    "💻 Code. Learn. Build.",
    "🚀 Every expert was once a beginner.",
    "🔥 Keep coding and never stop learning.",
    "🎯 Success is built one line of code at a time.",
    "⚡ Turning ideas into reality through code.",
    "🌟 Dream big, code bigger.",
    "👨‍💻 Eat. Sleep. Code. Repeat.",
    "🧠 Learning AI, Building the Future."
];

const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote").textContent = randomQuote;


function changeQuote(){

    const quote = document.getElementById("quote");

    quote.style.opacity = 0;

    setTimeout(() => {

        quote.textContent =
            quotes[Math.floor(Math.random() * quotes.length)];

        quote.style.opacity = 1;

    }, 500);

}

changeQuote();

setInterval(changeQuote, 5000);


const texts = [
    "🎵 Now Playing: Người yêu bỏ lỡ",
];

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect(){

    if(charIndex < texts[textIndex].length){

        typing.textContent +=
            texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    }else{

        setTimeout(deleteEffect, 1500);

    }

}

function deleteEffect(){

    if(charIndex > 0){

        typing.textContent =
            texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteEffect, 50);

    }else{

        textIndex = (textIndex + 1) % texts.length;

        setTimeout(typeEffect, 500);

    }

}

typeEffect();


const galaxyEvent = document.getElementById("galaxy-event");
const galaxyText = document.getElementById("galaxy-text");

function showGalaxyWhisper(){

    const messages = [
        "🌌 The universe is listening...",
        "Bạn không đi một mình.",
        "Có những kết nối không thể nhìn thấy.",
        "Mọi thứ xảy ra đều có lý do.",
        "Cảm ơn vì đã ghé qua nơi này.",
        "Bạn vừa đi ngang qua một điều nhỏ bé.",
        "Chúc bạn một ngày bình yên.",
        "Có những điều không cần hiểu, chỉ cần cảm nhận.",
        "Giữa hàng tỷ khả năng, bạn đã xuất hiện ở đây",
        "Không phải mọi cuộc gặp đều cần lý do",
        "Khoảnh khắc này sẽ không lặp lại lần thứ hai",
        "Có thể bạn chưa nhận ra, nhưng bạn đang tiến bộ từng ngày",
        "Bạn không cần phải đi nhanh, chỉ cần không dừng lại",
        "Những điều bạn đang lo, rồi sẽ nhỏ lại theo thời gian",
        "Không phải mọi thứ đều rõ ràng ngay lúc này",
        "Điều quan trọng không phải là bạn ở đâu, mà là bạn đang đi",
        "Mỗi lựa chọn nhỏ đều đang thay đổi tương lai của bạn",
        "Có những người xa lạ, nhưng lại cùng đi qua một khoảnh khắc",
        "Bạn không đơn độc như bạn nghĩ",
        "Ngay cả sự im lặng cũng đang kết nối mọi thứ",
    ];

    const random =
        messages[Math.floor(Math.random() * messages.length)];

    galaxyText.innerText = random;

    galaxyEvent.style.display = "flex";

    setTimeout(() => {
        galaxyEvent.style.display = "none";
    }, 4000);
}

setInterval(() => {

    if(Math.random() < 1){ // 2% chance
        showGalaxyWhisper();
    }

}, 30000);

galaxyEvent.addEventListener("click", () => {
    galaxyEvent.style.display = "none";
});