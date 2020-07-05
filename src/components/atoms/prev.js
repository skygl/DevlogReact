import React from "react";
import "../../styles/css/date.css";

const Prev = ({show, date, changeDate}) => {

    return (
        <div className={"prev_date"}>
            <button className={"date_btn"} onClick={changeDate}>
                {show && <img src={"/back.svg"} alt={"select previous day"} className={"date_move"}/>}
            </button>
        </div>
    )
};

export default Prev;