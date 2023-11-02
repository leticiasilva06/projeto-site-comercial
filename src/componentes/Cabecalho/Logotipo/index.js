// Importa o arquivo CSS para aplicar estilos ao componente
import './estilo.css';

// Importa a imagem "SENAI_São_Paulo_logo.png" e a associa à variável "logo"
import logo from "../../../imagens/SENAI_São_Paulo_logo.png";

// Define a função do componente React chamada "Logotipo"
function Logotipo() {
  return (
    // Início do elemento div com classe "App-Logotipo"
    <div className='App-Logotipo'>
      {/* Exibe a imagem "SENAI_São_Paulo_logo.png" com a classe "Logo-img" e texto alternativo "logo" */}
      <img src={logo} className="Logo-img" alt="logo" />
      {/* Exibe um parágrafo com a classe "Logo-texto" contendo o texto "Anchieta" */}
      <p className='Logo-texto'>"Anchieta"</p>
    </div>
    // Fecha o elemento div
  );
  // Fecha o bloco de retorno
}

// Exporta o componente React "Logotipo" para uso em outros lugares
export default Logotipo;
