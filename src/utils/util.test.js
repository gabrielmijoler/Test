import {calculaNovoSaldo} from './index'

describe('Quando eu realzo um transação', ()=>{
  test('Que é um deposito, o saldo deve aumentar', () =>{ 
    const transacoes = {
      transacao:'Depósito',
      valor: 50,
    }

    const novoSaldo = calculaNovoSaldo(transacoes, 100) 
    expect(novoSaldo).toBe(150)
  })

   it('Que é uma tranferência, o saldo deve diminuir', () =>{ 
    const transacoes = {
      transacao:'Tranferência',
      valor: 50,
    }

    const novoSaldo = calculaNovoSaldo(transacoes, 100) 
    expect(novoSaldo).toBe(50)
  })
});