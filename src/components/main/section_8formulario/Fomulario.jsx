import TituloSubtitulo from "../commom/TituloSubtitulo";
import titulosDescricoes from "../../../js/titulosDescricoesSecoes.js"
import "../../../css/section8.css"
import iconsec8 from "../../../images/iconsec8.png"

export default function Formulario() {
    return (
        <section class="sectionlaranja section8" id="contato">
            <div className="tituloSub8">
                <div>
                    <TituloSubtitulo tit={titulosDescricoes["formulario"].titulo} />

                </div>
                <div>
                    <img src={iconsec8} alt="" />
                </div>

            </div>
            <div className="divMaior8">
                <div className="txt8">
                    <p>
                        Você está procurando uma parceria comercial que agregue valor ao seu negócio e encante seus clientes? A Monjolo Alimentos é a escolha certa para você!
                    </p>
                    <p>
                        Com uma tradição de anos na produção de farofas artesanais de alta qualidade, somos reconhecidos pela excelência em sabor, ingredientes selecionados e cuidado artesanal em cada embalagem.
                    </p>
                    <p>
                        Ao se tornar um parceiro comercial da Monjolo Alimentos, você terá acesso a um produto diferenciado, capaz de conquistar o paladar exigente dos seus clientes.
                    </p>
                </div>
                <div className="formulario">
                    <p>Seja nosso parceiro!</p>
                    <form action="">
                        <label htmlFor="">Nome:</label>
                        <input type="text" />
                        <label htmlFor="">Telefone:</label>
                        <input type="text" />
                        <label htmlFor="">Email:</label>
                        <input type="email" />
                        <br />
                        <div >
                            <a href="">
                                <input type="button" className="botaoEnviar8" value="Enviar" />

                            </a>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}