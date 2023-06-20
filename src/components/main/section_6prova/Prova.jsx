import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"

export default function Prova(){
    return(
        <section>
            <TituloSubtitulo tit={titulosDescricoes["prova"].titulo} desc={titulosDescricoes["prova"].descricao}/>
        </section>
    )
}