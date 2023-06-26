import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"
import "../../../css/section3.css"
import imagem3 from "../../../images/farofaartesanal.jpg";
import Carrossel from "../commom/Carrossel";
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../../../css/section3.css"



export default function Catalogo() {
    return (
        <section class="sectionbege section3" id="catalogo">
            <div className="divMaior3">
                <div className="container3">
                    <TituloSubtitulo tit={titulosDescricoes["catalogo"].titulo} desc={titulosDescricoes["catalogo"].descricao} />
                    <Carrossel />
                </div>
            </div>
        </section>
    )
}