function Pokemon(nombre, nickname, tipo){
    this.nombre = nombre
    this.nickname = nickname
    this.tipo = tipo
}

function TipoFuego(nombre, nickname, apellido){
    Pokemon.call(this, nombre, nickname, apellido)
    this.debilidades = ["tierra", "agua", "roca"],
    this.ataques = ["ascuas", "lanzallamas"]
}

function TipoAgua(nombre, nickname, apellido){
    Pokemon.call(this, nombre, nickname, apellido)
    this.debilidades = ["electrico", "planta"],
    this.ataques = ["bomba de agua", "chorro"]
}

function TipoPlanta(nombre, nickname, apellido){
    Pokemon.call(this, nombre, nickname, apellido)
    this.debilidades = ["fuego", "hielo"],
    this.ataques = ["latigo cepa", "semillas"]
}


TipoFuego.prototype = Object.create(Pokemon.prototype)
TipoFuego.prototype.constructor = TipoFuego

TipoAgua.prototype = Object.create(Pokemon.prototype)
TipoAgua.prototype.constructor = TipoAgua

TipoPlanta.prototype = Object.create(Pokemon.prototype)
TipoPlanta.prototype.constructor = TipoPlanta

console.log(TipoFuego.prototype)

const Charizard = new TipoFuego("Charizard","Char", "Fuego")
const Venusaur = new TipoPlanta("Venusaur", "Venu", "Planta")
const Blastoise = new TipoAgua("Blastoise", "Blast","Agua")

console.log(Charizard)
console.log(Venusaur)
console.log(Blastoise)