import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data-Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        {/* depois de importado no arquivo e feita a função de props para map e criado o array dos itens usamos sintaxe abaixo */}
        <ListaSuspensa label="Times" itens={times} />
        {/* como mudamos props.children agora nosso botao ao inves de precisar de texto que er ao props que tinhamos dado pode ter qualquer coisa dentro como imagem e etc */}
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
