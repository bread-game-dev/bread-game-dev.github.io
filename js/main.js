console.log("lodded main.js");


// vars 
let game_bata = 0;


const game_save = {
    game_urla: 0
}


// save 

function save(){
    localStorage.setItem("game_saver", JSON.stringify(game_save))
   game_save.game_urla++;
}

// add

function add(){
   game_bata++;
    document.getElementById("text").innerHTML = "game_beta: " + game_bata
    save() 
    
}

// load

function load(){
   game_save =  JSON.parse(localStorage.getItem("game_server"))
}