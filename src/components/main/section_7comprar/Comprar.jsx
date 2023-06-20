import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"

export default function Comprar(){
    return(
        <section class="sectionbege">
            <TituloSubtitulo tit={titulosDescricoes["comprar"].titulo} />
        </section>
    )
}