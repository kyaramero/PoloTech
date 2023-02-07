const Trainer = require('./trainer.js');
const Pokemon = require('./pokemon.js');

const ash = new Trainer('Ash', 21, 'Tokyo')
const wildPokemons = [
    new Pokemon('Pidgey'),
    new Pokemon('Geodude'),
    new Pokemon('Pikachu'),
    new Pokemon('Caterpie'),
    new Pokemon('Clefairy')
]

const pickPokemon = () => {
    const index = Math.floor(Math.random() * (wildPokemons.length - 1));
    return wildPokemons[index];
}

const throwPokeball = (trainer, chosenPokemon, count) => {
    const hasPokeball = trainer.howManyPokeballs > 0;
    if(!hasPokeball) {
        console.log(`Trainer ${trainer.name} doesn't have enough pokeballs`);
        return false;
    }
    trainer.howManyPokeballs--;
    const chanceCacthing = Math.floor(Math.random() * 100);
    if (chanceCacthing <= 25 * (count + 1)) {
        console.log(`${trainer.name} catched ${chosenPokemon.name}`)
        trainer.howManyPokemons++;
        chosenPokemon.wild = false; 
        return false;
    }   else {
        console.log(`${chosenPokemon.name} has broken free`)
        return true;
    }
}

const startBattle = (trainer) => {
    const chosenPokemon = pickPokemon();
    console.log(`Pokemon ${chosenPokemon.name} is ${chosenPokemon.isWild ? 'wild' : 'not wild'} and Lv. ${chosenPokemon.level}`);
    let count = 0;
    while (count < 3) {
        let isPlaying = throwPokeball(trainer, chosenPokemon, count)
        if (!isPlaying) break;
        count++;
    }
}

ash.startJourney();
console.log(startBattle(ash));
