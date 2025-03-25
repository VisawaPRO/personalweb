function createMetallicaClock(parentElement) {
    const clockContainer = document.createElement('div');
    clockContainer.className = 'clock-container';

    const timeDisplay = document.createElement('div');
    timeDisplay.className = 'time';

    const infoDisplay = document.createElement('div');
    infoDisplay.className = 'info';

    clockContainer.appendChild(timeDisplay);
    clockContainer.appendChild(infoDisplay);
    parentElement.appendChild(clockContainer);

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        const date = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear();
        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const dayName = days[now.getDay()];

        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        infoDisplay.innerHTML = `<div>${date}/${month}/${year}</div><div>${dayName}</div>`;
    }

    setInterval(updateClock, 1000);
    updateClock();
}

document.addEventListener('DOMContentLoaded', () => {
    const clockContainer = document.getElementById('clock');
    if (clockContainer) {
        createMetallicaClock(clockContainer);
    }
});
