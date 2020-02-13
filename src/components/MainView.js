import React from 'react';
import CardShow from './Card';
import { task } from './Task';
import ResponsiveDrawer from './ResponsiveDrawer';
import CarList from './CardList';






export class MainView extends React.Component{


    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="MainView" >
                <ResponsiveDrawer></ResponsiveDrawer>
                <CarList task = {task} ></CarList>
                
                
                
            </div>

    

        );
    }

}