import Styles from "../styles/newsBox.module.css";
function NewsBox({img, title, text, date}){
    return (
        <div className={Styles.newsBox}>
            <div className={Styles.imgBox}>
                <img src={img}/>
            </div>
            <div className={Styles.textBox}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className={Styles.date}>
                <p>{date}</p>
                <p>소식</p>
            </div>
        </div>
    )
}

export default NewsBox;