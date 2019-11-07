import React,{Component,useState,useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Item } from 'rc-menu';

//useContext上下文
let context = React.createContext();//声明出来一个上下文





//声明组件（有状态组件，无状态组件）
//1，类组件（state是类组件特有的，私有的，存储当前组件的数据）
//2.函数组件（肯定是无状态组件，小，简单，之前适合做UI组件）

//计数器
//hooks(只能用在函数组件)
//useState
function Count(){
    let [num,setNum] = useState(0);
    let [name] = useState('Tom');
    let value = useContext(context);//由下往上，找最近的
    console.log(value);
    return (
            <div>
                <p>{num}</p>
                <button onClick={()=>setNum(num+1)}>点击+1</button>
                <p>{name}</p>
            </div>
    )
}
//useEffect(代替类组件的生命周期函数)
function ShowTime(){
    let [time,setTime] = useState(new Date().toLocaleString());
    //相当于componentDidMount和componentDidUpdate
    //相当于componentWillUnmount
    useEffect(()=>{
        //console.log(time)
        let timeId = setInterval(()=>{
            setTime(new Date().toLocaleString())
        },1000)
        return ()=>{
            clearInterval(timeId);
        }
    },[])
    //可以写多个useEffect
    useEffect(()=>{
        
    },[])
    //[props.match.params.page]
    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}

//自定义hook(更方便封装组件内的逻辑功能)
//函数名一定是use开头
function useFetch(url){
    let [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://cnodejs.org/api/v1/topics')
        .then(res=>res.json())
        .then(res=>{
            setData(res.data);
        })
    })
    return data;
}
function Topic(){
    let data = useFetch('https://cnodejs.org/api/v1/topics');
    return (
        <div>
            {
                data.map((item)=><p key={item.id}>{item.title}</p>)
            }
            </div>
    )
}
ReactDOM.render(//render 方法
    <context.Provider value = {{list:[1,2,3]}}>
        <Router>
            <div>
                <Topic/>               
            </div>
        </Router>
    </context.Provider>,
    //<div>hello hooks</div>,
    document.getElementById('root')
)



/*
//函数组件
function Count(){
    点击页面不会渲染
    let num = 0;
    return (
        <div>
            <p>{num}</p>
            <button onClick={()=>num=10}>点击+1</button>
        </div>
    )
}*/
//类组件
/*class Count extends Component{
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }
    add = ()=>{
        this.setState({num:this.state.num+1})
    }
    render(){
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.add}>点击+1</button>
            </div>
        )
    }
}*/

