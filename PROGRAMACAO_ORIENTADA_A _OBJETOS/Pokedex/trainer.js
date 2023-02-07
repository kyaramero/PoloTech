class Trainer {
    #name;
    #age;
    #city;
    #howManyPokemons;
    #howManyPokeballs;
    #isInitiated;

    constructor (name, age, city) {
        this.#name = name;
        this.#age = age;
        this.#city = city;
        this.#howManyPokemons = 0;
        this.#howManyPokeballs = 0;
        this.#isInitiated = false;
    }

    get name () {
        return this.#name;
    }
    get age () {
        return this.#age;
    }
    get city () {
        return this.#city;
    }
    get howManyPokemons () {
        return this.#howManyPokemons;
    }
    get howManyPokeballs () {
        return this.#howManyPokeballs;
    }
    set howManyPokeballs (value) {
        this.#howManyPokeballs = value;
    }
    set howManyPokemons (value) {
        this.#howManyPokemons = value;
    }

    startJourney () {
        if(this.#isInitiated){
            console.log(`Trainer already begun it's journey 😬❌`)
            return;
        }
        this.#howManyPokeballs += 5;
        this.#howManyPokemons += 1; 
        this.#isInitiated = true;
        console.log(`Trainer ${this.#name} begins it's journey 👟`)
    }
}

module.exports = Trainer;
