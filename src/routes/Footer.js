import Styles from "../styles/footer.module.css";
import Age from "../imgs/15age.png";
import Logo from "../imgs/logo.png"
function Footer(){
    return (
        <div className={Styles.footer}>
            <div className={Styles.snsBtnBox}>
                <div className={Styles.snsBtn}>
                    <a href="#">ㅇ</a>
                    <a href="#">ㅇ</a>
                    <a href="#">ㅇ</a>
                    <a href="#">ㅇ</a>
                    <a href="#">ㅇ</a>
                    <a href="#">ㅇ</a>
                    <a href="#">ㅇ</a>
                    <a href="#">ㅇ</a>
                </div>
            </div>
            <div className={Styles.footerBoxWrap}>
                <div className={Styles.footerBox}>
                    <img src={Logo}/>
                    <ul>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">개인정보 수집 및 이용약관</a></li>
                        <li><a href="#">고객센터</a></li>
                    </ul>
                    <div className={Styles.footerInfo}>
                        <img src={Age}/>
                    </div>
                    <p className={Styles.FtInfo}>
                        "PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.
                        Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their respective owners.
                    </p>
                    <p>Copyright © COGNOSPHERE. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;