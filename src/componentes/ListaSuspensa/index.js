import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select required={props.obrigatorio}>
        {/* abaixo estamos usando map para percorrer e criar um array novo com a opção que desejamos */}
        {/* {props.itens.map(item => <option>{item}</option>)}  === podemos usar deste jeito ou do abaixo*/}
        {/* depois de criado nosso map temos que ir em nosso arquivo de formulario criar uma const array com as option dento da função do formulario e importar */}
        {/* quando criamos uma lista todo filho da lista tem que ter uma key unica de prop
        entao colocamos no codigo apos option key={item} isso e necessario para o react saber quando tem que renderizar */}
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
