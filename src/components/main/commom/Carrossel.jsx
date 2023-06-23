import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imagem3 from "../../../images/farofaartesanal.jpg";
import "../../../css/section3.css"

export default function Carrossel(props){
    return(
        <Swiper 
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{clickable:true}}
        autoplay={{delay: 4500}}
        speed={1000}
        loop={true}
        className='swiper-container'>
            <SwiperSlide className='slide-item'>
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
            </SwiperSlide>

            <SwiperSlide className='slide-item'>
            <div className="container3_2">
                    <div className="txt3">
                        <p>
                            Teste teste
                        </p>
                        <p>
                            Explosão de sabor e picância em cada garfada! Nossa farofa apimentada é cuidadosamente temperada com especiarias irresistíveis, proporcionando um equilíbrio perfeito entre calor e sabor. Surpreenda seu paladar
                        </p>
                        <p>
                            Peso: 350g
                        </p>
                        <p>
                            Teste teste
                        </p>
                    </div>
                    <div className="imagem3">
                        <img src={imagem3} alt="" />
                    </div>
                </div>
            </SwiperSlide>

            <div class="swiper-pagination"></div>
        </Swiper>
    )
}