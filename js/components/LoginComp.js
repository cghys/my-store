import React, {Component, PropTypes} from 'react'

import '../../style/Login.scss'
import Img1 from '../../image/login-background.jpg'
import Img2 from '../../image/icon/logo.png'

export default class HomeComp extends Component {
   componentDidMount(){
       $('.ui.form').form({
           fields:{
               mobile:{
                   identifier:'mobile',
                   rules:[
                       {
                           type:'empty',
                           prompt:'请填写手机号或者邮箱'
                       }
                   ]
               },
               password:{
                   identifier:'password',
                   rules:[
                       {
                           type:'empty',
                           prompt:'请填写密码'
                       }
                   ]
               },
           },

       })
   }
    handleClickLogin(){
        $('.ui.form').form('del errors')
        $('.ui.form').form('validate form')
    }
    render() {
        return (
            <div className="container-login">
                  <div className="content">
                      <img src={Img1} alt="" />
                      <div className="login-box">
                          <a href="main"><img src={Img2} alt="" /></a>
                          <div className="ui form">
                              <div className="field">
                                  <h3 className="ui header">用户登录</h3>
                                  <div className="ui divider"></div>
                                  <div className="ui left icon input">
                                      <input  type="text" name="mobile" placeholder="手机号" />
                                      <i className="user icon"></i>
                                      </div>
                                      <p className="memory"></p>
                              </div>
                              <div className="field">
                                  <div className="ui left icon input">
                                      <input type="password" name="password" placeholder="密码" />
                                      <i className="lock icon"></i>
                                      </div>
                                  </div>
                              <div className="field login-extra">
                                  <a className="fl" href="#" >忘记密码</a>
                                  <a className="fr" href="#">免费注册</a>
                                  </div>
                              <button className="fluid ui button blue" type="button" onClick={this.handleClickLogin.bind(this)}>登录</button>
                              <div className="ui error message"></div>
                          </div>
                      </div>
                 </div>
            </div>
        )
    }
}
