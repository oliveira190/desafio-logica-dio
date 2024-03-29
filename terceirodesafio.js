class Hero {
    constructor (name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;     
}
    attack (){
        let ataque = ""
        if (this.type === "Mago"){
            ataque = "usou magia"
        }else if (this.type === "Guerreiro"){
            ataque = "usou espada"
        }else if (this.type === "Monge"){
            ataque = "usou artes marciais"
        }else {
            ataque = "usou shuriken"
        }
        return ataque 
    }


    
    
    fight (){
        console.log (`O ${this.type} atacou usando ${this.attack ()}`)
    }
}


const game = new Hero ("Lucas", 17, "Mago")


game.attack()
game.fight()
