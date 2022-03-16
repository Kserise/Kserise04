import { Link } from "react-router-dom"
import Logo from "../imgs/mainLogo.png"
import Styles from "../styles/header.module.css";


function Header(){
    return (
        <div className={Styles.header}>
            <img src={Logo}/>
            <nav>
                <ul>
                    <li>
                        <Link to={process.env.PUBLIC_URL + "/"}>홈</Link>
                        <Link to={process.env.PUBLIC_URL + "/news"}>소식</Link>
                        <Link to={process.env.PUBLIC_URL + "/char"}>캐릭터</Link>
                        <Link to={process.env.PUBLIC_URL + "/info"}>정보</Link>
                        <Link to={process.env.PUBLIC_URL + "/board"}>커뮤니티</Link>
                    </li>
                </ul>
            </nav>
            <div className={Styles.gameStart}>
                <a href="https://kserise.github.io/game/" target='_blank'>게임 시작</a>
            </div>
        </div>
    )
}

export default Header;