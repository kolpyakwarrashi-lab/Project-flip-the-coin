const coin = document.getElementById("coin");
const button = document.getElementById("flip-btn");
const result = document.querySelector(".click");
const sound = document.getElementById("coin-sound");

button.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
    // Add animation
    coin.style.transition = "transform 0.5s";
    coin.style.transform = "rotateY(1080deg)";

    // Random result
    let randomNumber = Math.random();

    setTimeout(() => {

        if(randomNumber < 0.8){

            coin.src = "image/heads.svg";
            result.innerHTML = "<b>Result : Heads</b>";

        } else {

            coin.src = "image/tails.svg";
            result.innerHTML = "<b>Result : Tails</b>";
        }

        // Reset animation
        setTimeout(() => {
            coin.style.transform = "rotateY(0deg)";
        }, 100);

    }, 800);

});