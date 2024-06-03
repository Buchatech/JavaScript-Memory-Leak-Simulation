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
Create a directory for the project and save index.html and app.js in it.
Open the index.html file in a web browser.
Open the browser's Developer Tools (usually F12 or Ctrl+Shift+I).
Click the "Start Memory Leak" button to start the memory leak simulation.
Observe the memory consumption in the "Performance" or "Memory" tab in Developer Tools.
Click the "Stop Memory Leak" button to stop the simulation.

>This simple example demonstrates how continuously allocating memory without releasing it can cause a memory leak. In real applications, memory leaks can occur in various ways, such as unintentional references, event listeners not being removed, or improper use of closures.
