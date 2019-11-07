import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';
import Registered from './container/Registered';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route path='/home' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/registered' component={Registered} />
                            <Route path='/login' component={Login} />
                        </div>
                        <div className="sider">
                            <div>
                                <div className="panel">
                                <div className="inner">
                                    <p>CNode: Node.js专业中文社区</p>
                                    <div>
                                    您可以
                                    <a href="/">登录</a>
                                    或
                                    <a href="/">注册</a>
                                    也可以
                                    <a href="/">
                                        <span className="span-info">通过 Github 登录</span>
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="panel">
                                <div className="header">
                                    <span className="col-fade">无人回复的话题</span>
                                </div>
                                <div className="inner">
                                    <p>前端react window.location.href='下载路径'</p>
                                    <p>一种支持插件式开发的命令行工具开发模式 </p>
                                    <p>请问缓存的内存模型是什么呢 </p>
                                    <p>Hackers周刊第十期（2019-11-03）</p>
                                    <p>写了个在测试中，控制函数日志打印的npm</p>
                                </div>
                                </div>
                                <div className="panel">
                                <div className="header">
                                    <span className="col-fade">积分榜 Top 100 >></span>
                                </div>
                                <div className="inner">
                                    <p>21755 i5ting</p>
                                    <p>15675 alsotang</p>
                                    <p>9350 leapon</p>
                                    <p>9150 atian25</p>
                                    <p>8780 jiyinyiyong</p>
                                    <p>7335 yakczh</p>
                                    <p>6825 im-here</p>
                                    <p>6095 DevinXian</p>
                                    <p>5815 chapgaga</p>
                                    <p>5350 magicdawn</p>
                                </div>
                                </div>

                                <div className="panel">
                                <div className="header">
                                    <span className="col-fade">友情社区</span>
                                </div>
                                <div className="inner">
                                    <ol className="friendship-community">
                                    <li>
                                        <a
                                        href="https://ruby-china.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        <img
                                            src="1.png"
                                            alt="Ruby China"
                                        />
                                        </a>
                                    </li>
                                    <div className="sep10"></div>
                                    <li>
                                        <a
                                        href="http://golangtc.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        <img
                                            src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png" alt="Golang 中国"
                                        />
                                        </a>
                                    </li>
                                    <div className="sep10"></div>
                                    <li>
                                        <a
                                        href="http://phphub.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        <img
                                            src="//o4j806krb.qnssl.com/public/images/phphub-logo.png" alt="Laravel 社区"
                                        />
                                        </a>
                                    </li>
                                    <div className="sep10"></div>
                                    <li>
                                        <a
                                        href="https://testerhome.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        <img
                                            src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK"
                                            alt="中国测试技术社区"
                                        />
                                        </a>
                                    </li>
                                    </ol>
                                </div>
                                </div>
                                <div className="panel">
                                <div className="header">
                                    <span className="col-fade">客户端二维码</span>
                                </div>
                                <div className="inner cnode-app-download">
                                    <img
                                    width="200"
                                    src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU"
                                    alt="qrcode"
                                    />
                                    <br/>
                                    <a
                                    href="https://github.com/soliury/noder-react-native"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    客户端源码地址
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}