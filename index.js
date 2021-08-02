console.log('hooray');


const h1 = document.querySelector('h1')
h1.textContent = "changed it here"

const divTag = document.querySelector('div')
console.log(divTag)


const img = document.querySelector('img')
console.log(img)
img.src = "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"


const init = function() {
    console.log("we got it")
}

 document.addEventListener("DOMContentLoaded", init())