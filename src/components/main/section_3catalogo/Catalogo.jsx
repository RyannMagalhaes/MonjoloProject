import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"

export default function Catalogo(){
    return(
        <section class="sectionbege">
            <TituloSubtitulo tit={titulosDescricoes["catalogo"].titulo} desc={titulosDescricoes["catalogo"].descricao}/>
        </section>
    )
}