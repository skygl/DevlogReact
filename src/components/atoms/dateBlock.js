import React from "react";

const DateBlock = ({date}) => {
    let {year, month, day} = date;

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    return (
        <div>
            {[year, month, day].join('.')}
        </div>
    )
};

export default DateBlock;