import styles from "../Components/css/Produtos.module.css"
import filtro from "../Components/images/filtro.png"

function Produtos(){
    return(
        <div>
           <div className={styles.Filtro}>
                <p>FILTRAR</p>
                <img src={filtro} alt="" />
           </div>
        </div>

    )
}

export default Produtos