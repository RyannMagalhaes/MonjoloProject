import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"
import Brasil from "../commom/Brasil";
import "../../../css/section5.css"

export default function Mapa() {
    return (
        <section class="sectionbege section5">
            <div className="divMaior5">
                <div className="tituloSub5">
                    <TituloSubtitulo tit={titulosDescricoes["mapa"].titulo} desc={titulosDescricoes["mapa"].descricao} />
                </div>
                <div className="div5">
                    <div className="txt5">
                        <p>Nos encontre próximo de você.</p>
                    </div>
                    <div className="Brasil">
                        <Brasil />

                    </div>

                </div>
            </div>
        </section>
    )
}

