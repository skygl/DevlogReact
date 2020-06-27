import React, {useState} from "react";
import Prev from "../components/atoms/prev";
import "../styles/css/datePicker.css";
import Next from "../components/atoms/next";
import DateBlock from "../components/atoms/dateBlock";
import Calendar from "../components/atoms/calendar";
import moment from "moment";

const DatePicker = ({date, changeDate}) => {
    const [active, setActive] = useState(false);

    const changePrevDate = () => {
        const [year, month, day] = moment([date.year, date.month, date.day].join("-"))
            .subtract(1, 'days')
            .format("YYYY-MM-DD")
            .split("-");
        changeDate({year, month, day})
    };

    const changeNextDate = () => {
        const [year, month, day] = moment([date.year, date.month, date.day].join("-"))
            .add(1, 'days')
            .format("YYYY-MM-DD")
            .split("-");
        changeDate({year, month, day})
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
                {active && <Calendar date={date} changeDate={changeDate}/>}
            </div>
        </>
    )
};

export default DatePicker;