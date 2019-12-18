import React, { Component } from 'react';
import Menu from './MenuComponent'
import DishDetail from "./DishdetailComponent";
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponents';
import Footer from './FooterComponents';
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import {Switch, Route,Redirect} from 'react-router-dom';


class Main extends Component{

    constructor(props){
        super(props);

        this.state={
        dishes:DISHES,
        leaders:LEADERS,
        promotions:PROMOTIONS,
        comments:COMMENTS,
        };
    }
    
        
    render(){
        const HomePage=()=>{
            return (
              <Home
                dish={this.state.dishes.filter(dish => dish.featured)[0]}
                promotion={this.state.promotions.filter(prom => prom.featured)[0]}
                leader={this.state.leaders.filter(leader => leader.featured)[0]}
              />
            );
        }
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage}/>
                        <Route exact path='/menu' component={()=> <Menu dishes={this.state.dishes}/>} />
                        <Route exact path='/contactus' component={Contact} />
                        <Redirect to='/home'/>
                    </Switch>
                <Footer />
            </div>
        )
    };
}

export default Main;