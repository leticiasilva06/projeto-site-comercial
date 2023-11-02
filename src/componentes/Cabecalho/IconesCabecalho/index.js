// Importa o arquivo CSS para aplicar estilos ao componente
import "./estilo.css";

// Importa a imagem "login.png" e a associa à variável "login"
import login from "../../../imagens/login.png";

// Importa a imagem "pesquisar.png" e a associa à variável "pesquisar"
import pesquisar from "../../../imagens/pesquisar.png";

// Define a função do componente React chamada "IconesCabecalho"
function IconesCabecalho() {
  return (
    
    // Início do elemento div com classe "icones"
    <div className="icones">

      {/* Exibe a imagem "pesquisar.png" com a classe "icone" e texto alternativo "login" */}
      <img src={pesquisar} className="icone" alt="login" />
      {/* Exibe a imagem "login.png" com a classe "icone" e texto alternativo "login" */}
      <img src={login} className="icone" alt="login" />
      
    </div>
  );
}

// Exporta o componente React "IconesCabecalho" para uso em outros lugares
export default IconesCabecalho;
