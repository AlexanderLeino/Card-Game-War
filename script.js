var suits = ['diamonds', 'spades', 'clubs', 'hearts'];
var values = [ 'A', '2', '3', '4', '5', '6' , '7' , '8', '9','10' ,'J' ,'Q', 'K'];
const deck = getDeck()

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
console.log(array)
}




function getDeck()
{
   const deck = new Array();

    for(var i = 0; i < suits.length; i++)
{
    for(var x = 0; x < values.length; x++)
{
 card = {value : values[x], suit: suits[i]};
    deck.push(card);
        }
        } shuffle(deck)
    return deck;
}

 
 
