import "./Banner.css";
function Banner() {
  //jsx = como o react trabalha com parte visual parece html mas não é ele ira entender oq esta abaixo e fazer apeend no dom
  //ou seja ele entende e converte para executar
  return (
    <header className="banner">
      <img
        src="/imagens/banner.png"
        alt="O Banner principal da pagina do Organo"
      />
    </header>
  );
}

export default Banner;
