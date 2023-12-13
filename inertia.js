const btn=document.querySelector('.talk');
const Send=document.querySelector('.sendbutton');
const input=document.getElementById('inputText');

const cont=document.querySelector('.container');

// const post=document.querySelector('.post');



function speak(sentence) {

    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate=1;

    text_speak.pitch=100;

    // text_speak.volume=20

    window.speechSynthesis.speak(text_speak);

};

function speech() {
    const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        const recognition=new SpeechRecognition();
        recognition.onstart=()=>{
            speak('Listening');
        };
        recognition.onresult=(event)=>{
            const transcript=event.results[0][0].transcript;
            // appendMessage(transcript,'user');
            speakThis(transcript.toLowerCase());
        };
        
        recognition.onerror=()=>{
            speak('please,i could not recognize voice');
        };
        
        recognition.start();
    } else {
        speak('please, i could not recognize voice');
    };
    
};






btn.addEventListener('click',()=>{
    speech();
});


my_dictionary={
    'hello':'hi sir, how are you?',
    'hi':'hello sir, how are you?',
    'how are you':'I am as fit as fiddle and you',
    'how are you doing':'I am as fit as fiddle, and you?',
    'let talk business':'okay sir,ready for business',
    'how dare you':'sorry sir, I didnt mean offensive',
    'i am good':'Thank God',
    'can you':'Yes I can',
    'i love you':'I love you too',
    'good': 'also doing great sir',
    'great':'Thank God',
    'fine and you': 'also doing great sir',
    'hey': 'hello, At your service, sir',
    'good and you': 'I am doing great',
    'whats up':'nothing much sir',
    'well done':'Thank you',
    'thanks': 'No thanks sir, after all you created me',
    'who are you': 'my name is Pi',
    'what is your name': 'my name is Pi',
    'who created you': 'I was created by PyDanny whose real name is Daniel Quansah',
    'i am fine and you':'I am also doing great sir!!',
    'how old are you':'I am nearly a year old',
    'who is pydanny':'PyDanny is a young, talented, self taught python developer, web developer and many more, who has aimed to achieve something great in future, thhus to be the greatest inventor ever.',
    'what can you do':'I can open and close programs and softwares, search for anything from google, youtube, wikipedia, stackoverflow, etc. Play music, movies, make note, create keylogger, give you random advice and jokes, and many more.',
    'how can you help me': 'I can open and close programs and softwares, search for anything from google, youtube, wikipedia, stackoverflow, etc.Play music, movies,make note,create keylogger,give you random advice and jokes.',
    'whats on':'Nothing much, sir!',
    'how was your day':'It was cool, sir and yours',
    'how was your night':'It was cool, sir and yours',
    'i am sad':'Oooh sir, please what happened',
    'tell me more about yourself':'I am Pi, a personal assistant program programmed by my creator PyDanny in pure Python',
    'tell me about yourself':'I am Pi, a personal assistant program programmed by my creator PyDanny in pure Python',
    'will you marry me':'No sir, I am only programmed to help you with some tasks',
    'can you marry me': 'No sir, I am only programmed to help you with some tasks',
    'sleep':'ok sir, you can wake me up anytime you want',
    'wake up':'hello sir, i am always at your service'

};

function speakThis(message) {
    // using dictionary
    message=message.toLowerCase();
    if (my_dictionary.hasOwnProperty(message)) {
        appendMessage(message,'user');
        result=my_dictionary[message];
        speak(result);
        appendMessage(result,'Bot'); 
    } else {
        appendMessage('Not found','Bot');
        speak('Sir, please i did not find anythingin my database')
        // window.open('https://www.google.com/search?='+message.replace('','+'),'_blank');
        // speak();
        // appendMessage('I found some information for '+message+' on google','Bot');
    };
};
    
input.addEventListener('focus',()=>{
    Send.style.display='block';
    btn.style.display='none';

});

document.querySelector('.container').addEventListener('click',()=>{
    Send.style.display='none';
    btn.style.display='block';

});


Send.addEventListener('click',()=>{
    message=input.value.trim();
    speakThis(message);
});


input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        Send.click();
    };

});



const chatDisplay = document.getElementById('chat-display');

// const userInput = document.getElementById('inputText');

// const sendButton = document.querySelector('.sendbutton');


function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('post');
    messageElement.textContent = `${message}`;

    const reElement = document.createElement('div');
    reElement.classList.add('get');
    reElement.textContent = `${message}`;
    if (sender=='Bot') {
        chatDisplay.appendChild(messageElement);
    } else {
        chatDisplay.appendChild(reElement);
        
    };
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
    input.value='';

};

document.addEventListener('DOMContentLoaded',()=>{
    appendMessage('Hi, please how may I help you?','Bot');

});
