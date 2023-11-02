import "./estilo.css"
import BarraNavegacao from "./BarraNavegacao";
import SecaoPrincipal from "./SecaoPrincipal";

function Corpo() {
    return (
        <div className="Corpo">
            <BarraNavegacao/>
            <SecaoPrincipal/>            
        </div>
    );
}
export default Corpo