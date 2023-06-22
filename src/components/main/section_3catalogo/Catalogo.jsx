import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"
import "../../../css/section3.css"

export default function Catalogo() {
    return (
        <section class="sectionbege" id="catalogo">
            <div className="container3">
                <TituloSubtitulo tit={titulosDescricoes["catalogo"].titulo} desc={titulosDescricoes["catalogo"].descricao} />

            </div>
        </section>
    )
}