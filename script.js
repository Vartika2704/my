const messages = [
    "Are you sure cutiee?",
    "pakka waala pakkaa??",
    "Pookie pleeejj...",
    "If you say no, I will be really sad babyy...",
    "I will be very sad naa...",
    "Aaaannnnnn plzzz naa...",
    "Theeek h nahi maanre naa...",
    "Hehehe aise kaise, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}