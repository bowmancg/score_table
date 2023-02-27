let redTeamVictory = 0
let blueTeamVictory = 0



function redTeamScore() {
    redTeamVictory ++
    console.log(redTeamVictory);
    redTeamVictory.toString()
    document.getElementById("red-score").innerHTML = redTeamVictory
    draw()
}

function blueTeamScore() {
    blueTeamVictory ++
    console.log(blueTeamVictory);
    blueTeamVictory.toString()
    document.getElementById("blue-score").innerHTML = blueTeamVictory
    draw()
}

function draw() {
    let redScore = document.getElementById("redTeamScore")
    let blueScore = document.getElementById("blueTeamScore")
}

function resetWins() {
    document.getElementById("red-score").reset()
    document.getElementById("blue-score").reset()
    draw()
}