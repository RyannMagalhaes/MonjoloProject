import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"

export default function Ingredientes(){
    return(
        <section class="sectionlaranja" id="diferencial">
            <TituloSubtitulo tit={titulosDescricoes["ingredientes"].titulo} desc={titulosDescricoes["ingredientes"].descricao}/>
        </section>
    )
}