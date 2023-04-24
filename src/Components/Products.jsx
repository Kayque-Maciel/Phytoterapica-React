import styles from "../Components/css/Products.module.css"

function Products(props){
    return(
        <>
        <section className={styles.ProdGeral}>
            <div className={styles.InfoProd}>
                <img src={props.foto} alt="foto" />
                <h2>Oléo essencial de{props.titulo}</h2>
                <h3>{props.preco}</h3>
                <p>(Ou em até 3x de{props.parcela})</p>
            </div>
        </section>
            
        </>
    )
}

export default Products