import React, {useState} from 'react';
import Header from "./templates/header";
import Banner from "./templates/banner";
import './App.css';
import './styles/css/fonts.css';
import DatePicker from "./templates/datePicker";
import Cards from "./templates/cards";

function App() {
    const cards = [
        {
            id: 1,
            title: "2020년 상반기. 양질의 기술 아티클 모음",
            tagNames: ["TIL", "기술아티클"],
            imageUrl: "https://images.velog.io/images/rkdrhksdn/post/707790ee-d9f2-4daa-a917-1a2ea2ef35c6/100.png"
        },
        {
            id: 2,
            title: "🧐 아무도 가르쳐 주지 않는 것",
            tagNames: [],
            imageUrl: "https://images.velog.io/images/mowinckel/post/59f984b3-3f08-4f37-9e8b-37e2fdc28d0f/giphy.gif"
        },
        {
            id: 3,
            title: "2020 백엔드 개발자 로드맵",
            tagNames: ["개발 관련 자료", "백엔드"],
            imageUrl: "https://images.velog.io/images/exploit017/post/19525e87-ea78-43e7-ae7f-178ec9f45541/image.png"
        },
        {
            id: 4,
            title: "인라이플배 한국어 AI 언어모델 튜닝대회 참가",
            tagNames: ["BERT", "NLP", "enliple AI Challenge", "language modeling"],
            imageUrl: "https://images.velog.io/images/rndeep/post/d19737b1-a568-4925-abf3-a4829f28a052/enliple_nlp_challenge.png"
        },
        {
            id: 5,
            title: "🙅🏻‍♀️ 니들은 else 같은거 쓰지마라",
            tagNames: ["early-return", "코딩 스타일"],
            imageUrl: "https://images.velog.io/images/gomjellie/post/e755aefd-89f3-4634-9ee0-6c16d3144bb1/else.jpeg"
        },
        {
            id: 6,
            title: "🎂 친구생일 기념 웹사이트 만들기",
            tagNames: [],
            imageUrl: "https://images.velog.io/images/2ujin/post/df8998b0-5228-4c0d-979a-1b001f3bd49c/0E94E9A6-40F3-45A2-8131-94CF8EE37BE5.PNG"
        },
        {
            id: 7,
            title: "✏️ 와디즈 SW 인턴후 넋두리++",
            tagNames: ["내 넋두리"],
            imageUrl: "https://images.velog.io/images/mowinckel/post/c767d8ed-7c23-4a17-95d7-ea4c413e06c9/R1280x0.jpeg"
        }
    ];

    const today = new Date();
    const [date, setDate] = useState({
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate()
    });

    const changeDate = ({year, month, day}) => {
        setDate({year, month, day});
    };

    return (
        <div className="App">
            <Header/>
            <Banner/>
            <div className={"content_area"}>
                <DatePicker date={date} changeDate={changeDate}/>
                <div className={"cards_area"}>
                    <Cards cards={cards}/>
                </div>
            </div>
        </div>
    );
}

export default App;
