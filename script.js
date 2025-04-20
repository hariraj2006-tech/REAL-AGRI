function sendMessage() {
  const inputBox = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMessage = inputBox.value.trim();
  if (userMessage === "") return;

  // Display user message
  const userDiv = document.createElement("div");
  userDiv.className = "chat-message user";
  userDiv.textContent = userMessage;
  chatBox.appendChild(userDiv);

  // Generate bot reply
  const botReply = getBotResponse(userMessage);
  const botDiv = document.createElement("div");
  botDiv.className = "chat-message bot";
  botDiv.textContent = botReply;
  chatBox.appendChild(botDiv);

  inputBox.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
  message = message.toLowerCase();

  if (message.includes("soil")) {
    return "Soil testing helps determine nutrient levels. Try using loamy soil for most crops.";
  } else if (message.includes("irrigation")) {
    return "Drip irrigation is efficient and conserves water.";
  } else if (message.includes("pesticide")) {
    return "Use pesticides sparingly and consider organic alternatives like neem oil.";
  } else if (message.includes("crop")) {
    return "Some common crops are rice, wheat, maize, and pulses. What crop are you interested in?";
  } else if (message.includes("fertilizer")) {
    return "Urea, DAP, and potash are common fertilizers. Balance is key!";
  } else if (message.includes("season")) {
    return "Rabi crops are grown in winter, Kharif in the rainy season.";
  } else if (message.includes("weather")) {
    return "Weather plays a crucial role in agriculture. Try to align sowing with expected rains.";
  } else {
    return "Sorry, I don’t have info on that. Please ask about crops, soil, fertilizers, irrigation, etc.";
  }
}
