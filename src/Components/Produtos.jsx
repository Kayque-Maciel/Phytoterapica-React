import styles from "../Components/css/Produtos.module.css"
import filtro from "../Components/images/filtro.png"
import ordenar from "../Components/images/ordenar.png"

function Produtos(){
    return(
        <>
            <section className={styles.Cards}>
                <div className={styles.Card1}>
                    <p>FILTRAR</p>
                    <img src={filtro} alt="" />
                </div>
            
                <div className={styles.Card2}>
                    <p>ORDENAR POR</p>
                    <img src={ordenar} alt="" />
                </div>
            </section>
        </>
        

    )
}

export default Produtos