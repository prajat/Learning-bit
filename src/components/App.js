import React,{Component} from 'react';
import {Fragment} from 'react';
import Header from './Header/index';
import Navbar from '@bit/dhruv610.navbar.navbar';

export class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
            {/* <Navbar links={[{name:"Rajat",link:"#",id:1}]} /> */}
            <Header />

            </Fragment>
        
        );
    }


}