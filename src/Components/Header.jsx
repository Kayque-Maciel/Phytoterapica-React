import logo from "../Components/images/logo.png"
import lupa from "../Components/images/lupa.png"
import styles from "../Components/Header.module.css"

function Header(){
    return(
        <div>
        <header>
            <img src={logo} alt="logo" className={styles.logo} />
            <div className={styles.Busca}>
                <img src={lupa} alt="lupa" />
                <input type="text" id={styles.txtBusca} placeholder="O que você procura?"/>
            </div>
        </header>

        <hr />
        </div>
    )
}

export default Header