import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"
import Brasil from "../commom/Brasil";
import "../../../css/section5.css"
import "../../../css/styles.css"
import brasil from "../../../images/imagebrasil.png";

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
                    <div className="brasil">
                        <Brasil />
                    </div>
                    <div className="brasil2">
                    <a href="https://munddi.com/MONJOLO">
                        <img src={brasil} alt="" />
                    </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

