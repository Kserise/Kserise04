import Header from "../routes/Header";
import Footer from "../routes/Footer";
import Post from "../routes/Post";
import Styles from "../styles/board.module.css";
import { useState, useEffect } from "react";

function Board(){
    const boardList = [
        {
            id:"빛바랜자",
            date:Date.now(),
            content:"오 오랜만에 포트폴리오 만들어봤는데 어떰? 괜찮냐?",
            imgSwitch:false,
            img:null
        },
        {
            id:"먼지",
            date:Date.now(),
            content:"총알 너무 맛있고 ㅋㅋㅋㅋㅋㅋㅋ",
            imgSwitch:false,
            img:null
        },
        {
            id:"란둘기",
            date:Date.now(),
            content:"쟤가 거위 목썰고 도망가는거 봤어요 진짜!! (도도새임)",
            imgSwitch:false,
            img:null
        },
        {
            id:"정동석",
            date:Date.now(),
            content:"다들 오랜만이네, 잘 지냈니?",
            imgSwitch:false,
            img:null
        },
        {
            id:"운영자",
            date:Date.now(),
            content:"친목금지! 친목금지!! 서로 닉언급하면서 자기들만 아는 대화 하지 마세요 ㅡㅡ",
            imgSwitch:false,
            img:null
        },
        {
            id:"정준성",
            date:Date.now(),
            content:"털털털털...(핫팩 흔드는 소리)",
            imgSwitch:false,
            img:null
        },
        {
            id:"송란이",
            date:Date.now(),
            content:"자는 중....수업 시작하면 깨워..줘...",
            imgSwitch:false,
            img:null
        },
        {
            id:"김영민",
            date:Date.now(),
            content:"안녕...?",
            imgSwitch:false,
            img:null
        },
        {
            id:"장인석",
            date:Date.now(),
            content:"포지션 앱솔루트를 사용하면 위로 뜬 상태가 된 단 말이죠.. 그러면 아래있는 구조들이 틈 사이로 들어오기 때문에...",
            imgSwitch:false,
            img:null
        },
        {
            id:"ㅇㅇ",
            date:Date.now(),
            content:"겜 ㅈ같이 만들었네 왤캐 어려움??",
            imgSwitch:false,
            img:null
        },
        {
            id:"ㅇㅇ",
            date:Date.now(),
            content:"이 겜 어렵다는 사람은 걍 자기 손을 탓하면 될 듯 ㅇㅇ",
            imgSwitch:false,
            img:null
        }
    ]
    const [post, setPost] = useState([]);
    const [write, setWrite] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPost = () => {
        const randomPost = Math.floor(Math.random()*boardList.length);
        const add = boardList[randomPost];
        addPost(add);
    }

    const addPost = (add) => {
        const copyPost = post.concat(add);
        const sortCopyPost = copyPost.sort(function(a, b){ // sort 함수를 이용해 date 순으로 정렬을 한 후 reverse()를 이용해 역순으로 정렬한다...!
            return a.date - b.date;
        });
        sortCopyPost.reverse();
        setPost(sortCopyPost);
    }

    const writePost = (add) => {
        const copyPost = write.concat(add);
        const sortCopyPost = copyPost.sort(function(a, b){ // sort 함수를 이용해 date 순으로 정렬을 한 후 reverse()를 이용해 역순으로 정렬한다...!
            return a.date - b.date;
        });
        sortCopyPost.reverse();
        setWrite(sortCopyPost);
        setLoading(false);
    }

    function formHandler(event){
        event.preventDefault();
        const id = event.target.id.value;
        event.target.id.value = "";
        const content = event.target.content.value;
        event.target.content.value = "";
        const add = {
            id : id,
            date : Date.now(),
            content : content,
            imgSwitch : false,
            img : null
        }
        writePost(add);
    }

    useEffect(() => { // setTimeout, setInterval은 항상 useEffect 내부에 써야한다 ㅆ이 쓰ㅏㅃ짝라 짜증나 ㅡㅡㅡㅜㅜㅜㅜ
        setTimeout(() => {
            if(post.length < 20) getPost();
        }, 4000)
    }, [post]);

    return (
        <div className={Styles.boardBg}>
            <Header/>
                <div className={Styles.boardWrap}>
                    <form className={Styles.formBox} onSubmit={formHandler}>
                        <input type="text" name="id" placeholder="닉네임" required/>
                        <input type="text" name="content" placeholder="내용을 입력해주세요." required/>
                        <input type="submit" value="등록"/>
                    </form>
                    {loading ? null : write.map((p) => ( <Post  key={p.date} id={`(작성한 게시물) ${p.id}`} date={p.date} content={p.content} imgSwitch={p.imgSwitch} img={p.img}/> ))}
                    {post.map((p) => (
                        <Post key={p.date} id={p.id} date={p.date} content={p.content} imgSwitch={p.imgSwitch} img={p.img}/>
                    ))}
                </div>
            <Footer/>
        </div>
    )
}

export default Board;