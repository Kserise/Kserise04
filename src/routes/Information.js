import Header from "../routes/Header";
import Footer from "../routes/Footer";
import InfoBox from "../routes/InfoBox";
import Infor01 from "../imgs/infor01.jpg";
import Infor02 from "../imgs/infor02.jpg";
import Infor03 from "../imgs/infor03.jpg";
import Infor04 from "../imgs/infor04.jpg";
import InfoBg from "../imgs/rapidStarBg.jpg";
import Styles from "../styles/information.module.css";
function Information(){
    return (
        <div className={Styles.infoBg}>
            <Header/>
                <img src={InfoBg}/>
                <h1>게임 특징</h1>
                <div className={Styles.infoWrap}>
                    <InfoBox img={Infor01} title="신비함이 가득한 환상적인 모험" text="몰입감 넘치는 싱글 모드 게임을 즐겨보세요! 원숭이의 신이 되어, 바나나를 찾는 여행이 시작됩니다."/>
                    <InfoBox img={Infor02} title="당신이 발견하는 새로운 세계" text="전설속의 드래곤들 조우하거나, 얼음왕국의 얼음대왕을 만나거나, 얼음벽을 오르세요! 경이로움과 신비함이 가득한 세상 속 숨겨진 비밀을 발견하세요."/>
                    <InfoBox img={Infor03} title="혼자 탐험하거나 함께 전투하거나" text="직접 전투에 나서거나, 친구들을 초대해 PS4, PC, iOS, Android 크로스플레이를 통해 몬스터들과의 전투에 참여하세요"/>
                    <InfoBox img={Infor04} title="다섯 보스의 마스터" text="그저 때리기만 하는 것이 아닙니다! 보스의 힘을 활용하여 강력한 적을 물리치고, 보스의 기믹을 푸는 열쇠를 찾아야 합니다."/>
                </div>
            <Footer/>
        </div>
    )
}

export default Information;