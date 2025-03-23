// 1. Short Polling
// Short polling is a technique where the client repeatedly requests data from the server at regular intervals.

// Example: A weather app that checks for updates every 5 minutes. The client sends a request to the server every 5 minutes to get the latest weather data.
// function fetchWeatherData() {
//     fetch('/weather')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             setTimeout(fetchWeatherData, 300000); // Poll every 5 minutes
//         })
//         .catch(error => console.error('Error:', error));
// }

// fetchWeatherData();


// 2. Long Polling
// Long polling is similar to short polling, but the server holds the request open until new data is available or a timeout occurs. This reduces the number of requests compared to short polling.
// Example: A chat application where the client sends a request to the server, and the server holds the request until a new message is available. Once a new message arrives, the server responds, and the client immediately sends another request.
// function fetchChatMessages() {
//     fetch('/chat')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             fetchChatMessages(); // Immediately send another request
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             setTimeout(fetchChatMessages, 5000); // Retry after 5 seconds on error
//         });
// }

// fetchChatMessages();


// 3. Server-Sent Events (SSE)
// Server-Sent Events (SSE) is a technique where the server continuously
// sends updates to the client over a single HTTP connection.
// The client doesn't need to request updates; the server pushes them automatically.

// Example: A live sports score update application where the server sends real-time score updates to the client as they happen.
// const eventSource = new EventSource('/events');

// eventSource.onmessage = function(event) {
//     const data = JSON.parse(event.data);
//     console.log(data);
// };

// eventSource.onerror = function(error) {
//     console.error('Error:', error);
// };


// 4. WebSockets
// WebSockets provide full-duplex communication channels over a single, long-lived connection. This allows for real-time, bidirectional communication between the client and server.

// Example: An online multiplayer game where the client and server need to exchange real-time game state updates. WebSockets enable both the client and server to send messages to each other instantly.
// const socket = new WebSocket('ws://example.com/socket');

// socket.onopen = function() {
//     console.log('WebSocket connection established');
//     socket.send(JSON.stringify({ message: 'Hello Server!' }));
// };

// socket.onmessage = function(event) {
//     const data = JSON.parse(event.data);
//     console.log(data);
// };

// socket.onerror = function(error) {
//     console.error('Error:', error);
// };

// socket.onclose = function() {
//     console.log('WebSocket connection closed');
// };