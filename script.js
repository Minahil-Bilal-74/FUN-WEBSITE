const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * 200;
    const y = Math.random() * 100;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

function goToNextPage() {
    const sound = document.getElementById("yesSound");
    sound.play();

    setTimeout(function () {
        window.location.href = "second.html";
    }, 1000);
}
