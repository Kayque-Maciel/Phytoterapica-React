import styles from "../Components/css/Footer.module.css"
import master from "../Components/images/mastercard.png"
import visa from "../Components/images/visa.png"
import american from "../Components/images/american-express.png"
import elo from "../Components/images/elo.png"
import hipercard from "../Components/images/hipercard.png"
import pix from "../Components/images/pix.png"
import logo from "../Components/images/logo.png"
import instagram from "../Components/images/instagram.png"
import facebook from "../Components/images/facebook.png"
import blog from "../Components/images/blog.png"
import youtube from "../Components/images/youtube.png"
import twitter from "../Components/images/twitter.png"
import vtex from "../Components/images/vtex.png"
import safe from "../Components/images/safe.webp"
import reciclo from "../Components/images/reciclo.png"
import selo from "../Components/images/selo.webp"


function Footer(){
    return(
        <>
            <footer>
                <hr />
                <div className={styles.InfoFooter}>

                    <div className={styles.Links}>
                        <ul>
                            <li><h3>Sobre</h3></li>
                            <li>Quem Somos (A Empresa)</li>
                            <li>Nossos Contatos</li>
                            <li>Trabalhe Conosco</li>
                            <li>Fale Conosco (SAC)</li>
                            <li>Consultora</li>
                            <li>Atacado</li>
                        </ul>
                    </div>
                    <div className={styles.Links}>
                        <ul>
                            <li><h3>Suporte</h3></li>
                            <li>Política de Entrega</li>
                            <li>Política de Troca e Devolução</li>
                            <li>Ingestão de Óleos Essenciais</li>
                            <li>Cromatografia</li>
                            <li>Encarregado de Dados - JKD ME</li>
                            <li>privacidade@phytoterapica.com.br</li>
                        </ul>
                    </div>
                    <div className={styles.Links}>
                        <ul>
                            <li><h3>Área do Cliente</h3></li>
                            <li>Login</li>
                            <li>Carrinho</li>
                            <li>Minha Conta</li>
                            <li>Meus Pedidos</li>
                            <li>Preferências de Cookies</li>
                        </ul>
                    </div>
                    <div className={styles.pagamentos}>
                        <h3>Formas de Pagamento</h3>
                        <div className={styles.imagens}>
                            <img src={master} alt="mastercard" />
                            <img src={visa} alt="visa" />
                            <img src={american} alt="american express" />
                            <img src={elo} alt="elo" />
                            <img src={hipercard} alt="hipercard" />
                            <img src={pix} alt="pix" />
                        </div>
                    </div>
                    
                    <div className={styles.LogoFooter}>
                        <img src={logo} alt="" />
                        <hr />
                        <div className={styles.Redes}>
                            <img src={instagram} alt="instagram" />
                            <img src={facebook} alt="facebook" />
                            <img src={blog} alt="blog" />
                            <img src={youtube} alt="youtube" />
                            <img src={twitter} alt="twitter" />
                            
                        </div>
                        <div className={styles.segurança}>
                            <hr />
                            <img src={vtex} alt="logo de segurança" />
                            <img src={safe} alt="logo de segurança" />
                            <img src={reciclo} alt="logo de segurança" />
                            <img src={selo} alt="logo de segurança" />
                        </div>
                    </div>
                </div>
                <hr />

                <div className={styles.copyright}>
                    <p>KAYQUE_MACIEL© 2023</p>
                </div>
            </footer>
        </>
    )
}

export default Footer