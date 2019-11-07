import React, { Component } from 'react'

export default class Topic extends Component {
    constructor(){
        super();
        this.state = {
            data: ''
        }
    }
    componentDidMount(){
        let type = this.props.match.params.type;
        fetch('https://cnodejs.org/api/v1/topics?tab='+type)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    // shouldComponentUpdate(){
        
    // }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.type !== this.props.match.params.type){
            let type = this.props.match.params.type;
            fetch('https://cnodejs.org/api/v1/topics?tab='+type)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data});
                })
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div style={{width:800,height:800,overflow:'hidden'}} dangerouslySetInnerHTML={{__html:item.content}}></div>
                    ))
                }
            </div>
        )
    }
}