import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Good from './Good';
import All from './All';
import Share from './Share';
import Ask from './Ask';
import Job from './Job';
import Dev from './Dev';
export default class Home extends Component {
    render() {
        return (
            <Router>
            <div className = 'nav'>
               <Link to = '/home/all' >全部</Link>
               <Link to = '/home/good' >精华</Link>
               <Link to = '/home/share' >分享</Link>
               <Link to = '/home/ask' >问答</Link>
               <Link to = '/home/job' >招聘</Link>
               <Link to = '/home/dev' >客户端测试</Link>
            </div>
            <div className = 'tablelist'>
                <Switch>
                <Route exact path = '/' component = {All}/>
                <Route exact path = '/home' component = {All}/>
                <Route exact path = '/home/all' component = {All}/>
                <Route exact path = '/home/all/:pages' component = {All}/>
                <Route exact path = '/home/good'  component = {Good}/>
                <Route exact path = '/home/good/:pages'  component = {Good}/>
                <Route exact path = '/home/share'  component = {Share}/>
                <Route exact path = '/home/share/:pages'  component = {Share}/>
                <Route exact path = '/home/ask'  component = {Ask}/>
                <Route exact path = '/home/ask/:pages'  component = {Ask}/>
                <Route exact path = '/home/job'  component = {Job}/>
                <Route exact path = '/home/job/:pages'  component = {Job}/>
                <Route exact path = '/home/dev'  component = {Dev}/>
                </Switch>
            </div>
            
            </Router>
           
        )
        /*let url = this.props.match.url
        return (
            <div>
                <div>
                    <Link to={url+'/all'}>全部</Link>
                    <Link to={url+'/good'}>精华</Link>
                    <Link to={url+'/share'}>分享</Link>
                    <Link to={url+'/job'}>招聘</Link>
                </div>
                <div>
                    <Route path={`${url}/all`} component={All} />
                    <Route path={`${url}/good`} component={Good} />
                    <Route path={`${url}/share`} component={Share} />
                    <Route path={`${url}/job`} component={Job} />
                    <Route path='/home/:tab' component={List}/>
                </div>
            </div>
        )*/
    }
}