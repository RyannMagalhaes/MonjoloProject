export default function CardOpniao(props) {
    return (
      <div className="card-opniao">
        <p className="relato">{props.relato}</p>
        <div className="foto">
          <img src={props.foto} alt="Foto" />
        </div>
          <div className="linha"></div>
        <p className="nome">{props.nome}</p>
        <p className="cidade">{props.cidade}</p>
      </div>
    );
  }
  