import Header from "./Header";
import Styles from "../styles/home.module.css";
import Ps4 from "../imgs/ps4.png";
import AppStore from "../imgs/appstore.png";
import GooglePlay from "../imgs/googleplay.png";
import Windows from "../imgs/windows.png";
import Video from "../media/MonkeyVideo.mp4";
import Footer from "../routes/Footer"
function Home(){
    return (
        <div>
            <Header/>
            <section>
                <div className={Styles.video}>
                    <div className={Styles.videoBox}>
                        <video src={Video} muted="muted" autoPlay loop/>
                    </div>
                </div>
                <div className={Styles.open}>
                    <h2 className={Styles.homeH2}>PS4 / 모바일 / PC 그랜드 오픈</h2>
                    <div className={Styles.LinkBox}>
                        <a href="#"><img src={Ps4}/></a>
                        <a href="#"><img src={AppStore}/></a>
                        <a href="#"><img src={GooglePlay}/></a>
                        <a href="#"><img src={Windows}/></a>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Home;