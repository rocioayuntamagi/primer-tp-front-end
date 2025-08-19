const inputMessage = document.querySelector(".text")
const sendButton = document.querySelector(".plane")
const chatMessages = document.querySelector(".chat-messages")

//invocación de función

sendButton.addEventListener("click", sendMessage)

//declaración de función

function sendMessage() {
  const messages = inputMessage.value

  const divMessage = document.createElement("div")
  divMessage.classList.add("message-sent")

  const text = document.createElement("p")
  text.textContent = messages

  divMessage.appendChild(text)

  //creando el timestamp

  const timestamp = document.createElement("p")
  timestamp.classList.add("timestamp")
  timestamp.textContent = new Date().toLocaleTimeString()

  divMessage.appendChild(timestamp)

  chatMessages.appendChild(divMessage)

  inputMessage.value = ""

  // asíncrono
  setTimeout(function () {
    const divMessage = document.createElement("div")
    divMessage.classList.add("message-received")

    const response = document.createElement("p")
    response.textContent = "Recibido $(message)"

    divMessage.appendChild(response)

    chatMessages.appendChild(divMessage)

  }, 5000)
}


