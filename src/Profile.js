import React, {Component} from 'react';
import ProfileBlurb from './ProfileBlurb';
export default class Profile extends React.Component {
   constructor(props) {
       super(props); 

       this.state = {
           person: {
               name: 'Noreen Madden',
               biography: 'Web developer and analyst'
           }, 


           quote: {
               content: 'The most dangerous phrase in the language is we\'ve always done',
               source: 'Grace Hopper'
           }
       }
   }
   render() {
       return (
        <div className="Profile">
    
        <ProfileBlurb person={this.state.person} quote={this.state.quote} />
      </div>
       )
   }
}