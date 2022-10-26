//variables to put x/o in the field
let field = ["", "", "", "", "", "", "", "", ""]

// Feldbezeichnungen für die Logik ( 0 = Player1, 1 = Player2)
let number = [2, 2, 2, 2, 2, 2, 2, 2, 2]

//variables for each player win
let players = [false, false]

//variables to switch between the players
let player = 0

let char = ""
document.getElementById("playerTurn").innerHTML = player

let end = false

//listen to key press
addEventListener("keypress", (event) => {
    if (!end) {
        //on keypress put x/o in the field
        for (let i = 0; i <= 8; i++) {
            let index = i + 1

            if ((event.code === "Numpad" + index) && field[i] === "") {
                if (player === 0) {
                    char = "x"
                    player = 1
                } else if (player === 1) {
                    char = "o"
                    player = 0
                }

                if (player === 0){
                    number[i] = 1
                } else if (player === 1) {
                    number[i] = 0
                }

                field[i] = i

                document.getElementById("field_" + index).innerHTML = char

                document.getElementById("playerTurn").innerHTML = player
            }
        }
    }

    for (let i = 0; i <= 1; i++) {
        if ((number[0] === number[1] && number[1] === number[2] && number[0] === i) ||
            (number[3] === number[4] && number[4] === number[5] && number[3] === i) ||
            (number[6] === number[7] && number[7] === number[8] && number[6] === i)) {
            players[i] = true
        }

        if ((number[0] === number[3] && number[3] === number[6] && number[0] === i) ||
            (number[1] === number[4] && number[4] === number[7] && number[1] === i) ||
            (number[2] === number[5] && number[5] === number[8] && number[2] === i)) {
            players[i] = true
        }

        if ((number[0] === number[4] && number[4] === number[8] && number[0] === i) ||
            (number[2] === number[4] && number[4] === number[6] && number[2] === i)) {
            players[i] = true
        }
    }

    //alert the winner
    for (let i = 0; i <= 1; i++) {
        if (players[i]) {
            end = true
            let player_count = i + 1

            setTimeout(() => {
                alert("Player " + player_count + " wins!")
            }, 1)

        }
    }
})

function reset() {
    //variables to put x/o in the field
    field = ["", "", "", "", "", "", "", "", ""]

    //number safes the player of each field (inverted)
    number = [2, 2, 2, 2, 2, 2, 2, 2, 2]

    //variables for each player win
    players = [false, false]

    //variables to switch between the players
     player = 0
     char = ""
    document.getElementById("playerTurn").innerHTML = player

    for (let i = 0; i <= 8; i++) {
        let index = i + 1
        document.getElementById("field_" + index).innerHTML = field[i]
    }

}

function buttonPlayer() {
    document.getElementById("field_7").innerHTML = "\\"
    document.getElementById("field_8").innerHTML = "o"
    document.getElementById("field_9").innerHTML = "/"
    document.getElementById("field_4").innerHTML = ""
    document.getElementById("field_5").innerHTML = "I"
    document.getElementById("field_6").innerHTML = ""
    document.getElementById("field_1").innerHTML = "/"
    document.getElementById("field_2").innerHTML = ""
    document.getElementById("field_3").innerHTML = "\\"
}