import React, {Component, PropTypes} from 'react'
import {Link, browserHistory} from 'react-router'
import '../../style/main.scss'
import Img1 from '../../image/icon/logo-person.png'

export default class HeaderComp extends Component {
    componentDidMount(){
    }
    render() {
        let isActive1=false,isActive2=false,isActive3=false,isActive4=false
        let route=this.props.pathParam
        switch(route){
            case '/main':
                isActive1=true
                break
            case '/cityplay':
                isActive2=true
                break
            case '/islandtour':
                isActive3=true
                break
            case '/destination':
                isActive4=true
                break
            default:
                break
        }
        return (
            <div className="wrapper">
                <div className="topBar">
                    <div className="comWidth">
                        <div className="leftArea">
                            <a href="#">您好，欢迎来到云游世界!</a>
                        </div>
                        <div className="rightArea">
                            <ul>
                                <li><a href="call">联系我们</a></li>
                                <li><a href="register">注册</a></li>
                                <li><a href="login">登录</a></li>
                                <li><a href="pravite">个人中心</a></li>
                                <li><a href="main">返回首页</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="searchBar">
                    <div className="content_left">
                        <img src={Img1} />
                    </div>
                    <div className="ui search" style={{left:'450px',top:'30px',position:'absolute'}}>
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="搜索..." style={{width:'500px'}}/>
                            <i className="search icon"></i>
                        </div>
                            <div className="results"></div>
                    </div>
                </div>
                <div className="nav">
                    <div className="nav-list">
                    <Link to="/main" className={isActive1 ? 'item active' : 'item'}>首页</Link>
                    <Link to="/cityplay" className={isActive2 ? 'item active' : 'item'}  >城市玩乐</Link>
                        <Link to="/islandtour" className={isActive3 ? 'item active' : 'item'}  >海岛游</Link>
                        <Link to="/destination"  className={isActive4?'item active' : 'item'}>目的地</Link>
                    </div>
                </div>
            </div>
        )
    }
}
