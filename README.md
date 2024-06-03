**Memory Leak Simulation for a JavaScript Web App"**

>This is a simple JavaScript web app to simulate a memory leak. This can be used to understand how memory leaks occur and how to detect and debug them. 

## The App: 
HTML File (index.html):

- Contains two buttons: one to start the memory leak and one to stop it.

JavaScript File (app.js):

- memoryLeakArray: An array that will keep references to the created objects, preventing them from being garbage collected.
- leakInterval: Holds the reference to the setInterval function to control the memory leak simulation.
- startLeak button: Starts the memory leak by creating objects and storing them in the memoryLeakArray every second.
- stopLeak button: Stops the memory leak by clearing the interval.

## Steps to Run
1. Create a repository on GitHub for the project and save index.html and app.js in it.
2. Deploy the web app. I recommend using a static site in render.com.
3. Open the site in a web browser.
4. Open the browser's Developer Tools in Edge or Chrome>Performance.
5. Click the "Start Memory Leak" button to start the memory leak simulation.
6. Observe the memory consumption in the "Performance" or "Memory" tab in Developer Tools.
7. Click the "Stop Memory Leak" button to stop the simulation.

>This simple JavaScript web app demonstrates how continuously allocating memory without releasing it can cause a memory leak. In real applications, memory leaks can occur in various ways. This is one example so you can test it using developer tools.
