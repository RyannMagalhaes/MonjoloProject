import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"

export default function Comprar(){
    return(
        <section>
            <TituloSubtitulo tit={titulosDescricoes["comprar"].titulo} />
        </section>
    )
}