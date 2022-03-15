import Styles from "../styles/thumbNail.module.css";

function ThumbNail({img, name, onClick}){
    return (
        <div className={Styles.thumbNail} onClick={onClick}>
            <div className={Styles.thumbNailImg}>
                <img src={img}/>
            </div>
            <p>{name}</p>
        </div>
    )
}

export default ThumbNail;