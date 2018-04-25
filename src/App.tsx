import * as moment from 'moment';
import * as React from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';
import logo from './logo.svg';

BigCalendar.momentLocalizer(moment);

interface IState {
    events?: any;
}

class App extends React.Component<any, IState> {
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
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Chef</h1>
                </header>
                <BigCalendar
                    defaultDate={new Date()}
                    defaultView="month"
                    events={events}
                    className="my-calendar"
                />
            </div>
        );
    }
}

export default App;
