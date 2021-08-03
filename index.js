document.addEventListener('click' , function(e) {
    console.log(e.target)
})
const h1 = document.querySelector('h1')
h1.textContent = 'My fantasy team'

const topDisplay = document.createElement('img')
topDisplay.id = 'banner'
topDisplay.src = 'https://www.profeet.com/wp-content/uploads/sites/3/2019/06/banner.jpg'
h1.appendChild(topDisplay)


function playerCard(player) {
    const div = document.createElement('div');
    div.id = `${player.id}`
    div.className = 'player-list'

    const playerName = document.createElement('h2')
    playerName.id = player.name

    const img = document.createElement('img');
    img.className = 'player-image'
    img.src = player.img

    const btn = document.createElement('button');
    btn.className = 'selector'
    btn.textContent = 'select'
    btn.id = 'player-select'
    btn.addEventListener('click', renderPlayer(player))

    h1.append(div);
    div.appendChild(playerName, img, btn);
}

const init = function() {
}

 document.addEventListener("DOMContentLoaded", init())