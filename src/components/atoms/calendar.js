import React, {useState} from "react";
import Prev from "./prev";
import Next from "./next";
import "./date.css";
import moment from "moment";

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const Calendar = ({date, changeDate}) => {
    const [calendarDate, setCalendarDate] = useState({
        year: date.year,
        month: date.month,
    });

    const changePrevMonth = () => {
        const [year, month] = moment(calendarDate.year + calendarDate.month, "YYYYMM")
            .subtract(1, 'months')
            .format("YYYY-MM")
            .split("-");
        setCalendarDate({year, month});
    };

    const changeNextMonth = () => {
        const [year, month] = moment(calendarDate.year + calendarDate.month, "YYYYMM")
            .add(1, 'months')
            .format("YYYY-MM")
            .split("-");
        setCalendarDate({year, month});
    };

    const onClick = (current) => {
        console.log(current.format("YYYY-MM-DD"));
        const [year, month, day] = current.format('YYYY-MM-DD').split('-');
        changeDate({year, month, day});
    };

    const generate = () => {
        const calendarDay = moment({
            year: calendarDate.year,
            month: calendarDate.month - 1
        });
        const startWeek = calendarDay.clone().startOf('month').week();
        const endWeek = calendarDay.clone().endOf('month').week() === 1 ? 53 : calendarDay.clone().endOf('month').week();
        let calendar = [];
        for (let week = startWeek; week <= endWeek; week++) {
            calendar.push(
                <div className="row" key={week}>
                    {
                        Array(7).fill(0).map((n, i) => {
                            let current = calendarDay.clone().week(week).startOf('week').add(n + i, 'day');
                            let isSelected = moment().format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
                            let isGrayed = current.format('MM') === calendarDay.format('MM') ? '' : 'grayed';
                            return (
                                <div className={`box  ${isSelected} ${isGrayed}`} key={i}
                                     onClick={() => onClick(current)}>
                                    <span className={`text`}>{current.format('D')}</span>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
        return calendar;
    };

    return (
        <>
            <hr/>
            <div className={"calendar_box"}>
                <table className={"calendar_title_table"}>
                    <tbody>
                    <tr>
                        <td>
                            <Prev date={calendarDate} changeDate={changePrevMonth}/>
                        </td>
                        <td>
                            <span
                                className="calendar_title">{[months[calendarDate.month - 1], calendarDate.year].join(" ")}</span>
                        </td>
                        <td>
                            <Next date={calendarDate} changeDate={changeNextMonth}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="row">
                    <div className="box">
                        <span className="text">SUN</span>
                    </div>
                    <div className="box">
                        <span className="text">MON</span>
                    </div>
                    <div className="box">
                        <span className="text">TUE</span>
                    </div>
                    <div className="box">
                        <span className="text">WED</span>
                    </div>
                    <div className="box">
                        <span className="text">THU</span>
                    </div>
                    <div className="box">
                        <span className="text">FRI</span>
                    </div>
                    <div className="box">
                        <span className="text">SAT</span>
                    </div>
                </div>
                {generate()}
            </div>
        </>
    )
};

export default Calendar;