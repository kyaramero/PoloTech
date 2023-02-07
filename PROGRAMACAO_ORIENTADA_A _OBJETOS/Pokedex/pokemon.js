class Pokemon {
    #name;
    #level;
    #isWild;

    constructor(name, isWild = true) {
        this.#name = name;
        this.#level = Math.floor(Math.random() * 99) + 1;
        this.#isWild = isWild;
    }

    get name () {
        return this.#name;
    }
    get level () {
        return this.#level;
    }
    set isWild (value) {
        this.#isWild = value;
    }
    get isWild () {
        return this.#isWild;
    }
}

module.exports = Pokemon;