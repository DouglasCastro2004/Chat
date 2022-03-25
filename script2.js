const btn1 = document.querySelector("#send-msg");
const btn2 = document.querySelector('#send-msg2');
const divMessage = document.querySelector("#messages");
const divMessage2 = document.querySelector("#messages2");

const chats = {
    chat1: {
        inputElement: document.querySelector("#msg-input"),
        senderClassName: "sendMsg1",
        receiverClassName: "recebe",
        senderListMessage: document.querySelector('#ul'),
        receiverListMessage: document.querySelector('#ul2'),
        sendMessageButton: document.querySelector("#send-msg")
    },
    chat2: {
        inputElement: document.querySelector("#msg-input2"),
        senderClassName: "sendMsg2",
        receiverClassName: "recebe2",
        senderListMessage: document.querySelector('#ul2'),
        receiverListMessage: document.querySelector('#ul'),
        sendMessageButton:document.querySelector("#send-msg2")
    }
}

function enviarMsgChat(chatName) {
    const chat = chats[chatName]
    const msg = chat.inputElement.value;
    const li = document.createElement('li');
    li.innerHTML = msg;
    li.className = chat.senderClassName;
    const p = document.createElement('p');
    p.innerText = msg;
    p.className = chat.receiverClassName;
    chat.senderListMessage.appendChild(li);
    chat.receiverListMessage.appendChild(p);
    if(chat.inputElement.value =! ""){
          chat.inputElement.value = "";
    }
}

chats.chat1.sendMessageButton.addEventListener("click",function(evento) {
    enviarMsgChat('chat1');
})

chats.chat1.inputElement.addEventListener("keydown",function(evento) {
    if (evento.keyCode == 13) {
        enviarMsgChat('chat1');
    }
})

chats.chat2.sendMessageButton.addEventListener('click',function(evento) {
    enviarMsgChat('chat2');
})

chats.chat2.inputElement.addEventListener("keydown",function(evento) {
    if (evento.keyCode == 13) {
        enviarMsgChat('chat2');
    }
})