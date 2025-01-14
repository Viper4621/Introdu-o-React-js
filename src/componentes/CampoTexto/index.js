import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  // let valor = "Erick Luciano";
  // hook é alguma coisa que o react entrega para gente para conseguir um estado dentro de uma função
  //nessa aula o comando abaixo só ira funcionar caso import { useState } from "react"; no começo do codigo
  // para pegar o valor digitado no imput e guardar valor temos que modificar abaixo para não se pode passar valor direto por atribuição no caso setter setValor
  //agora quando o value atrelado a um estado o react sabe que tem que renderizar novamente mapiamos a var para o dom

  // const [valor, setValor] = useState("");

  const aoDigitado = (evento) => {
    // setValor(evento.target.value);
    // // valor = evento.target.value;
    // console.log(valor);
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
