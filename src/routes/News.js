import Header from "./Header";
import Styles from "../styles/News.module.css";
import NewsBox from "./NewsBox";
import News01 from "../imgs/news01.png";
import News02 from "../imgs/news02.png";
import News03 from "../imgs/news03.png";
import News04 from "../imgs/news04.png";
import News05 from "../imgs/news05.png";
import News06 from "../imgs/news06.png";
import News07 from "../imgs/news07.png";
import News08 from "../imgs/news08.png";
import SecondNewsBox from "./SecondNewsBox";
import Footer from "./Footer";
function News(){
    return (
        <div className={Styles.news}>
            <Header/>
            <div className={Styles.filter}></div>
            <div className={Styles.firstSection}>
                <div className={Styles.topArticle}>
                    <NewsBox img={News01} title="치일까? 부술까?" text="택시 보스와 부딪히기전 먼저 보스를 격파하세요." date="2022년3월15일"/>
                    <NewsBox img={News02} title="보스가 둘?? 셋?? " text="5스테이지 격파 이후에는 기존 보스들이 일반 몬스터로 소환됩니다." date="2022년3월14일"/>
                    <NewsBox img={News03} title="미츠루기의 얼굴이 변했다???" text="미츠루기는 HP가 절반 이하로 떨어지면 레이지모드가 되어 공격속도가 빨라집니다." date="2022년3월12일"/>
                </div>
            </div>
            <div className={Styles.secondSection}>
                <div className={Styles.bottomArticle}>
                    <SecondNewsBox img={News04} title="얼음대왕의 소환술" text="얼음대왕은 자신의 심복인 펭귄과 얼음똥을 소환합니다." date="2022년3월9일"/>
                    <SecondNewsBox img={News05} title="커비와 바나나" text="커비는 바나나와 같이 공중에 소환됩니다. 바나나를 먹기 위해 커비를 맞춰 떨어뜨리세요." date="2022년3월8일"/>
                    <SecondNewsBox img={News06} title="까다로운 얼음똥" text="얼음대왕과의 전투에서 얼음똥은 무척 성가십니다. 빠르게 밟아서 없애거나 총알로 없애야합니다." date="2022년3월6일"/>
                    <SecondNewsBox img={News07} title="적이야 아군이야?" text="줄넘기 원숭이는 아군처럼 보이지만 적입니다. 바나나를 줘서 회유하거나 몸을 숙여 회피하세요." date="2022년3월1일"/>
                    <SecondNewsBox img={News08} title="떨어지는 운석을 조심해!" text="드래곤의 소환술로 나타나는 박쥐는 플레이어 근처에 다가가면 유성처럼 떨어집니다." date="2022년2월28일"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default News;