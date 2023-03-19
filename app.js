const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';


// const getJoke = () => {
//     jokeContainer.classList.remove('fade')
//     fetch(url)
//         .then(data => data.json())
//         .then(item => {
//             console.log(item)
//             jokeContainer.textContent = `${item.joke}`
//             jokeContainer.classList.add('fade')
//         })

// }
// btn.addEventListener('click', getJoke);
// getJoke();



const getJoke2 = async () => {
    jokeContainer.classList.remove('fade')
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    jokeContainer.textContent = `${response.joke}`
    jokeContainer.classList.add('fade')
    console.log('click');

}

btn.addEventListener('click', getJoke2);
getJoke2();
