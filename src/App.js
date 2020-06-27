import React, {useState} from 'react';
import Header from "./templates/header";
import Banner from "./templates/banner";
import './styles/css/App.css';
import './styles/css/fonts.css';
import DatePicker from "./templates/datePicker";
import Cards from "./templates/cards";
import moment from "moment";
import dummy from './dummy';

function App() {
    const originalCards = dummy.cards;

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

    const [year, month, day] = moment().format("YYYY-MM-DD").split("-");
    const [date, setDate] = useState({year, month, day});

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
