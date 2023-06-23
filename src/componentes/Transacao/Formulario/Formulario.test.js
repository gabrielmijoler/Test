const { render, screen } = require("@testing-library/react");
import Formulario from './index'


describe('Deve renderizar um campo de input', () => {
  test("no documento",() => {
    render(<Formulario/>);
    const campotexto = screen.getByPlaceholderText('Digite um valor');
    expect(campotexto).toBeInTheDocument('type', 'number');
});

test("com type number",()=>{
    render(<Formulario/>);
    const campotexto = screen.getByPlaceholderText('Digite um valor');
    expect(campotexto).toHaveAttribute('type', 'number');
});

test("Pode ser preenchido",()=>{
    render(<Formulario/>);
    const campotexto = screen.getByPlaceholderText('Digite um valor');
    expect(campotexto).toHaveAttribute('type', 'number');
});
})