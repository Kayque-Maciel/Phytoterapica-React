import styles from "../Components/css/Produtos.module.css"
import filtro from "../Components/images/filtro.png"
import ordenar

function Produtos(){
    return(
        <div>
           <div className={styles.Filtro}>
                <p>FILTRAR</p>
                <img src={filtro} alt="" />
           </div>
           
           <div className={styles.Filtro}>
                <p>ORDENAR POR</p>
                <img src={filtro} alt="" />
           </div>
        </div>

    )
}

export default Produtos