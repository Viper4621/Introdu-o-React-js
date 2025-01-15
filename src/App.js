import { useState } from "react";
import Banner from "./componentes/Banner/Banner.js";
import Formulario from "./componentes/Formulario/index.js";
import Time from "./componentes/Time/index.js";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "",
      corSecundaria: "",
    },
    {
      nome: "Front-End",
      corPrimaria: "",
      corSecundaria: "",
    },
    {
      nome: "Data-Science",
      corPrimaria: "",
      corSecundaria: "",
    },
    {
      nome: "Devops",
      corPrimaria: "",
      corSecundaria: "",
    },
    {
      nome: "UX e Design",
      corPrimaria: "",
      corSecundaria: "",
    },
    {
      nome: "Mobile",
      corPrimaria: "",
      corSecundaria: "",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "",
      corSecundaria: "",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <Time nome="Programação" />
      <Time nome="Front-End" />
      <Time nome="Data-Science" />
    </div>
  );
}

export default App;
