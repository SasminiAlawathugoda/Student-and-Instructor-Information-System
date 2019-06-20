import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Router, BrowserRouter as Link} from 'react-router-dom';

//Routes
//NavBar
import NavBar from './components/dashboardLayout/Navbar';
import SideBar from './components/dashboardLayout/SideBar';

//Authentication Routes
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import studentHome from "./components/students/studentHome";
import studentDashboard from "./components/students/studentDashboard";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            auth: true
        }
    }


    render() {

        const { auth } = this.state;

        return (
            <BrowserRouter>
                {!auth? <Fragment /> : <SideBar />}
                <Route>
                    <Switch>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/studentDashboard" exact component={studentDashboard}/>
                        <Route path="/studentHome" exact component={studentHome}/>


                    </Switch>
                </Route>
            </BrowserRouter>
        );
    }
}

export default App;