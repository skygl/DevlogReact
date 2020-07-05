import React from "react";
import "../../styles/css/date.css";

const Next = ({show, date, changeDate}) => {

    return (
        <div className={"next_date"}>
            <button className={"date_btn"} onClick={changeDate}>
                {show && <img src={"/next.svg"} alt={"select next day"} className={"date_move"}/>}
            </button>
        </div>
    )
};

export default Next;