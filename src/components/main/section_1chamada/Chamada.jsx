import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"

export default function Chamada(){
    return(
        <section>
            <TituloSubtitulo tit={titulosDescricoes["chamada"].titulo} desc={titulosDescricoes["chamada"].descricao}/>
        </section>
    )
}