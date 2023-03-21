//From scrambled-meggs repository, snippet controls title "Hacking effect"
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

document.querySelector("h1").onmouseenter = event => {
   let iterations = 0;

   const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations) {
            return event.target.dataset.value[index];
        } 
    
    return letters[Math.floor(Math.random() * 26)]
    })
    .join('');
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
    {once: true}
   }, 33);
}

//End scrambled-meggs snippet