import Elem from "./Elem.js"
/*import Info from "./info.js"*/

export default class Jatekter{
    #korszamlalo = 0;
    #lista=["O"," "," "," "," "," "," "," ","X"];
    #szuloElem;
    constructor(szuloElem){
    /*let InfoPanel=document.querySelector("aside");
    this.info=new Info(InfoPanel);
    this.info.megjelenit("x")*/
    this.#szuloElem=szuloElem;
    this.#megjelenit()
    this.#esemenykezelo()

   
    };
   
    #esemenykezelo(){
        window.addEventListener("kivalaszt",(event) =>{
            console.log(event.detail);
            if (this.#korszamlalo % 2 == 0) {
                this.#lista[event.detail]="X";
                /*this.info.megjelenit("0");*/
            } else {
                this.#lista[event.detail]="O";
                /*this.info.megjelenit("x")*/
            }
            this.#korszamlalo++;
            this.#szuloElem.innerHTML=" "
            this.#megjelenit()
        });
    }

   

    #megjelenit(){
    for (let index = 0; index < this.#lista.length; index++) {
         new Elem(this.#lista[index],index ,this.#szuloElem)
       
    }
   
    }

   
}

