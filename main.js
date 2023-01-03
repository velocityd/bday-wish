let messages;

const getMessages = () => {
    messages = document.querySelectorAll(".message");
}

getMessages();

const showMessages = () => {
    messages.forEach(message => {
            setTimeout(() => {
                message.classList.add("showMessage");
            }, Number(message.id));
    });
}

const check = () => {
    document.querySelectorAll(".wishes")[0].scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
    });
    showMessages();
    setTimeout(() => {document.body.style.overflowY = "auto"; document.body.overflowX = "hidden"}, 3000);
}
