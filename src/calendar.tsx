import * as moment from 'moment';
import * as React from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

interface IState {
    events?: any;
}

class Calendar extends React.Component<any, IState> {
    public state: IState = {
        events: [
            {title: 'Pasta Faggioli', start: '2018-04-18', end: '2018-04-18'},
            {title: 'Burgers', start: '2018-04-19', end: '2018-04-19'},
            {title: 'Pizza', start: '2018-04-20', end: '2018-04-20'}
        ]
    };

    public render() {
        const {
            events
        } = this.state;
        return (
            <BigCalendar
                defaultDate={new Date()}
                defaultView="month"
                events={events}
                className="my-calendar"
            />
        );
    }
}

export default Calendar;