import React, {useState} from "react";
import Prev from "../components/atoms/prev";
import "./datePicker.css";
import Next from "../components/atoms/next";
import DateBlock from "../components/atoms/dateBlock";
import Calendar from "../components/atoms/calendar";

const DatePicker = ({date, changeDate}) => {
    const [active, setActive] = useState(false);

    const changePrevDate = () => {
        let currentDate = new Date(date.year, date.month - 1, date.day);
        currentDate.setDate(currentDate.getDate() - 1);
        changeDate({
            year: currentDate.getFullYear(),
            month: currentDate.getMonth() + 1,
            day: currentDate.getDate()
        })
    };

    const changeNextDate = () => {
        let currentDate = new Date(date.year, date.month - 1, date.day);
        currentDate.setDate(currentDate.getDate() + 1);
        changeDate({
            year: currentDate.getFullYear(),
            month: currentDate.getMonth() + 1,
            day: currentDate.getDate()
        })
    };

    const toggleActive = () => {
        console.log('click');
        const newActive = !active;
        setActive(newActive);
    };

    return (
        <>
            <div className={"date_area"}>
                <table className={"date_table"}>
                    <tbody>
                    <tr>
                        <td>
                            <Prev date={date} changeDate={changePrevDate}/>
                        </td>
                        <td className={"date_block"}>
                            <DateBlock date={date} toggleActive={toggleActive}/>
                        </td>
                        <td>
                            <Next date={date} changeDate={changeNextDate}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                { active && <Calendar date={date} changeDate={changeDate}/>}
            </div>
        </>
    )
};

export default DatePicker;