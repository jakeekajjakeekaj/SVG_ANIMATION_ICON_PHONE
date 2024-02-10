const svg = document.getElementById('triangles').addEventListener("click", ()=> {
    const colors = ['#f00', '#00f', '#0f0', '#cc0', '#47e', '#0cc', '#635bff', '#80e9ff'];
    const rand = ()=> colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.cssText = `
    --dark-color: ${rand()};
    --light-color: ${rand()};
    `;
});

