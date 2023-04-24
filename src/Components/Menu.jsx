import styles from "../Components/css/Menu.module.css"

function Menu(){
    return(
        <>
            <nav className={styles.Listas}>
                <br />
                <ul>
                    <li>ÓLEOS ESSENCIAIS</li>
                    <li>ÓLEOS VEGETAIS</li>
                    <li>SINERGIAS</li>
                    <li>COSMÉTICOS NATURAIS</li>
                    <li>HIGIENE PESSOAL</li>
                    <li>AROMATIZANTES</li>
                    <li>SUPLEMENTOS</li>
                    <li>ACESSÓRIOS</li>
                    <li>OFERTAS</li>
                    <li>CONSULTOR(A)</li>
                </ul>

                <br />
                <hr />
            </nav>
        </>
        

        
    )
}

export default Menu