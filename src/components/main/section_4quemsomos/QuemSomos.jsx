import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"
import "../../../css/section4.css"
import imagem2 from "../../../images/imgVideo.png";

export default function QuemSomos() {
    return (
        <section class="sectionlaranja section4" id="quemsomos">
            <div className="divMaior4">
                <div className="container4">
                    <TituloSubtitulo tit={titulosDescricoes["quemSomos"].titulo } desc={titulosDescricoes["quemSomos"].descricao} />
                </div>
                <div className="container4_2">
                    <div className="video">

                        <iframe
                            width="560"
                            height="315"
        
                            src={`https://www.youtube.com/embed/OvDOjat8afY`}
                            title="Embedded YouTube Video"
                            allowFullScreen
                        ></iframe>

                    </div>
                    <div className="text4">
                        <p>
                            A Monjolo Alimentos é uma indústria genuinamente brasileira de farinha e farofa artesanal situada em Itumbiara - GO. Fazemos produtos com sabor de comida feita em casa!
                        </p>
                        <p>
                            Foi criada em 2018 e surgiu da nossa paixão à culinária, do instinto de empreendedorismo e a vontade de levar um alimento único à mesa de quem aprecia um sabor sincero. Temos como objetivo, despertar o melhor aos que provarem os produtos Monjolo.
                        </p>
                        <p>
                            Nossos produtos são produzidos de forma artesanal levando em sua composição insumos da mais alta qualidade. Utilizamos de processos rígidos de produção tendo como foco o sabor, crocância, aroma e frescor.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}