import { Link } from "react-router-dom"
import Logo from "../imgs/logo.png"
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
                        <a href="#">상점</a>
                    </li>
                </ul>
            </nav>
            <div className={Styles.gameStart}>
                <h3><a href="https://kserise.github.io/game/">게임스타트</a></h3>
            </div>
        </div>
    )
}

export default Header;