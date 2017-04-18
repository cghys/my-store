import React, {Component, PropTypes} from 'react'
import Helmet from "react-helmet"
import Img1 from '../../image/island-img.jpg'
import Img2 from '../../image/island1.jpg'

export default class IslandTourComp extends Component {
    componentDidMount() {
        $('.menu .item').tab()
    }
    render() {
        return(
            <div className="container-islandtour">
                <Helmet title="旅游目的地推荐" />
               <div className="islandtour-home">
                   <div className="banner-top">
                       <img src={Img1} alt="" />
                   </div>
                   <div className="banner-content">
                       <div className="condition-line">
                          <div className="condition-title"><span>热门岛屿</span></div>
                          <div className="condition-wrap">
                              <div className="condition-all"><span>全部</span></div>
                              <div className="condition-list-wrap">
                                  <ul>
                                      <li><a href="">普吉岛</a> </li>
                                      <li><a href="">冲绳</a> </li>
                                      <li><a href="">马尔代夫</a> </li>
                                      <li><a href="">巴厘岛</a> </li>
                                      <li><a href="">长滩</a> </li>
                                      <li><a href="">沙巴</a> </li>
                                      <li><a href="">苏梅</a> </li>
                                      <li><a href="">塞班</a> </li>
                                      <li><a href="">济州岛</a> </li>
                                      <li><a href="">岘港</a> </li>
                                      <li><a href="">帕劳</a> </li>
                                      <li><a href="">关岛</a> </li>
                                      <li><a href="">毛里求斯</a></li>
                                      <li><a href="">斐济</a> </li>
                                      <li><a href="">大溪地</a> </li>
                                      <li><a href="">夏威夷</a> </li>
                                      <li><a href="">三亚</a> </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                       <div className="condition-line">
                           <div className="condition-title"><span>出发地</span></div>
                           <div className="condition-wrap">
                               <div className="condition-all"><span>全部</span></div>
                               <div className="condition-list-wrap">
                                   <ul>
                                       <li><a href="">北京/天津</a> </li>
                                       <li><a href="">上海/杭州</a> </li>
                                       <li><a href="">成都/重庆</a> </li>
                                       <li><a href="">广州/深圳</a> </li>
                                       <li><a href="">港澳台</a></li>
                                       <li><a href="">国内其他</a></li>
                                       <li><a href="">海外</a></li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div className="condition-line">
                           <div className="condition-title"><span>旅行时间</span></div>
                           <div className="condition-wrap">
                               <div className="condition-all"><span>全部</span></div>
                               <div className="condition-list-wrap">
                                   <ul>
                                       <li><a href="">一月</a> </li>
                                       <li><a href="">二月</a> </li>
                                       <li><a href="">三月</a> </li>
                                       <li><a href="">四月</a> </li>
                                       <li><a href="">五月</a></li>
                                       <li><a href="">六月</a></li>
                                       <li><a href="">七月</a></li>
                                       <li><a href="">八月</a> </li>
                                       <li><a href="">九月</a> </li>
                                       <li><a href="">十月</a> </li>
                                       <li><a href="">十一月</a> </li>
                                       <li><a href="">十二月</a></li>
                                       <li><a href="">新年</a></li>
                                       <li><a href="">春节</a></li>
                                       <li><a href="">清明</a></li>
                                       <li><a href="">劳动</a></li>
                                       <li><a href="">端午</a></li>
                                       <li><a href="">中秋</a></li>
                                       <li><a href="">国庆</a></li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="card-list">
                       <div className="card-moudle">
                           <div className="card-moudle-left">
                               <a href="#">
                                   <img src={Img2} alt="" />
                               </a>
                           </div>
                           <div className="card-moudle-right">
                              <span>普吉岛</span>
                               <p>【赠免税店点优惠券】</p>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
