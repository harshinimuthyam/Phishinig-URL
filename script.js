// Counter Animation for Dashboard
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 20);
            } else {
                counter.innerText = target.toLocaleString();
            }
        });
    };

    // Trigger animation when section is in view
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) animateCounters();
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.dashboard-preview'));
});

// Live Scanner Simulation
const scanBtn = document.getElementById('scanBtn');
const scanStatus = document.getElementById('scanStatus');

scanBtn.addEventListener('click', () => {
    const url = document.getElementById('urlInput').value;
    if(!url) return alert("Please enter a URL");

    scanStatus.innerHTML = "<p style='color: #00d2ff'>Analyzing URL patterns...</p>";
    
    setTimeout(() => {
        scanStatus.innerHTML = "<p style='color: #9d50bb'>Checking visual similarity...</p>";
        setTimeout(() => {
            const isSafe = Math.random() > 0.3;
            if(isSafe) {
                scanStatus.innerHTML = `<h3 style='color: #10b981'>✅ URL is Safe</h3><p>${url} shows no phishing indicators.</p>`;
            } else {
                scanStatus.innerHTML = `<h3 style='color: #ef4444'>❌ Phishing Detected</h3><p>Warning: ${url} matches known credential harvesting patterns.</p>`;
            }
        }, 1500);
    }, 1000);
});