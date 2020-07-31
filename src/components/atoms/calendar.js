import React, {useState} from "react";
import Prev from "./prev";
import Next from "./next";
import "../../styles/css/date.css";
import moment from "moment";

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const firstDate = moment("2020-07-05");

const Calendar = ({date, changeDate}) => {
    const [calendarDate, setCalendarDate] = useState({
        year: date.year,
        month: date.month,
    });

    const momentDate = moment(calendarDate.year + calendarDate.month, "YYYYMM");

    const changePrevMonth = () => {
        const willChangeDate = moment(momentDate)
            .subtract(1, 'months');

        if (willChangeDate.isBefore(firstDate)) {
            return;
        }

        const [year, month] = willChangeDate
            .format("YYYY-MM")
            .split("-");
        setCalendarDate({year, month});
    };

    const changeNextMonth = () => {
        const willChangeDate = moment(momentDate)
            .add(1, 'months');

        const today = moment();
        if (willChangeDate.isAfter(today)) {
            return;
        }

        const [year, month] = willChangeDate
            .format("YYYY-MM")
            .split("-");
        setCalendarDate({year, month});
    };

    const onClick = (current) => {
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
                            let canSelect = current.isSameOrAfter(firstDate) && current.isSameOrBefore(moment());
                            let isGrayed = canSelect && current.format('MM') === calendarDay.format('MM') ? '' : 'grayed';
                            return (
                                <div className={`box ${isGrayed} ${canSelect ? 'can_select' : ''}`} key={i}
                                     onClick={canSelect ? () => onClick(current) : null}>
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
                            <Prev show={moment(momentDate).subtract(1, 'months').isSameOrAfter(firstDate.startOf('month'))} date={calendarDate} changeDate={changePrevMonth}/>
                        </td>
                        <td>
                            <span
                                className="calendar_title">{[months[calendarDate.month - 1], calendarDate.year].join(" ")}</span>
                        </td>
                        <td>
                            <Next show={moment(momentDate).add(1, 'months').isBefore(moment())} date={calendarDate} changeDate={changeNextMonth}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div>
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
            </div>
        </>
    )
};

export default Calendar;