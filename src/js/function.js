function showLove() {
            document.getElementById("message").classList.remove("hidden");
        }

        function moveNo() {
            const btnNo = document.querySelector(".no");
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 100);
            btnNo.style.left = `${x}px`;
            btnNo.style.top = `${y}px`;
        }