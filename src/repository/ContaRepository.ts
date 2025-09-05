import { Conta } from "../model/Conta";

//Ele existe para Lembrar sempre o que deve ter em seu código. Deve ser seguido, da errodo se não for seguido
//Interface é um contrato, um molde, um padrão a ser seguido
//Quem implementa uma interface, deve cumprir o que está nela

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