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
                        <Link to="/">홈</Link>
                        <Link to="/news">소식</Link>
                        <Link to="/char">캐릭터</Link>
                        <Link to="/info">정보</Link>
                        <Link to="/board">커뮤니티</Link>
                    </li>
                </ul>
            </nav>
            <div className={Styles.gameStart}>
                <a href="https://kserise.github.io/game/">게임 시작</a>
            </div>
        </div>
    )
}

export default Header;