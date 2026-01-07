let count = 0;

function buyNow(productName) {
    count++;
    document.getElementById("clickCount").innerText = count;
    alert("Thank you for your interest in " + productName + "!");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
