/* 
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

document.getElementById("play").addEventListener("click", startGame);




function startGame() {
    // 1. 
    const gridSize= difficultchoice(document.getElementById('difficulty').value);
    const dimension = dimensionsHeW(gridSize);
   

    // 2. Per ogni numero creo

    const gridContainer = document.querySelector(".container");
    gridContainer.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {


        const domElement = generateBox(i+1,dimension)



        // appendo questo elemnto al contenitore
        gridContainer.append(domElement);
    }
}

// scegliamo il range della difficolta inserita
function difficultchoice(size){
    if(size === 'facile'){
    
        return 100;
    }else if(size === 'medio'){
  
        return 81;
    }else{
      
        return 49;
    }
}
// definisco la dimensione del box in base al range (selezionato tramite la difficolta del gioco)
function dimensionsHeW(size){
    if(size === 100){
    
        return 10;
    }else if(size === 81){
  
        return 9;
    }else{
      
        return 7;
    }
}


/**
 * @param {any} number -> il numero che dobbiamo inserire all'interno dell'elemnto html
 * @returns {any} -> l'elemento html (il mio div)
 */
function generateBox(number,size) {
    // creo un elemnto html
    const newElement = document.createElement("div");

    newElement.setAttribute("class", "box");
    newElement.style.width = `calc(100% / ${size})`;
    newElement.style.height = `calc(100% / ${size})`;

    // agiungo il span con il numero
    newElement.innerHTML = `<span>${number}</span>`

    // assegno la classe box
    newElement.classList.add("box");

    // cambio colore quando clicco la box 
    newElement.addEventListener("click", function () {
        newElement.style.backgroundColor = "blue";
    });
    
    // ritorno elemnto
    return newElement;
}


