import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"
import Brasil from "../commom/Brasil";

export default function Mapa() {
    return (
        <section>
            <TituloSubtitulo tit={titulosDescricoes["mapa"].titulo} desc={titulosDescricoes["mapa"].descricao}/>
            <Brasil/>
        </section>
    )
}

