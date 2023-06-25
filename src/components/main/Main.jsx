import Chamada from "./section_1chamada/Chamada";
import IngredientesSection from "./section_2ingredientes/IngredientesSection";
import Catalogo from "./section_3catalogo/Catalogo";
import QuemSomos from "./section_4quemsomos/QuemSomos";
import Mapa from "./section_5mapa/Mapa";
import Prova from "./section_6prova/Prova";
import Comprar from "./section_7comprar/Comprar";
import Formulario from "./section_8formulario/Fomulario";

export default function Main() {

    return (
        <main>
            <Chamada/>
            <IngredientesSection/>
            <Catalogo/>
            <QuemSomos/>
            <Mapa/>
            <Prova/>
            <Comprar/>
            <Formulario/>
        </main>
    )
}