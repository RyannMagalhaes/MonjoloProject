
export default function CardOpniao(props) {
  
    return (
      <div className={`${props.className}`}>
        <p className="relato">{props.relato}</p>
        <div className="foto">
          <img src={props.foto} alt="" />
        </div>
          <div className="linha"></div>
        <p className="nome">{props.nome}</p>
        <p className="cidade">{props.cidade}</p>
      </div>
    );
  }