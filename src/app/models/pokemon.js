class PokemonClass {
	constructor(id, name, image, type) {
	  this.id = id;
	  this.name = name;
	  this.image = image;
	  this.type = type;
	}

	getPokemonId() {return this.id;}
	getPokemonName() {return this.name;}
	getPokemonImg() {return this.image;}
	getPokemonType() {return this.type;}

	setPokemonAlias(pokeAlias) {
		_auxFunction(pokeAlias);
		this.name = pokeAlias;
	}
}

class PokemonDetailClass extends PokemonClass {
	constructor(id, name, image, type, attacks) {
		super(id, name, image, type);
		this.attacks = attacks;
	}

	getPokemonAttacks() {
		return this.attacks;
	}
}

export { PokemonClass, PokemonDetailClass }