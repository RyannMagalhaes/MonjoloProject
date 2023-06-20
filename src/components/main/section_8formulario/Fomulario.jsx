import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"

export default function Formulario(){
    return(
        <section>
            <TituloSubtitulo tit={titulosDescricoes["formulario"].titulo} />
        </section>
    )
}