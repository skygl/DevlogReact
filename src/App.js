import React, {useState} from 'react';
import Header from "./templates/header";
import Banner from "./templates/banner";
import './App.css';
import './styles/css/fonts.css';
import DatePicker from "./templates/datePicker";
import Cards from "./templates/cards";

function App() {
    const originalCards = [
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
        },
        {
            id: 8,
            title: "EKS K8s에서 ELB(ALB, NLB) 제대로 사용하기",
            tagNames: ["aws", "eks", "elb", "kubernetes"],
            imageUrl: "https://images.velog.io/images/ausg/post/2eae9cea-1f1c-4d29-9cd4-a42450bc5a3f/preview.png"
        },
        {
            id: 9,
            title: "2020 프론트엔드 개발자 로드맵",
            tagNames: ["개발 관련 자료", "프론트엔"],
            imageUrl: "https://images.velog.io/images/exploit017/post/a9984786-a33c-4e9c-a2a6-7d38705e52a0/frontend.png"
        },
        {
            id: 10,
            title: "📃 프론트엔드 인터뷰 문제 답해보기 #1 성능 개선",
            tagNames: [],
            imageUrl: "https://images.velog.io/images/jakeseo_me/post/f307ca7d-c5da-412c-bc75-4c14ca69f8e7/speed.png"
        },
        {
            id: 11,
            title: "로그인은 어떻게 이루어질까❓(Cookie, Session)",
            tagNames: ["Stateless", "cookie", "session", "로그인"],
            imageUrl: "https://images.velog.io/images/junhok82/post/130546c0-33dd-4957-b47e-35a527a9b947/Login.gif"
        },
        {
            id: 12,
            title: "🎓 학교에서 알려주지 않는 C언어",
            tagNames: ["OOC", "객체지향 C언어", "순수 C언어"],
            imageUrl: "https://images.velog.io/images/gomjellie/post/ed949d50-2b32-4599-8f7f-d2dcfd44f50c/omg.gif"
        },
        {
            id: 13,
            title: "나는 왜 개발을 시작했을까",
            tagNames: [],
            imageUrl: "https://images.velog.io/images/offdutybyblo/post/7ebc19a2-862b-4c2a-8bbc-890be9935cfd/jefferson-santos-V9sv7QrDUgc-unsplash.jpg"
        },
        {
            id: 14,
            title: "JPA는 도대체 뭘까? (orm, 영속성, hibernate, spring-data-jpa)",
            tagNames: ["Hibernate", "JDBC", "JPA", "ORM", "Spring data", "spring-data-jpa", "영속성"],
            imageUrl: "https://images.velog.io/images/adam2/post/099e1c78-ad02-4c38-981e-cee526f50cf5/Untitled.png"
        },
        {
            id: 15,
            title: "곧, 퇴사합니다 🥳",
            tagNames: ["수기", "이직", "퇴사"],
            imageUrl: "https://images.velog.io/images/bluestragglr/post/0ee9993b-59f0-4b1b-87fb-7f42853b4246/스크린샷 2020-06-23 오전 9.56.16.png"
        },
        {
            id: 16,
            title: "구직활동 회고",
            tagNames: ["WeCode", "개발자", "구직활동", "위코드", "회고"]
        },
        {
            id: 17,
            title: "🏭 '웹 크롤러' 좀 그만 만들어라 ",
            tagNames: ["웹 크롤러", "크롤러", "크롤링"],
            imageUrl: "https://images.velog.io/images/mowinckel/post/d84af5cc-93b1-46f2-9e4b-75463eed3712/7BSM.gif"
        },
        {
            id: 18,
            title: "부스트캠프부터 네이버 인턴까지 ",
            tagNames: ["네이버", "부스트캠프", "인턴", "회고", "후기"],
            imageUrl: "https://images.velog.io/images/jdd04026/post/06313025-fde9-45ac-be1b-3700dc31e939/스크린샷 2020-05-12 오후 9.21.15.png"
        },
        {
            id: 19,
            title: "🏷 누가 이름을 함부로 짓는가?",
            tagNames: [],
            imageUrl: "https://images.velog.io/images/mowinckel/post/004a8a30-13df-4b8c-843c-496c65d4f840/tenor.gif"
        },
        {
            id: 20,
            title: "들어는 보았나 Transparent Wrapper Component",
            tagNames: ["Secret Pattern", "component", "frontend", "vue"],
            imageUrl: "https://images.velog.io/images/smilejayden/post/9a82255f-1b20-4b3d-8af1-26a86dbd2938/vuejs.png"
        }
    ];

    const [cards, setCards] = useState([
        ...originalCards
    ]);

    const [page, setPage] = useState(0);
    const offset = cards.length;

    const loadNewCards = () => {
        console.log("Load New Cards After 1.5s");
        setTimeout(() => {
            setPage(page + 1);
            const newCards = [...cards];
            originalCards.forEach(card => {
                let {title, tagNames, imageUrl} = {...card};
                newCards.push({
                    id: page * offset + 1 + newCards.length,
                    title, tagNames, imageUrl
                });
            });
            setCards(newCards);
        }, 1500);
    };

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
                    <Cards cards={cards} onLoadCards={loadNewCards} page={page}/>
                </div>
            </div>
        </div>
    );
}

export default App;
