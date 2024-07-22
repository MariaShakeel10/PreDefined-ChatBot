// predefined answers
function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
        output = "Hello, nice to meet you!";
    } else if (input.includes("how are you")) {
        output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what can you do?")) {
        output = "I can chat with you and answer some simple questions.";
    } else if (input.includes("tell me a joke")) {
        output = `Of course! Here's one:
Why did the scarecrow win an award?
Because he was outstanding in his field!`;
    } else if (input.includes("tell me another joke")) {
        output = `Sure, here's a joke for you:
          Why don't scientists trust atoms?
        Because they make up everything! 😄`} else {
        output = "Sorry, I don't understand that. Please try something else.";
    }
    return output;
}

// Display  user message on the chat
function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function () {
            displayBotMessage(output);
        }, 2000);
        document.getElementById("input").value = "";
    }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        sendMessage();
    }
});