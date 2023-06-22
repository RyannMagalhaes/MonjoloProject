import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js";
import "../../../css/section7.css";
import imagem from "../../../images/farofaartesanal.jpg";


export default function Comprar() {
    return (
        <section class="sectionbege section7" id="compre">
            <div className="divMaior7">
                <div className="container7_1">
                    <div className="tituloSub">
                        <TituloSubtitulo tit={titulosDescricoes["comprar"].titulo} />

                    </div>
                    <div className="linha">
                        <hr />
                    </div>

                </div>
                <div className="container7_2">
                    <div className="imagem7">
                        <img src={imagem} alt="" />

                    </div>
                    <div className="txt7">
                        <p>
                            Explore nossa incrível seleção de farinhas e farofas de alta qualidade e adicione um toque especial às suas receitas culinárias! Na nossa loja, você encontrará uma variedade de opções cuidadosamente selecionadas para atender a todos os gostos e necessidades.
                        </p>
                        <p>
                            Faça parte da nossa comunidade de apaixonados por culinária e experimente a diferença que nossas farinhas e farofas de qualidade podem fazer. Aproveite uma experiência gastronômica excepcional com os produtos da nossa loja
                        </p>
                    </div>
                </div>
                <div className="container7_3">
                    <div className="vazia">

                    </div>
                    <div className="divBotao">
                        <input type="button" className="botaoComprar" value="Nossa Loja!" />

                    </div>
                </div>

            </div>
        </section>
    )
}
