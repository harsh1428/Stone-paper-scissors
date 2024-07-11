let userscore = 0
let compscore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg") 
const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")

const showwinner = (userwin) => {
    if(userwin) {
        userscore ++ ;
        userscorepara.innerText = userscore
        msg.innerText = "You win!"
        msg.style.backgroundColor = "green"
    }
    else{
        compscore ++ ;
        compscorepara.innerText = compscore ;
        msg.innerText = "You lose!"
        msg.style.backgroundColor = "red"

    }
}

const drawgame = () =>{
    msg.innerText = "Game was draw.Play again."
    msg.style.backgroundColor = "plum"
    
}

const gencompchoices = () => {
    const options = ["rock","paper" , "scissor"];
    const randomindex = Math.floor(Math.random() *3);
    return options[randomindex] ;
}

const playgame = (userchoice) => {
    const compchoice = gencompchoices() ;
    if(userchoice === compchoice){
        drawgame() ;
    }
    else{
        let userwin = true 
        if(userchoice === "rock" ){
            if(compchoice === "paper"){
                userwin = false ;
            }
        }

        if(userchoice === "paper"){
            if(compchoice === "scissor"){
                userwin = false
            }
        
    }

        if(userchoice === "scissor"){
            if(compchoice === "rock"){
                userwin = false
            }
        
    }
    showwinner(userwin) ;
}

}

choices.forEach((choice)=> {
    choice.addEventListener("click",()=> {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice) ;
    })
}

)