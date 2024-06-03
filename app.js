// app.js

let memoryLeakArray = [];
let leakInterval;

document.getElementById('startLeak').addEventListener('click', () => {
    if (leakInterval) return; // Prevent multiple intervals

    leakInterval = setInterval(() => {
        // Creating objects and pushing them to the array to simulate memory leak
        for (let i = 0; i < 1000; i++) {
            memoryLeakArray.push(new Array(1000).fill('memory leak'));
        }
        console.log(`Leaked objects count: ${memoryLeakArray.length}`);
    }, 1000);
});

document.getElementById('stopLeak').addEventListener('click', () => {
    clearInterval(leakInterval);
    leakInterval = null;
    console.log('Memory leak stopped');
});
