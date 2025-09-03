import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository{
    private _listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta != null){
            buscaConta.visualizar();
        }else{
            console.log(colors.fg.red, `\nA Conta número: ${numero} não foi encontrada!`, colors.reset);
        }
    }
    listarTodas(): void {
        for(let conta of this._listaContas){
            conta.visualizar();
        }
    }
    cadastrar(conta: Conta): void {
        this._listaContas.push(conta);
        console.log(colors.fg.green, `\nA Conta número: ${conta.numero} foi criada com sucesso!`, colors.reset);
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    //Métodos Auxiliares
    //Gerar Número da Conta
    public gerarNumero(): number{
        return ++ this.numero;
    }

    //Checa se uma Conta existe
    public buscarNoArray(numero: number): Conta | null{
        for(let conta of this._listaContas){
            if(conta.numero === numero){
                return conta;
            }
        }
        return null;
    }

}