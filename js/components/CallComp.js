/**
 * Created by cghys on 2016/12/7.
 */
import React, {Component, PropTypes} from 'react'
import '../../style/main.scss'


export default class CallComp extends Component {

    render(){

        return(
           <div className="call-list">
                <ul>
                <li><a className="item active" href="#" >关于我们
                <span className="zwui">1</span>
                </a></li>
                <li><a className="item active" href="#">服务与隐私
                <span className="zwui">1</span>
                </a></li>
                 <li><a className="item active" href="#">联系我们
                <span className="zwui">1</span>
                 </a></li>
                <li><a className="item active" href="#">资质详情
                <span className="zwui">1</span>
                </a></li>
                <li><a className="item active" href="#">营业执照
                <span className="zwui">1</span>
                </a></li>
                <li><a className="item active" href="#">投诉建议
                <span className="zwui">1</span>
                </a></li>
                </ul>
            </div>
        )
    }
}