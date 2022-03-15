import Styles from "../styles/infoBox.module.css";

function InfoBox({title, text, img}){
    return (
        <div className={Styles.infoBox}>
            <div className={Styles.infoText}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className={Styles.infoImg}>
                <img src={img}/>
            </div>
        </div>
    )
}

export default InfoBox;