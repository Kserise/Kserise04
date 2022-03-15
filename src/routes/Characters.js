import { useState, useEffect } from "react";
import Header from "../routes/Header";
import Styles from "../styles/characters.module.css";
import Footer from "../routes/Footer";
import Bg from "../imgs/oceanBg.jpg";
import Monkey from "../imgs/monkey.png";
import Ribbon from "../imgs/ribbon.png";
import Munzy from "../imgs/munzy.png";
import Dragdragon from "../imgs/dragDragon.png";
import Edge from "../imgs/edge.png";
import IceKing from "../imgs/iceKing.png";
import ThumbNail from "./ThumbNail";
import MonkeyThumbNail from "../imgs/monkeyThumb.png";
import RibbonThumbNail from "../imgs/ribbonThumb.png";
import MunzyThumbNail from "../imgs/munzyThumb.png";
import DragdragonThumbNail from "../imgs/dragDragonThumb.png";
import EdgeThumbNail from "../imgs/edgeThumb.png";
import IceKingThumbNail from "../imgs/iceKingThumb.png";
function Characters(){
    const [index, setIndex] = useState(0);
    const [switCh, setSwicth] = useState(true);
    useEffect(()=>{
        setIndex({
            img:Monkey,
            name:"원숭이의 신",
            cv:"CV : 김영민",
            text:"원숭이 또는 잔나비는 영장류에 속하는 동물의 총칭이다. 원숭이하목은 크게 신세계원숭이 구세계원숭이, 유인원으로 나뉜다. 신세계원숭이는 광비원소목을 이루지만, 구세계원숭이는 협비원소목의 한 상과에 그친다. 생김새만으로는 구세계원숭이는 신세계원숭이와 비슷하지만, 분류학상으로는 유인원과 훨씬 더 근연 관계에 있다.",
            script:"받아드릴 수 밖에 없는 것.."
        })
    }, [])

    const thumbNailHandler = (index) => {
        let content = {};
        setSwicth(!switCh);
        if(index === 0){
            content = {
                img:Monkey,
                name:"원숭이의 신",
                cv:"CV : 김영민",
                text:"원숭이 또는 잔나비는 영장류에 속하는 동물의 총칭이다. 원숭이하목은 크게 신세계원숭이 구세계원숭이, 유인원으로 나뉜다. 신세계원숭이는 광비원소목을 이루지만, 구세계원숭이는 협비원소목의 한 상과에 그친다. 생김새만으로는 구세계원숭이는 신세계원숭이와 비슷하지만, 분류학상으로는 유인원과 훨씬 더 근연 관계에 있다.",
                script:"받아드릴 수 밖에 없는 것.."
            }
        }else if(index === 1){
            content = {
                img:Ribbon,
                name:"리본 걸",
                cv:"CV : 김ㅇㅇ",
                text:"리본(ribbon)이라는 낱말은 중세 영어 ribban 또는 riban에서 비롯된 것이며, 이는 고대 프랑스어 ruban에서 비롯되었고 이는 독일어 기원으로 추정된다. 리본(ribbon, 문화어: 댕기, 꽃댕기)은 부드러운 재질로 만들어진 얇은 띠이다.",
                script:"잔업은 질색이야."
            }
        }else if(index === 2){
            content = {
                img:Munzy,
                name:"먼지",
                cv:"CV : 김ㅇ민",
                text:"강인한 생명력, 넘치는 에너지, 고양잇과 동물 중에서 가장 장수할 것 같은 고양이 순위 1위에 랭크되었으며, 예상 수명은 무려 100살이 족히 넘는다고 한다. 복실복실한 털로 모든 공격을 흡수하는 특징이 있으니 먼지를 상대로 아까운 총알을 낭비하지 말 것.",
                script:"그들은 내 가족이야..!"
            }
        }else if(index === 3){
            content = {
                img:Edge,
                name:"미츠루기 레이지",
                cv:"CV : ㅇ영민",
                text:"미츠루기 레이지[5]란 이름은「단칼에 베일 것만 같은 긴박감」이라는 뜻이 담긴 이름이다. 미츠루기(御剣)[6]에는「검(剣[7], 츠루기)」이 들어 있는데 게다가 원래부터 검사(検事)는 흔히발음과 자형이 유사하며 이미지가 통하는[8] 검(劍/剣)에 비유해 왔으니[9] 검사 캐릭터에 적절한 성이라 할 수 있겠다.",
                script:"앞으로 나아갈꺼야."
            }
        }else if(index === 4){
            content = {
                img:Dragdragon,
                name:"드래그 드래곤",
                cv:"CV : 김영ㅇ",
                text:"다른 모바일 프로세서와는 다르게 스냅드래곤 SoC는 무선 통신 모듈을 내장하고 있다. 스냅드래곤 S4 이후의 프로세서는 모델에 따라서 칩셋 내부에 Wi-Fi, GPS/GLONASS, 블루투스 기저대역을 포함하고 있다. 외부 칩셋에 비해서 CPU의 발전된 제조 공정을 따라가기 때문에 전력 소모면에서 더 유리하다.",
                script:"모두 그분의 뜻대로..."
            }
        }else if(index === 5){
            content = {
                img:IceKing,
                name:"얼음 대왕",
                cv:"CV : ㅇ영ㅇ",
                text:"나이는 1043살이다.[50][51] 자신과 결혼을 시킬 목적으로 우에 사는 공주들을 자주 납치하며, 특히 버블검 공주가 주요 납치 대상이다.[13] 마법 왕관을 쓰면 눈을 자유자재로 다룰 수 있는 마법 능력을 쓸 수 있다.[52] 많은 이들이 완전히 미쳤다고 생각하지만 실제로는 외로움을 많이 타고, 오해를 받은 부분도 있다.",
                script:"널 막는것, 단지 그 것 뿐이다.."
            }
        }

        setIndex(content);
    }
    return (
        <div>
            <Header/>
            <div className={`${Styles.charWrap} ${switCh ? Styles.active : null}`}>
                <div className={Styles.bgBox}>
                    <img src={Bg}/>
                </div>
                <div className={Styles.skew}>

                </div>
                <div className={Styles.charInfo}>
                    <h2>{index.name}</h2>
                    <div className={Styles.nameBox}>
                        <h3>{index.cv}</h3>
                        <span>ㅇ</span>
                    </div>
                    <p className={Styles.textBox}>
                        {index.text}
                    </p>
                </div>
                <p className={Styles.charScript}>「{index.script}」</p>
                <img src={index.img}/>
                <div className={Styles.thumbNailBox}>
                    <ThumbNail img={MonkeyThumbNail} name="원신" onClick={() => thumbNailHandler(0)}/>
                    <ThumbNail img={RibbonThumbNail} name="리본" onClick={() => thumbNailHandler(1)}/>
                    <ThumbNail img={MunzyThumbNail} name="먼지" onClick={() => thumbNailHandler(2)}/>
                    <ThumbNail img={EdgeThumbNail} name="미츠루기" onClick={() => thumbNailHandler(3)}/>
                    <ThumbNail img={DragdragonThumbNail} name="드래곤" onClick={() => thumbNailHandler(4)}/>
                    <ThumbNail img={IceKingThumbNail} name="얼음대왕" onClick={() => thumbNailHandler(5)}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Characters;