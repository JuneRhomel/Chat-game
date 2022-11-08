let botMessage = document.getElementById("botMessage");
let myMessage = document.getElementById("myMessage")
let bodyChat = document.getElementById("bodyChat");
let inputMessage = document.getElementById("inputMessage")


function send() {
    let botIntro = "Lets play a Game";
    let input = inputMessage.value.toLowerCase();
    let score = 0; 
    setScrollPosition
    bodyChat.innerHTML += `
    <div class="user chat-user">
        <img class="user-profile" src="https://newyorkfolk.com/wp-content/uploads/2022/09/1662939749_newFile-1.jpg" alt="">
        <div class="chat-message">
            <p id ="botMessage"> ${inputMessage.value} </p>
        </div>
    </div>`;

    if (input === "yes") {
        bodyChat.innerHTML += `
        <div class="bot chat-user">
            <img class="user-profile" src="https://media.istockphoto.com/vectors/chat-bot-icon-vector-isolated-contour-symbol-illustration-vector-id1206829856?k=20&m=1206829856&s=170667a&w=0&h=e9Qo6SbtP-w4AhDF21EWt3aZASqL5we9Ics8BCB7aIE=" alt="">
            <div class="chat-message">
                <p id ="botMessage"> What does HTML stand for? </p>
            </div>
        </div>`;
        questionOne()
        
    }
    else if (input === "no") {
        bodyChat.innerHTML += `
        <div class="bot chat-user">
            <img class="user-profile" src="https://media.istockphoto.com/vectors/chat-bot-icon-vector-isolated-contour-symbol-illustration-vector-id1206829856?k=20&m=1206829856&s=170667a&w=0&h=e9Qo6SbtP-w4AhDF21EWt3aZASqL5we9Ics8BCB7aIE=" alt="">
            <div class="chat-message">
                <p id ="botMessage"> Sad </p>
            </div>
        </div>`;
    }
    else {
        bodyChat.innerHTML += `
        <div class="bot chat-user">
            <img class="user-profile" src="https://media.istockphoto.com/vectors/chat-bot-icon-vector-isolated-contour-symbol-illustration-vector-id1206829856?k=20&m=1206829856&s=170667a&w=0&h=e9Qo6SbtP-w4AhDF21EWt3aZASqL5we9Ics8BCB7aIE=" alt="">
            <div class="chat-message">
                <p id ="botMessage"> Yes / No !!!! </p>
            </div>
        </div>`;
    }
}

function questionOne() {
    if (input === "hyper text markup language") {
        bodyChat.innerHTML += `
        <div class="bot chat-user">
            <img class="user-profile" src="https://media.istockphoto.com/vectors/chat-bot-icon-vector-isolated-contour-symbol-illustration-vector-id1206829856?k=20&m=1206829856&s=170667a&w=0&h=e9Qo6SbtP-w4AhDF21EWt3aZASqL5we9Ics8BCB7aIE=" alt="">
            <div class="chat-message">
                <p id ="botMessage"> Nice </p>
            </div>
        </div>`;
    }
    
}


const setScrollPosition = () => {
    if (bodyChat.scrollHeight > 0) {
        bodyChat.scrollTop = bodyChat.scrollHeight
    }
}