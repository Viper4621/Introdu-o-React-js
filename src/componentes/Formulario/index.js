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

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Formulario foi submetido");
  };

  return (
    // escutando eventos em react ao inves de usar vanila em nosso botao para selecionar o form e criar função on click podemos  no form mesmo
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        {/* Abaixo criamos obrigatorio={true} e no CampoTexto colocamos no input */}
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        {/* depois de importado no arquivo e feita a função de props para map e criado o array dos itens usamos sintaxe abaixo */}
        <ListaSuspensa obrigatorio={true} label="Times" itens={times} />
        {/* como mudamos props.children agora nosso botao ao inves de precisar de texto que er ao props que tinhamos dado pode ter qualquer coisa dentro como imagem e etc */}
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
