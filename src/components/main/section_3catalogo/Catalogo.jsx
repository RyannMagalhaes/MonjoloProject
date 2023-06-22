import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"
import "../../../css/section3.css"
import imagem3 from "../../../images/farofaartesanal.jpg";

export default function Catalogo() {
    return (
        <section class="sectionbege section3" id="catalogo">
            <div className="divMaior3">

                <div className="container3">
                    <TituloSubtitulo tit={titulosDescricoes["catalogo"].titulo} desc={titulosDescricoes["catalogo"].descricao} />
                </div>
                <div className="container3_2">
                    <div className="txt3">
                        <p>
                            Farinha artesanal  Apimentada
                        </p>
                        <p>
                            Explosão de sabor e picância em cada garfada! Nossa farofa apimentada é cuidadosamente temperada com especiarias irresistíveis, proporcionando um equilíbrio perfeito entre calor e sabor. Surpreenda seu paladar
                        </p>
                        <p>
                            Peso: 350g
                        </p>
                        <p>
                            Combina com Churrasco, Peixes e Feijoada
                        </p>
                    </div>
                    <div className="imagem3">
                        <img src={imagem3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}