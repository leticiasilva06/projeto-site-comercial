// Importa a biblioteca styled-components
import styled from 'styled-components'

// Define um componente "Main" com estilos usando styled-components
const Main = styled.main`
    width: 80vw;            /* Define a largura do elemento "main" como 80% da largura do contêiner pai */
`
// Define um componente React chamado "SecaoPrincipal"
function SecaoPrincipal() {
    return (
        <Main> {/*Renderiza o componente "Main" definido com styled-components*/}
            Main
        </Main>
    );
}

// Exporta o componente React "SecaoPrincipal" para uso em outros lugares
export default SecaoPrincipal;
