import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"

export default function QuemSomos(){
    return(
        <section>
            <TituloSubtitulo tit={titulosDescricoes["quemSomos"].titulo} desc={titulosDescricoes["quemSomos"].descricao}/>
        </section>
    )
}