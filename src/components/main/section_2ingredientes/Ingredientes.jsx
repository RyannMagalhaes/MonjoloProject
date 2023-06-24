import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"
import "../../../css/section2.css"

export default function Ingredientes() {
    return (
        <section class="sectionlaranja section2" id="diferencial">
            <div className="divMaior2">
                <div className="tituloSub2">
                    <TituloSubtitulo tit={titulosDescricoes["ingredientes"].titulo} desc={titulosDescricoes["ingredientes"].descricao} />

                </div>

            </div>
        </section>
    )
}