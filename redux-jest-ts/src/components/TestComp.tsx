import React from 'react';

interface MyProps {
    page: string,
}
interface MyState{
    class: string,
    welcomeMessage: string,
}
 
export default class Link extends React.Component<MyProps, MyState> {
 constructor(props: MyProps) {
   super(props);
 
   this.state = {
     class: "normal",
     welcomeMessage: "Hi there!"
   };
 }
 
 render() {
   return (
       <div>
           <a
               className={this.state.class}
               href={this.props.page || '#'}>
               {this.props.page}
           </a>
           {this.state.welcomeMessage}
       </div>
   );
 }
}