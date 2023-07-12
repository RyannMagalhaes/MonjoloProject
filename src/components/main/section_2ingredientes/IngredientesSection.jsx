import React from 'react';
import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js";
import IngredientesComponent from "../commom/IngredientesComponent";
import "../../../css/section2.css";
import ingredientesJson from '../../../JSON/ingredientes.json';
import panela from "../../../images/panela.png"
import mandioca from "../../../images/iconMandioca.png"
import animacao from "../../../JSON/animation_lk068s4e.json"
import { AnimationConfig } from '../commom/AnimationConfig';


export default function IngredientesSection() {
  const { ingredientes, ingredientes2 } = ingredientesJson;

  return (
    <section className="sectionlaranja section2" id="diferencial">
      
      <div className="divMaior2">
        <div className="tituloSub2">
          <TituloSubtitulo
            tit={titulosDescricoes["ingredientes"].titulo}
            desc={titulosDescricoes["ingredientes"].descricao}
          />
        </div>
        <div className="ingredientes">
          <div className="lista1">
            <IngredientesComponent ingredientes={ingredientes} />
          </div>
          <div className="lista2">
            <IngredientesComponent ingredientes={ingredientes2} className="animacao"/>
          </div>
        </div>
          <AnimationConfig/>
      </div>
      <div className="panelaDecoracao">
        <img src={mandioca} alt="Madioca de Decoração" className='mandioca'/>
        <img src={mandioca} alt="Madioca de Decoração" className='mandioca2'/>
        <img src={panela} alt="Panela de Decoração"  className='panela'/>
      </div>
    </section>
  );
}
