import logo from "../Components/images/logo.png"
import desc from "../Components/images/desconto.png"
import styles from "../Components/css/Header.module.css"
import cart from "../Components/images/cart.png"
import pessoa from "../Components/images/pessoa.png"

function Header(){
    return(
        <div>
        <header>
            <img src={logo} alt="logo" className={styles.logo} />
            <div className={styles.Busca}>
                <input type="text" id={styles.txtBusca} placeholder="O que você procura?"/>
            </div>

            <div className={styles.Descon}>
                <p>-5% NA PRIMEIRA COMPRA</p>
                <img src={desc} alt="desconto" />
            </div>

            <div className={styles.icons}>
                <img src={pessoa} alt="pessoa" />
                <img src={cart} alt="carrinho" />
            </div>
        </header>

        <hr />
        </div>
    )
}

export default Header