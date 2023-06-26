import React, { useEffect, useState } from 'react';
import TituloSubtitulo from '../commom/TituloSubtitulo';
import CardOpniao from '../commom/CardOpniao';
import '../../../css/section6.css';
import opinioesData from '../../../JSON/opnioes.json';
import titulosDescricoes from '../../../js/titulosDescricoesSecoes.js';

export default function Prova() {
  const [opinioes, setOpinioes] = useState([]);

  useEffect(() => {
    setOpinioes(opinioesData.opnioes.slice(0, opinioesData.exibir));
  }, []);

  function gerarCard(opiniao) {
    return (
      <CardOpniao
        relato={opiniao.relato}
        foto={opiniao.foto}
        nome={opiniao.nome}
        cidade={opiniao.cidade}
      />
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
          {opinioes.map((opiniao, index) => (
            <React.Fragment key={index}>
              {gerarCard(opiniao)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}