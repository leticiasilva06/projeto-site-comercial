/* Importa o arquivo CSS para aplicar estilos ao componente */
import "./estilo.css";

/* Define a função do componente React chamada "MenuNavegacao" */
function MenuNavegacao() {
  return (
    /* Início de uma lista desordenada com a classe "menu" */
    <ul className="menu">
      {/* Item da lista com a classe "itens" e o texto "Home" */}
      <li className="itens">Home</li>

      {/* Item da lista com a classe "itens" e o texto "Cursos" */}
      <li className="itens">Cursos</li>

      {/* Item da lista com a classe "itens" e o texto "Turmas" */}
      <li className="itens">Turmas</li>
    </ul>
    /* Fecha a lista desordenada */
  );
  /* Fecha o bloco de retorno */
}

/* Exporta o componente React "MenuNavegacao" para uso em outros lugares */
export default MenuNavegacao;
