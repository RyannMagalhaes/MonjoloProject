import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import TituloSubtitulo from '../commom/TituloSubtitulo';
import CardOpniao from '../commom/CardOpniao';
import '../../../css/section6.css';
import opinioesData from '../../../JSON/opnioes.json';
import titulosDescricoes from '../../../js/titulosDescricoesSecoes.js';
import Animacao from '../commom/Animacao';
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Prova() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [opinioes, setOpinioes] = useState([]);

  useEffect(() => {
    const exibirOpnioes = isMobile ? 1 : opinioesData.exibir;
    setOpinioes(opinioesData.opnioes.slice(0, exibirOpnioes));
  }, [isMobile]);

  function gerarCard(opiniao, index) {
    return (
      <SwiperSlide>
      <CardOpniao
        div
        className={`${index % 2 === 0 ? 'card-opiniao' : 'card-opiniao-impar'}`}
        relato={opiniao.relato}
        foto={opiniao.foto}
        nome={opiniao.nome}
        cidade={opiniao.cidade}
        />
      </SwiperSlide>
    );
  }

  return (
    <section className="sectionlaranja section6" id="depoimentos">
      <div className="divMaior6">
        <div className="tituloSub6">
          <TituloSubtitulo
            tit={titulosDescricoes['prova'].titulo}
            desc={titulosDescricoes['prova'].descricao}
          />
        </div>
       
        <div className="opnioes-container">
        <Swiper
         modules={[Navigation, Pagination, Autoplay]}
         navigation={true}
         pagination={{clickable:true}}
         autoplay={{delay: 4500}}
         speed={1000}
         loop={true}
         className='swiper-container'>
          {opinioes.map((opiniao, index) => (
            <React.Fragment key={index}>
              {gerarCard(opiniao, index)}
            </React.Fragment>
          ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}