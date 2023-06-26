const { render, screen } = require("@testing-library/react");
import Saldo from './index'

describe('Componente <Saldo />', ()=>{
  test('Deve realizar o saldo com valor monetario', ()=>{
    render(<Saldo saldo={1000} />);

    const saldo = screen.getByTestId('R$ 1000');
    expect(saldo).toHaveTextContent('R$ 1000');
  });
});