const htmlBody = document.querySelector("body");

const randomClickFunction = function () {
    const colors = ["green", "red", "blue", "magenta", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    htmlBody.style.backgroundColor = randomColor;
    console.log("The user clicked and set the color to " + randomColor);
};

htmlBody.onclick = randomClickFunction;
