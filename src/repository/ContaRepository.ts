import { Conta } from "../model/Conta";

export interface ContaRepository{
    //CRUD da Conta, Métodos de interação, SEMPRE TERÁ
    //atualizar(pessoa: Pessoa): void;
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    deletar(numero: number): void;

    //Métodos Bancários
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}