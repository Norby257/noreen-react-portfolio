import React, {Component} from 'react';
import Jumbotron from './Jumbotron'
export default class Profile extends React.Component {
   constructor(props) {
       super(props); 

   }
   render() {
       return (
        <div className="Profile">
           
            <Jumbotron />
              
      </div>
       )
   }
}