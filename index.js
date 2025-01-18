        let isautoplaying=false;
        let intervalidID;
        
        function autoplay(){
            if(!isautoplaying){
                clearInterval(intervalidID);
                intervalidID =   setInterval(function(){
                    const playermove=ComputerMovePick();
                    playGame(playermove);
                },4000 );
                const playalert=document.createElement('div');
                playalert.textContent='AutoPlay Started!';
                playalert.style.position='fixed';
                playalert.style.top='20px';
                playalert.style.left = '50%';
                playalert.style.transform = 'translateX(-50%)';
                playalert.style.padding = '10px';
                playalert.style.backgroundColor = '#28a745';
                playalert.style.color = '#fff';
                playalert.style.borderRadius = '5px';
                playalert.style.fontSize = '16px';
                playalert.style.transition='opacity 5s ease-in-out';
                document.body.appendChild(playalert);
                

                setTimeout(()=>{
                    playalert.remove();
                }, 4000);

                isautoplaying=true;
            }else{
                clearInterval(intervalidID);
                const playalert2=document.createElement('div');
                playalert2.textContent='AutoPlay Stopped!';
                playalert2.style.position='fixed';
                playalert2.style.top='20px';
                playalert2.style.left = '50%';
                playalert2.style.transform = 'translateX(-50%)';
                playalert2.style.padding = '10px';
                playalert2.style.backgroundColor = '#28a745';
                playalert2.style.color = '#fff';
                playalert2.style.borderRadius = '5px';
                playalert2.style.fontSize = '16px';
                playalert2.style.transition='opacity 5s ease-in-out';
                document.body.appendChild(playalert2);
                

                setTimeout(()=>{
                    playalert2.remove();
                }, 3000);
                isautoplaying=false;
            }
            
        }


        let score=  
            JSON.parse (localStorage.getItem('score'))||
            {
                    wins:0,
                    losses:0,
                    ties:0
                };

                updatescore();
           
        // First function for playermove 
        // inside it has a second function is called for computermove

        function playGame(playermove){
            playermove=playermove.toLowerCase(); 
                const computermove=ComputerMovePick();
                let result='';
                if(playermove==='scissors'){
                    if(computermove=== 'rock'){
                result='you lose';
                }else if(computermove=== 'paper'){
                result='you win';
                }else if(computermove=== 'scissors'){
                result='its a tie';
                } 
                }else if(playermove==='paper'){
                
                if(computermove=== 'rock'){
                result='you win';
                }else if(computermove=== 'paper'){
                result='its a tie';
                }else if(computermove=== 'scissors'){
                result='you lose';
                }
                }else if(playermove==='rock'){
                    
                if(computermove==='rock'){
                result='its a tie';
                }else if(computermove=== 'paper'){
                result='you lose';
                }else if(computermove=== 'scissors'){
                result='you win';
                }
                }
                if(result==='you win'){
                    score.wins+=1;
                    document.body.style.backgroundColor='#90ee90';
                    confetti({
                        particleCount: 200,
                        angle: 90,
                        spread: 400,
                        colors: ['red', 'yellow', 'orange'],
                        origin: { x: 0, y: 0},
                        zindex:1000
                    });
                    confetti({
                        particleCount: 200,
                        angle: 270,
                        spread: 400,
                        colors: ['red', 'yellow', 'orange'],
                        origin: { x: 1, y: 0},
                        zindex:1000
                    });
            
                    confetti({
                        particleCount: 200,
                        angle: 0,
                        spread: 400,
                        colors: ['red', 'yellow', 'orange'],
                        origin: { x: 0, y: 1},
                        zindex:1000
                    });
                    confetti({
                        particleCount: 200,
                        angle: 100,
                        spread: 400,
                        colors: ['red', 'yellow', 'orange'],
                        origin: { x: 1, y: 1},
                        zindex:1000
                    });
                    
                }else if(result==='you lose'){
                    score.losses+=1;
                  document.body.style.backgroundColor = '#f08080';
                }else if(result==='its a tie'){
                    score.ties+=1;
                    document.body.style.backgroundColor = '#eaeac1'
                }

                setTimeout(()=>{
                    document.body.style.backgroundColor='#191919';
                },2000

                );

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
                computermove='paper';
                }else if(randomnumber>2/3 && randomnumber<1){
                computermove='scissors';
                }
                return computermove;
            }

            function resetmsg(){
            const reset=document.createElement('div');
            reset.textContent="Sucessfully points reseted!";
            reset.style.position='fixed';
            reset.style.top='20px';
            reset.style.left = '50%';
            reset.style.transform = 'translateX(-50%)';
            reset.style.padding = '10px';
            reset.style.backgroundColor = '#28a745';
            reset.style.color = '#fff';
            reset.style.borderRadius = '5px';
            reset.style.fontSize = '16px';
            reset.style.transition='opacity 5s ease-in-out';
            document.body.appendChild(reset);
                

                setTimeout(()=>{
                    reset.remove();
                }, 3000);

                updatescore();
            }   