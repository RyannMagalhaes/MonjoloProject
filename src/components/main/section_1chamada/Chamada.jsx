import Call from "../commom/Call";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js";
import "../../../css/section1.css";
import Animacao from "../commom/Animacao";

export default function Chamada() {
    return (
        <section className="section1">
            <div className="alinhar1">
                <div className="container1">
                    <Call tit={titulosDescricoes["chamada"].titulo} desc={titulosDescricoes["chamada"].descricao} />
                </div>
                <input type="button" value="Confira todas as opções" class="botaocall" />
            </div>
            <Animacao css_identifier=".titulosubtitulo" animationType="opacity" value="0.5" />
        </section>
    )
}