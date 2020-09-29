//store deck as an array.
//There are 52 cards in a deck, which can have one of 4 suits and one of 13 values. 
class Deck {
    constructor() {
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }
//add shuffle method o shuffle the
    shuffle() {
        const deck = this.deck;
        let m = deck.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this;
    }

    deal(limit) {
        return this.deck.splice(0,limit); //remove 5 card
    }
}
const deck1 = new Deck();//new instance
deck1.shuffle() //call shuffle
console.log(deck1.deck);
deck1.deal(5) //deal 5 cards
console.log(deck1.deck);

class Player{
    constructor(name,hand){
        this.playerName =name;
        this.hand=Hand();
        
    }
    Hand(){
        return this.hand;
    }
    Player(){
        this.name=name;
        this.hand=new this.Hand(name);
    }
}
class Eights {
    constructor() {
         this.one = Player();
         this.two = Player();
         this.drawPile = Hand();
         this.discardPile = Hand();
    }
    playGame() {
         Player = one;

        // keep playing until there's a winner
        while (!isDone()) {
            displayState();
            takeTurn(player);
            player = nextPlayer(player);
        }

        // display the final score
        one.displayScore();
        two.displayScore();
    }
    isDone() {
        return one.hand.isEmpty() || two.hand.isEmpty();
    }
     reshuffle(){
         prev=this.discardPile.popCard;
         this.discardPile.dealAll(this.drawPile);
         this.discardPile.addCard(prev);
         this.drawPile.shuffle();


    }
}
function main() {
    const game = Eights();
    game.playGame();
}

