// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const hours = 1 - now.getHours() % 2;
    const minutes = 59 - now.getMinutes();
    const seconds = 59 - now.getSeconds();
    
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    document.getElementById('countdown').textContent = 
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Floating coins animation
function createCoins() {
    const container = document.getElementById('coins-container');
    const coinCount = 20;
    
    for (let i = 0; i < coinCount; i++) {
        const coin = document.createElement('div');
        coin.className = 'coin';
        
        // Random position
        const startLeft = Math.random() * 100;
        const animationDuration = 5 + Math.random() * 10;
        const delay = Math.random() * 15;
        const size = 5 + Math.random() * 15;
        
        coin.style.left = `${startLeft}vw`;
        coin.style.bottom = `-${size}px`;
        coin.style.width = `${size}px`;
        coin.style.height = `${size}px`;
        coin.style.animationDuration = `${animationDuration}s`;
        coin.style.animationDelay = `${delay}s`;
        
        container.appendChild(coin);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createCoins();
});