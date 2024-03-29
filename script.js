const jokeContainer = document.getElementById("joke");
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        
        if(item.type === 'twopart'){
            jokeContainer.textContent = `${item.setup}
                                         ${item.delivery}`
        }
        else{
            jokeContainer.textContent = `${item.joke}`;
        }
        jokeContainer.classList.add("fade");
    });
}

btn.addEventListener("click", getJoke);
getJoke();