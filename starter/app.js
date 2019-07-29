/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, finalScore, roundScore, activePlayer, gamePlaying;
   init();

var lastDice;


//document.querySelector('#current-' + activePlayer).textContent = dice;
//docuemnt.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#current-0').textContent;
//console.log(x);






document.querySelector('.btn-roll').addEventListener('click', function() {
   //ボタンロールをクリックしたら…
    
if(gamePlaying) {
        
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    dice !== dice2;
    
    // 2. Display the result
    var diceDOM = document.querySelector('.dice1');
    var diceDOM2 = document.querySelector('.dice2');
    
    diceDOM.style.display = 'block'; //appear
    diceDOM2.style.display = 'block'; //appear
    
    diceDOM.src = 'dice-' + dice + '.png';
    diceDOM2.src = 'dice-' + dice2 + '.png';
    
    // 3. Update the round score IF the rolled number was not a 1
    
    if (dice === 6 && lastDice === 6) {
        //Player loses points
    document.querySelector('#current-' + activePlayer).textContent = 0;
    nextPlayer();   
    
    } else if (dice !== 1) {
        // Add score
        roundScore += (dice + dice2);  //roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore; // 下に表示される数字
        
    } else {
        nextPlayer();
    }
    
    
    lastDice = dice; 
   } 
});
  





document.querySelector('.btn-hold').addEventListener('click', function() {
   //ホールドボタンをクリックしたら…
    
    if(gamePlaying) { 
    // Add CURRENT score to global score
    
    scores[activePlayer] += roundScore;
    //scores[activePlayer] = scores[activePlayer] + roundScore;
    
    // Update the Use innerface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    
    

    finalScore = document.querySelector('.final-score').value; 
    if (finalScore) {
        var winningScore = finalScore;
    }    else {
        finalScore = 100;
    }
        
     
        
     // Check if player won the game   
    if (scores[activePlayer] >= finalScore) {
        document.querySelector('#name-' + activePlayer).textContent ='Winner';
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.getElementById('current-' + activePlayer).textContent = '0';
        
        gamePlaying = false;
        
    } else {
         nextPlayer();
    }
    
        }});





document.querySelector('.btn-new').addEventListener('click', init);

 





function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    gamePlaying = true;
    
document.querySelector('.dice1').style.display = 'none'; //dissappear
document.querySelector('.dice2').style.display = 'none'; //dissappear

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent ='Player 1';
document.getElementById('name-1').textContent ='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');            
}





      
function nextPlayer() {

        activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent ='0';
        document.getElementById('current-1').textContent ='0';
        
        //document.querySelector('.player-0-pannel').classlist.remove('active');
        //document.querySelector('.player-1-pannel').classlist.radd('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
        //document.querySelector('.dice1').style.display = 'none';
    } 
  



/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

