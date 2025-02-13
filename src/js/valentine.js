function spawnYesButton() {
    // Create a new "Yes" button
    let yesButton = document.createElement("button");
    yesButton.classList.add("yes");
    yesButton.innerHTML = "Yes 💘";
    yesButton.onclick = showHearts;

    // Random position inside the viewport
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    yesButton.style.position = "absolute";
    yesButton.style.left = `${x}px`;
    yesButton.style.top = `${y}px`;

    document.body.appendChild(yesButton);
}

function showHearts() {
    // Hide question and buttons smoothly
    document.getElementById("question").style.opacity = "0";
    document.getElementById("buttons").style.opacity = "0";

    // Show "I Love You" message
    document.getElementById("loveMessage").style.opacity = "1";

    // Fade out all "Yes" buttons
    document.querySelectorAll(".yes").forEach(button => {
        button.style.opacity = "0";
        setTimeout(() => button.remove(), 800); // Remove from DOM after fade-out
    });

    // Create floating hearts
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 20000);
    }
}