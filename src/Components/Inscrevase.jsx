import styles from "../Components/css/Inscrevase.module.css"

function Inscrevase(){
    return(
        <>
            <section className={styles.Inscreva}>
                <div className={styles.Texto}>
                    <h2>INSCREVA-SE</h2>
                    <p>E RECEBA NOVIDADES E PROMOÇÕES</p>
                </div>
                

                <input type="text" placeholder="Seu e-mail" id={styles.Txtemail}/>

                <input type="button" value="ASSINAR NEWSLETTER" id={styles.InsBtn}/>
            </section>
        </>
    )
}

export default Inscrevase