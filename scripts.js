// const messagesDiv = document.getElementById('messages');
// const userInput = document.getElementById('userInput');

// /* // Ensure the DOM is fully loaded before running any code
// document.addEventListener("DOMContentLoaded", function() {
//     function sendMessage() {
//         var input = document.getElementById('userInput');
//         var message = input.value;

//         if (message.trim() !== "") {
//             var chatbox = document.getElementById('chatbox');
//             var newMessage = document.createElement('div');
//             newMessage.textContent = message;
//             chatbox.appendChild(newMessage);
//             chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the latest message
//             input.value = ""; // Clear the input field after sending the message
//         }
//     }

//     // Add an event listener for the send button click
//     document.querySelector('button').addEventListener('click', sendMessage);
// }); */


// function sendMessage() {
//     console.log(userInput);
//     const message = userInput.value.trim();
//     if (message) {
//         appendMessage('You', message);
//         // Simulate AI response (replace this with actual AI logic)
//         setTimeout(() => appendMessage('AI Assistant', getAIResponse(message)), 1000);
//     }
//     userInput.value = '';
// }

// function appendMessage(sender, text) {
//     const messageElement = document.createElement('div');
//     messageElement.className = 'message';
//     messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
//     messagesDiv.appendChild(messageElement);
//     messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the bottom
// }

// // Simple AI response generator (for demo purposes)
// function getAIResponse(input) {
//     const responses = {
//         'hello': 'Hello! How can I assist you today?',
//         'college': 'We have multiple colleges, which one do you need help with?',
//         'courses': 'We offer several courses across different fields.',
//     };
//     return responses[input.toLowerCase()] || 'I am not sure about that, but I will try to find out!';
// }
