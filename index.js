const database = []

document.addEventListener('click' , function(e) {
    console.log(e.target)
})
const h1 = document.querySelector('h1')
h1.textContent = '⭐️ My fantasy team ⭐️'

const topDisplay = document.createElement('img')
topDisplay.id = 'banner'
topDisplay.src = 'https://gameonfw.com/wp-content/uploads/2016/04/game-on-soccer-banner.jpg'
h1.appendChild(topDisplay)

function getPlayers() {
    fetch('https://www.easports.com/fifa/ultimate-team/api/fut/item')
    .then(res => res.json())
    .then(players => {
        players.forEach(playerCard)
})}

const playerList = document.querySelector('#player-list')

function playerCard(players) {
    const div = document.createElement('div');
    div.id = `${players.id}`
    div.className = 'player-list'
    console.log(div)

    const playerName = document.createElement('h2')
    playerName.textContent = players.name

    const img = document.createElement('img');
    img.className = 'player-image'
    img.src = players.image

    const numberOfGoals = document.createElement('p')
    playerName.textContent = `${players.goals} goals scored`

    const btn = document.createElement('button');
    btn.className = 'season-stats'
    btn.textContent = 'add goal'
    btn.id = 'player-select'
    btn.addEventListener('click', ()=>increaseGoals(players))

    playerList.append(div);
    document.querySelector('.player-list').appendChild(playerName, img, numberOfGoals, btn);
}

function increaseGoals(players) {
    const goalsNumber = event.target.previosElementSibling;
    const goals = parseInt(++players.goals)
    fetch(`http://localhost:3000/players/${players.id}`, {
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({goals: goals})
    })
    .then(res => res.json())
    .then(data => goalsNumber.textContent = `${data.goals} goals scored`)
}

const init = function() {
    getPlayers()
}


 document.addEventListener("DOMContentLoaded", init())