// First function for playermove 
// inside it has a second function is called for computermove
let score=
    JSON.parse (localStorage.getItem('score'))||
    {
            wins:0,
            losses:0,
            ties:0
        };

        updatescore();
    // if(score===null){
    //     score={
    //         wins:0,
    //         losses:0,
    //         ties:0
    //     };
    // }



function playGame(playermove){
        const computermove=ComputerMovePick();
        let result='';
        if(playermove==='Scissors'){
            if(computermove=== 'rock'){
        result='you lose';
        }else if(computermove=== 'Paper'){
        result='you win';
        }else if(computermove=== 'Scissors'){
        result='its a tie';
        } 
        }else if(playermove==='Paper'){
           
        if(computermove=== 'rock'){
        result='you win';
        }else if(computermove=== 'Paper'){
        result='its a tie';
        }else if(computermove=== 'Scissors'){
        result='you lose';
        }
        }else if(playermove==='rock'){
            
        if(computermove==='rock'){
        result='its a tie';
        }else if(computermove=== 'Paper'){
        result='you lose';
        }else if(computermove=== 'Scissors'){
        result='you win';
        }
        }
        if(result==='you win'){
            score.wins+=1;
        }else if(result==='you lose'){
            score.losses+=1;
        }else if(result==='its a tie'){
            score.ties+=1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updatescore();
        document.querySelector('.Js-result').innerHTML= result;
        
        document.querySelector('.Js-moves').innerHTML=`You 
            <img src="./images/${playermove}-emoji.png" class="buttonstyle">
            <img src="./images/${computermove}-emoji.png" class="buttonstyle"> 
            Computer`;
        }
       

        function updatescore(){
            document.querySelector('.Js-Score-Display')
        .innerHTML=`wins:${score.wins} losses:${score.losses} ties:${score.ties}`;
        }
       
        // End of first function
       
        // Second function
    function ComputerMovePick(){
        
        const randomnumber=Math.random();
        let computermove='';
        
        if(randomnumber>=0 && randomnumber<=1/3){
        computermove='rock';
        }else if(randomnumber>=1/3 && randomnumber<=2/3){
        computermove='Paper';
        }else if(randomnumber>2/3 && randomnumber<1){
        computermove='Scissors';
        }
        return computermove;
    }