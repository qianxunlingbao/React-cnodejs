import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import './All.css';

export default class Share extends Component {
  constructor(props){
    super(props);
    this.state = {
        data : [],
        choice : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        backgroundColor:[{backgroundColor : 'white',borderBottom : 'solid 1px grey'},{backgroundColor : 'grey',borderBottom : 'solid 1px grey'}]
    }
}
componentDidMount(){
    let page = this.props.match.params.pages || 1;
    console.log(page);
    fetch('https://cnodejs.org/api/v1/topics?tab=share&page=' + page)
    .then((res)=>res.json())
    .then((res)=>{
        let data = res;
        console.log(data);
       this.setState({
           data : data.data
       })
    })
}
render() {
    return (
        <Router>
            <div className = 'conbox'>
            <ul>
            {this.state.data.map((item,index)=>(
            <li className='list' key={'list'+index} style = {this.state.backgroundColor[this.state.choice[index]]} 
            onMouseOver = {()=>{let choice = [...this.state.choice];
                choice[index] = 1;
                this.setState({
                    choice : choice
                })
            }}
            onMouseOut = {()=>{let choice = [...this.state.choice];
                choice[index] = 0;
                this.setState({
                    choice : choice
                })
            }}>
                <img src={item.author.avatar_url} className='icons' alt='图片'/>
                <div id = 'reply'>{item.reply_count}</div>
                <div id = 'visit'>/{item.visit_count}</div>
                <div className ='tab' id = {item.top === true?'top':'non'}>{item.top === true?'置顶':(item.tab==='ask'?'问答':'分享')}</div>
                <div id = 'title'>
                    <Link to = {'/topic/'+ item.id}> {item.title}</Link>
                    <p className='timeago'>2天前</p>                  
                     <img src='https://avatars3.githubusercontent.com/u/56661717?v=4&s=120' className='backicons' alt='图片'/>
                </div>

            </li>))}
            </ul>
            <table className = 'table'>
            <tr className = 'tr'>
                {[1,2,3,4,5,6,7,8,9,10].map((item)=>(<td className = 'td' ><button className = 'button'><Link to = {'/home/share/'+item}>{item}</Link></button></td>))}
            </tr>
            </table>
            
        </div>
        </Router>
        
    )
}
}
