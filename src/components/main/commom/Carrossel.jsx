import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import farofaartesanal from "../../../images/farofaartesanal.jpg";
import farofaalho from "../../../images/farofaalho.png"
import farofaapimentada from "../../../images/farofaapimentada.png";
import farofabacon from "../../../images/farofabacon.png";
import farofacostelinhalimao from "../../../images/farofacostelinhalimao.png";
import "../../../css/section3.css"

export default function Carrossel(props) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500 }}
            speed={1000}
            loop={true}
            className='swiper-container'>
            <SwiperSlide className='slide-item'>
                <div className="container3_2">
                    <div className="txt3">
                        <p>
                            Farinha artesanal Tradicional
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
                        <img src={farofaartesanal} alt="" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className='slide-item'>
                <div className="container3_2">
                    <div className="txt3">
                        <p>
                            Farofa Apimentada
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
                        <img src={farofaapimentada} alt="" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className='slide-item'>
                <div className="container3_2">
                    <div className="txt3">
                        <p>
                            Farofa de Alho:
                        </p>
                        <p>
                            Descubra o prazer de saborear uma farofa intensamente aromática! Nossa farofa de alho é preparada com alhos dourados cuidadosamente selecionados, que conferem um sabor marcante e irresistível. Cada garfada é uma explosão de sabores, combinando a crocância da farinha com a intensidade do alho. Perfeita para acompanhar pratos diversos, essa farofa é um toque especial que eleva o paladar e encanta os amantes da culinária.
                        </p>
                        <p>
                            Peso: 350g
                        </p>
                        <p>
                            Combina com: Pratos baseados em arroz
                        </p>
                    </div>
                    <div className="imagem3">
                        <img src={farofaalho} alt="" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className='slide-item'>
                <div className="container3_2">
                    <div className="txt3">
                        <p>
                            Farofa de Costelinha com Limão:
                        </p>
                        <p>
                            Uma experiência única para os amantes de sabores surpreendentes! Nossa farofa de costelinha com limão combina o sabor defumado e suculento da costelinha de porco com o toque cítrico e refrescante do limão. Cada garfada revela um sabor único, trazendo um equilíbrio perfeito entre a suculência da carne e a acidez refrescante do limão. Uma escolha perfeita para acompanhar churrascos, peixes grelhados e refeições especiais. Surpreenda-se com esse deleite para o seu paladar!
                        </p>
                        <p>
                            Peso: 250g
                        </p>
                        <p>
                            Combina com Churrasco, Peixes Grelhados e Saladas
                        </p>
                    </div>
                    <div className="imagem3">
                        <img src={farofacostelinhalimao} alt="" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className='slide-item'>
                <div className="container3_2">
                    <div className="txt3">
                        <p>
                            Farofa Pouch Bacon
                        </p>
                        <p>
                            Sinta o delicioso aroma defumado e o irresistível crocante em cada mordida! Nossa farofa de bacon é preparada com pedacinhos suculentos de bacon dourados, que se misturam harmoniosamente com a farinha, proporcionando uma explosão de sabor. Uma combinação perfeita para acompanhar churrascos, feijoadas e refeições do dia a dia. Desperte seu paladar com essa experiência incrível!
                        </p>
                        <p>
                            Peso: 250g
                        </p>
                        <p>
                            Combina com Churrasco, Feijoada e Ovos Mexidos
                        </p>
                    </div>
                    <div className="imagem3">
                        <img src={farofabacon} alt="" />
                    </div>
                </div>
            </SwiperSlide>

            <div class="swiper-pagination"></div>
        </Swiper>
    )
}