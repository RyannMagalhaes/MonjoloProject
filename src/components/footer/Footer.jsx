import logo from "../../images/logo.jpg"
import face from "../../images/logoFace.png"
import insta from "../../images/logoInsta.png"
import yt from "../../images/logoYT.png"
import "../../css/footer.css"
export default function Footer() {

    return (
        <footer className="footer">
            <div className="divMaiorFooter">
                <div className="redesSociais">
                    <div className="txtRedesTxt">
                        <p>
                            Conecte-se conosco nas redes sociais e descubra um mundo de sabores e inspiração gastronômica!
                        </p>
                    </div>
                    <div className="txtRedes">
                        <div className="face">
                            <a href="https://www.facebook.com/profile.php?id=100063537341957&mibextid=LQQJ4d">
                                <div>
                                    <img src={face} alt="" />
                                </div>
                                {/* <div>
                                    <p>Facebook</p>
                                </div> */}
                            </a>
                        </div>
                        <div className="insta">
                            <a href="https://instagram.com/monjoloalimentos?igshid=OGIzYTJhMTRmYQ==">
                                <div>
                                    <img src={insta} alt="" />
                                </div>
                                {/* <div>
                                    <p>Instagram</p>
                                </div> */}
                            </a>
                        </div>
                        <div className="youtube">
                            <a href="https://youtube.com/@monjoloalimentos5026">
                                <div>
                                    <img src={yt} alt="" />
                                </div>
                                {/* <div>
                                    <p>YouTube</p>
                                </div> */}
                            </a>
                        </div>
                    </div>

                </div>
                <div className="logoFooter">
                    <img src={logo} alt="" />
                </div>
                <div className="endereco">
                    <p>
                        <ul>
                            <li>
                                Endereço:
                                Rua Santa Rosa, 140 - A

                            </li>
                            <li>
                                Jardim AméricaItumbiara - GO, 75523290, BR

                            </li>
                            <li>
                                (64) 3431 - 4955
                            </li>
                            <li>

                                comercial@monjoloalimentos.com.br
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </footer>
    )
}