const { render, screen } = require("@testing-library/react");
import Menu from './index'

test("Deve renderizar um link para pagina inicial",()=>{
    render(<Menu/>);
    const linkPaginaInicial = screen.getByText('Inicial');
    expect(linkPaginaInicial).toBeInTheDocument();
});

test("Deve renderizar uma lista de link ",()=>{
    render(<Menu/>);
    const linksDeLinks = screen.getAllByRole('link'); 
    expect(linksDeLinks).toHaveLength(4);
});

test("Não deve renderizar um link para extrato",()=>{
    render(<Menu/>);
    const linksExtrato = screen.queryByText('link'); // verificar se tem o elemento
    expect(linksExtrato).not.toBeInTheDocument();
});


test("Deve renderizar uma lista de links com classe link",()=>{
    render(<Menu/>);
    const links = screen.getAllByRole('link');
    links.forEach((link)=> expect(link).toHaveClass('link'));
    expect(links).toMatchSnapshot();// tirar uma foto do codigo testado
});

