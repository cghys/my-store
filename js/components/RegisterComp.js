import React, {Component, PropTypes} from 'react'

import '../../style/Register.scss'
import Img1 from '../../image/register-background.jpg'
import Img2 from '../../image/icon/logo.png'
export default class RegisterComp extends Component {
    componentDidMount(){
        $('.ui.form').form({
            fields:{
                mobile:{
                    identifier:'mobile',
                    rules:[
                        {
                            type:'empty',
                            prompt:'请填写手机号'
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
    handleClickRegister(){
        $('.ui.form').form('del errors')
        $('.ui.form').form('validate form')
    }
    render() {
        return (
            <div className="container-register">
                <div className="content">
                    <img src={Img1} alt=""/>
                    <div className="register-box">
                        <a href="main"><img src={Img2} alt="" /></a>
                        <div className="ui form">
                            <div className="field">
                                <h3 className="ui header">用户注册</h3>
                                <div className="ui divider"></div>
                                <div className="ui input">
                                    <input  type="text" name="mobile"  placeholder="您的手机号"/>

                                </div>
                                <p className="memory"></p>
                            </div>
                            <div className="field">
                                <div className="ui input">
                                    <input type="password" name="password" placeholder="密码" />

                                </div>
                            </div>
                            <button className="fluid ui button yellow" type="button" onClick={this.handleClickRegister.bind(this)}>注册</button>
                            <div className="ui error message"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
