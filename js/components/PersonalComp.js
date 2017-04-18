import React, {Component, PropTypes} from 'react'
import '../../style/person.scss'
import Img1 from '../../image/icon/logo-person.png'
export default class PersonalComp extends Component {
    componentDidMount(){
    }
    render() {
        return(
            <div className="contain">
                <div className="top">
                    <div className="topbar">
                        <div className="leftArea">
                            <a href="#">您好，欢迎来到云游世界!</a>
                        </div>
                        <div className="rightArea">
                            <ul>
                                <li><a href="#">联系我们</a></li>
                                <li><a href="#">注册</a></li>
                                <li><a href="#">登录</a></li>
                                <li><a href="#">个人中心</a></li>
                                <li><a href="#">返回首页</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="bottombar">
                        <div className="bottomimg">
                            <img src={Img1} />
                        </div>
                        <div className="bottominfo">
                            <ul>
                                <li><a href="#">个人信息</a></li>
                                <li><a href="#">账号设置</a></li>
                                <li><a href="#">我的账户</a></li>
                                <li><a href="#">消息</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navigation">
                    <ul>
                        <li><a href="#">我的订单</a></li>
                        <li><a href="#">度假订单</a></li>
                        <li><a href="#">我的机票</a></li>
                        <li><a href="#">我的酒店</a></li>
                        <li><a href="#">我的团购</a></li>
                        <li><a href="#">我的度假</a></li>
                        <li><a href="#">我的攻略</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}