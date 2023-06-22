import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"
import CardOpniao from "../commom/CardOpniao";
import "../../../JSON/opnioes.json"

export default function Prova(){
    return(
        <section class="sectionlaranja" id="depoimentos">
            <TituloSubtitulo tit={titulosDescricoes["prova"].titulo} desc={titulosDescricoes["prova"].descricao}/>
        </section>
    )


    function gerarCard(){
        fetch("../../../JSON/opnioes.json")
        .then(op => opnioes)
        .then()
    }
}