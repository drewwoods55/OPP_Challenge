class Pokemon {
    constructor(name, type, attack){
        this.name = name;
        this.type = type;
        this.attack = attack
    }
    pokeAttack() {
        return `${this.name} used ${this.attack} to attack!`
      }
}
const poke1 = new Pokemon('Pickachu', 'electric', 'thunderbolt')
console.log(poke1.pokeAttack());
const poke2= new Pokemon('Charmander', 'fire', 'flamethrower')
console.log(poke2.pokeAttack());
const poke3 = new Pokemon('Wartortle', 'water', 'Hydro Pump')
console.log(poke3.pokeAttack());