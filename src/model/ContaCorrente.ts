import { Conta } from "./Conta"

//Conta Corrente herda da Conta. existe para especializar a Conta

export class ContaCorrente extends Conta{
    private _limite: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number){
        super(numero, agencia, tipo, titular, saldo);//Método Construtor da superclasse
        
        this._limite = limite;
    }

    public get limite(){
        return this._limite;
    }
    public set limite(limite: number){
        this._limite = limite;
    }

    public sacar(valor: number): boolean{
        if((this.saldo + this._limite) < valor){
            console.log("\nSaldo Insuficiente!");
            return false;
        }

        this.saldo = this.saldo - valor;
        return true;
    }

    public visualizar(): void{
        super.visualizar();
        console.log(`Limite: ${this._limite.toFixed(2)}`)
    }
}