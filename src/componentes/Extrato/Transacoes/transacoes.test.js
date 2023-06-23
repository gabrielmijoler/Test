const { render, screen } = require("@testing-library/react");
import Transacoes from './index'
import estilos from '../Extrato.module.css'

test("Deve renderizar o mesmo componentes com props atualizadas",() => {
  const transacao ={
      transacao:'Depósito',
      valor: 100,
    }; 

  render(<Transacoes estilos={estilos} transacao={transacao}/>);
  const tipotransacao = screen.getByTestId('tipoTransacao');
  const valortransacao = screen.getByTestId('valorTransacao');
  expect(tipotransacao).toHaveTextContent('Depósito');
  expect(valortransacao).toHaveTextContent('R$ 100');
});

test("Verificar transação",() => {
  const transacao ={
      transacao:'Transferência',
      valor: 100,
    }; 

  render(<Transacoes estilos={estilos} transacao={transacao}/>);
  const tipotransacao = screen.getByTestId('tipoTransacao');
  const valortransacao = screen.getByTestId('valorTransacao');
  expect(tipotransacao).toHaveTextContent('Transferência');
  expect(valortransacao).toHaveTextContent('R$ 100');
});
