let timeout;

window.addEventListener('mousemove', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log(`X: ${e.x}, Y: ${e.y}`);        
    }, 500);
});