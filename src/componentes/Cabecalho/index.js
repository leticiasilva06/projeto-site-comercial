// Importa o arquivo CSS para aplicar estilos ao componente
import './estilo.css';

// Importa o componente React "Logotipo" de um arquivo específico
import Logotipo from "../Cabecalho/Logotipo";

// Importa o componente React "MenuNavegacao" de um arquivo específico
import MenuNavegacao from "../Cabecalho/MenuNavegacao";

// Importa o componente React "IconesCabecalho" de um arquivo específico
import IconesCabecalho from "../Cabecalho/IconesCabecalho";

// Define a função do componente React chamada "Cabecalho"
function Cabecalho() {
  return (
    // Início do elemento header com a classe "App-header"
    <header className = "App-header">
      {/* Renderiza o componente "Logotipo" no cabeçalho */}
      <Logotipo />
      
      {/* Renderiza o componente "MenuNavegacao" no cabeçalho */}
      <MenuNavegacao />

      {/* Renderiza o componente "IconesCabecalho" no cabeçalho */}
      <IconesCabecalho />
    </header>
  );
  // Fecha o bloco de retorno
}

// Exporta o componente React "Cabecalho" para uso em outros lugares
export default Cabecalho;
