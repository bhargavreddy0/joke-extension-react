import React from 'react'
import '../App.css'
export default function Hello() {
    fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(jokedata => {
    const jokeText = jokedata.attachments[0].text;
    const jokeElement = document.getElementById('jokeelement');
    jokeElement.innerHTML = jokeText;
})
  return (
    <div>
        <p id='jokeelement'>loading....</p>
        
    </div>
  )
}
