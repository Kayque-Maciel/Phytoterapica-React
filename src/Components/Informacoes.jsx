import styles from "../Components/css/Informacoes.module.css"
import folha from "../Components/images/folha.png"
import pata from "../Components/images/pata.png"
import gota from "../Components/images/gota.png"

function Informacoes(){
    return(
        <>
            <section className={styles.Info}>
                <div className={styles.Folha}>
                    <img src={folha} alt="folha" />
                    <div className={styles.FolhaInfo}>
                        <h3>Vegano</h3>
                        <p>sem componentes de origem animal</p>
                    </div>
                </div>

                <hr />

                <div className={styles.Folha}>
                    <img src={pata} alt="pata" />
                    <div className={styles.FolhaInfo}>
                        <h3>Cruelty-Free</h3>
                        <p>não testado em animais</p>
                    </div>
                </div>

                <hr />

                <div className={styles.Folha}>
                    <img src={gota} alt="gota" />
                    <div className={styles.FolhaInfo}>
                        <h3>100% Puro</h3>
                        <p>óleos puros e naturais</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Informacoes