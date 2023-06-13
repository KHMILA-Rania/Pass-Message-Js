const messageInput=document.getElementById("message-input");


function getMessage(){
    const messageOutput = document.getElementById("message-output");
    messageOutput.innerHTML = messageInput.value;
    messageInput.value = "";
}