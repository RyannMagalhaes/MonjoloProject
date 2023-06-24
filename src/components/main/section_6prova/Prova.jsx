import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"
import CardOpniao from "../commom/CardOpniao";
import "../../../css/section6.css"
import "../../../JSON/opnioes.json"
import Carrossel from "../commom/Carrossel";

export default function Prova() {
    return (
        <section class="sectionlaranja section6" id="depoimentos">
            <div className="divMaior6">
                <div className="tituloSub6">
                    <TituloSubtitulo tit={titulosDescricoes["prova"].titulo} desc={titulosDescricoes["prova"].descricao} />

                </div>

            </div>
        </section>
    )


    function gerarCard() {
        fetch("../../../JSON/opnioes.json")
            .then(op => opnioes)
            .then()
    }
}