import "./Botao.css";

const Botao = (props) => {
  // podemos no props dar .children para que nosso componente em x de texto possa ser icone imagem ele recebe todo o conteudo
  return <button className="botao">{props.children}</button>;
};

export default Botao;
