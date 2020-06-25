import React from "react";
import Prev from "../components/atoms/prev";
import "./datePicker.css";
import Next from "../components/atoms/next";
import DateBlock from "../components/atoms/dateBlock";

const DatePicker = ({date, changeDate}) => {

    return (
        <div className={"date_area"}>
            <table className={"date_table"}>
                <tr>
                    <td>
                        <Prev date={date} changeDate={changeDate}/>
                    </td>
                    <td className={"date_block"}>
                        <DateBlock date={date}/>
                    </td>
                    <td>
                        <Next date={date} changeDate={changeDate}/>
                    </td>
                </tr>
            </table>
        </div>
    )
};

export default DatePicker;