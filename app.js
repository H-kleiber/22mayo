const carros=["nissan","toyota","for","audi","bmw"];
const year=["2012","2011","2014","2011","2011"]

class carro{
    constructor(marca,modelo,year,color,llave,asientos){

        this.marca=marca;
        this.modelo=modelo;
        this.year=year;
        this.color=color;
        this.llave=llave;
        this.asientos=asientos;
    }
    prender(){
        if(this.llave===true){
         console.log("puede arrancar el carro");
        }else{
            console.log("no tiene la llave")
        }
    }
    

}
// const objeto=new carro("nissan","frontier","2015","rojo","false","6");
// console.log(objeto)
carros.forEach(element => {
    car= new carro(`${element}`,"frontier","2015","rojo","false","6")
    console.log(car)
    
});