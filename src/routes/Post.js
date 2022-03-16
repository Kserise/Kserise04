import Styles from "../styles/post.module.css";

function Post({id, date, content, imgSwitch, img}){
    return (
        <div className={Styles.boardBox}>
            <div className={Styles.boardName}>
                <span>{id}</span>
                <span>{date}</span>
            </div>
            <div className={Styles.boardContent}>
                {imgSwitch ? <img src={img}/> : null}
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Post;