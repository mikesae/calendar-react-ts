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
            {
                allDay: true,
                end: new Date(),
                start: new Date(),
                title: 'Pizza',
            }
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