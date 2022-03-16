import Styles from "../styles/footer.module.css";
import Age from "../imgs/15age.png";
import Logo from "../imgs/mainLogo.png"
function Footer(){
    return (
        <div className={Styles.footer}>
            <div className={Styles.snsBtnBox}>
                <div className={Styles.snsBtn}>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ab enim pariatur error aspernatur! Sunt rerum possimus tenetur voluptatum corporis quo, sint autem deleniti totam pariatur ab labore est explicabo.
                    </p>
                    <p>Copyright © COGNOSPHERE. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;