
const navbar = document.getElementById("navbar");


function handleScroll() {
    if (window.scrollY > 20) { 
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}
window.addEventListener("scroll", handleScroll);



let colorIndex = 0;
const colors = ["yellow", "white","red"];
const texts = ["Network Engineering", "Journalist",];

function changeTextAndColor() {
    const spanElement = document.getElementById('keterangan-porto');
    
    // Fade out the current text before changing (optional)
    spanElement.style.opacity = "0";
    
    // Change text after 1 second (to match the transition duration)
    setTimeout(() => {
        // Change text
        spanElement.textContent = texts[colorIndex];
        
        // Change color
        spanElement.style.color = colors[colorIndex];
        
        // Fade the text back in
        spanElement.style.opacity = "1";
        
        // Update index to cycle through colors and texts
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000); // Wait for the fade-out effect to complete before updating text
}
setInterval(changeTextAndColor, 3000);