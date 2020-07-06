import React, {useState} from "react";
import Prev from "../components/atoms/prev";
import Next from "../components/atoms/next";
import DateBlock from "../components/atoms/dateBlock";
import Calendar from "../components/atoms/calendar";
import moment from "moment";

const firstDate = moment("2020-07-05");

const DatePicker = ({date, changeDate}) => {
    const [active, setActive] = useState(false);

    const momentDate = moment([date.year, date.month, date.day].join("-"));

    const changePrevDate = () => {
        const [year, month, day] = moment(momentDate)
            .subtract(1, 'days')
            .format("YYYY-MM-DD")
            .split("-");
        changeDate({year, month, day})
    };

    const changeNextDate = () => {
        const [year, month, day] = moment(momentDate)
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
                            <Prev date={date} changeDate={changePrevDate}
                                  show={moment(momentDate).subtract(1, 'days').isSameOrAfter(firstDate)}/>
                        </td>
                        <td className={"date_block"}>
                            <DateBlock date={date} toggleActive={toggleActive}/>
                        </td>
                        <td>
                            <Next date={date} changeDate={changeNextDate}
                                  show={moment(momentDate).add(1, 'days').isSameOrBefore(moment())}/>
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