import * as React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';
import Calendar from './calendar';
import logo from './logo.svg';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Chef</h1>
                </header>
                <Calendar/>
            </div>
        );
    }
}

export default App;
