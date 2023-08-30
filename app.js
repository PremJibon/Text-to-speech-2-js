const textarea = document.querySelector("textarea"),
button = document.querySelector("button");

let isSpeaking = true

button.addEventListener("click",function(){
    const synth = window.speechSynthesis;
    const text = textarea.value;
    if(!synth.speaking && text)
    {
        const utterance = new SpeechSynthesisUtterance(text)
        synth.speak(utterance)      
    }
    if(text.length > 50){
        if(synth.speaking && isSpeaking){
            button.innerText = "Pause"
            synth.resume()
            isSpeaking = false
        }else{
            button.innerText = "Resume"
            synth.pause()
            isSpeaking = true

        }
    }
})