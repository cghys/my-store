import React, {Component, PropTypes} from 'react'
import Helmet from "react-helmet"
import Img1 from '../../image/tab-list-show.png'
import Img2 from '../../image/tab-list-show2.png'
import Img3 from '../../image/tab-list-show3.png'
import Img4 from '../../image/tab-list-show4.png'

import Img5 from '../../image/tab-list2-show1.png'
import Img6 from '../../image/tab-list2-show2.png'
import Img7 from '../../image/tab-list2-show3.png'
import Img8 from '../../image/tab-list2-show4.png'

import Img9 from '../../image/tab-list3-show1.png'
import Img10 from '../../image/tab-list3-show2.png'
import Img11 from '../../image/tab-list3-show3.png'
import Img12 from '../../image/tab-list3-show4.png'
export default class HomeComp extends Component {
    componentDidMount() {
        $('.menu .item').tab()
    }
    render() {
        return(
            <div className="container-destination">
                <Helmet title="旅游目的地推荐" />
                <div className="destination-home">
                    <div className="tab-show tabs1">
                        <div className="tab-top"> <h2>全部目的地</h2></div>
                        <div className="ui pointing secondary menu  item-show">
                            <a className="item  active" data-tab="Asia">亚洲</a>
                            <a className="item" data-tab="Europe">欧洲</a>
                            <a className="item" data-tab="America">美洲</a>
                            <a className="item" data-tab="Oceania">大洋洲</a>
                            <a className="item" data-tab="Africa">非洲</a>
                            <a className="item" data-tab="Middle East">中东</a>
                        </div>
                        <div className="ui active tab  tabs-list-show" data-tab="Asia" >
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="Europe">
                            <ul>
                            <li><a href="">阿富汗</a> </li>
                            <li><a href=""> 巴基斯坦</a> </li>
                            <li><a href="">不丹</a> </li>
                            <li><a href="">东帝汶</a> </li>
                            <li><a href="">菲律宾</a> </li>
                            <li><a href="">韩国</a> </li>
                            <li><a href="">朝鲜</a> </li>
                            <li><a href="">哈萨克斯坦</a> </li>
                        </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="America">
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="Oceania">
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="Africa">
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="Middle East">
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                            <ul>
                                <li><a href="">阿富汗</a> </li>
                                <li><a href=""> 巴基斯坦</a> </li>
                                <li><a href="">不丹</a> </li>
                                <li><a href="">东帝汶</a> </li>
                                <li><a href="">菲律宾</a> </li>
                                <li><a href="">韩国</a> </li>
                                <li><a href="">朝鲜</a> </li>
                                <li><a href="">哈萨克斯坦</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-show tabs2">
                        <div className="tab-top"> <h2>当季目的地推荐</h2></div>
                        <div className="ui pointing secondary menu  item-show">
                            <a className="item  active" data-tab="Jan">1月</a>
                            <a className="item" data-tab="February">2月</a>
                            <a className="item" data-tab="March">3月</a>
                            <a className="item" data-tab="April">4月</a>
                            <a className="item" data-tab="May">5月</a>
                            <a className="item" data-tab="June">6月</a>
                            <a className="item " data-tab="July">7月</a>
                            <a className="item" data-tab="August">8月</a>
                            <a className="item" data-tab="September">9月</a>
                            <a className="item" data-tab="October">10月</a>
                            <a className="item" data-tab="November">11月</a>
                            <a className="item" data-tab="December">12月</a>
                        </div>
                        <div className="ui active tab  tabs-list-show" data-tab="Jan" >
                            <div className="Img-show-list">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="Img-show-list lis" >
                                <img src={Img1} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img1} alt="" />
                            </div>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="February">
                            <div className="Img-show-list">
                                <img src={Img2} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img2} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img2} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img2} alt="" />
                            </div>
                            <div className="Img-show-list lis" >
                                <img src={Img2} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img2} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img2} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img2} alt="" />
                            </div>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="March">
                            <div className="Img-show-list">
                                <img src={Img3} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img3} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img3} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img3} alt="" />
                            </div>
                            <div className="Img-show-list lis" >
                                <img src={Img3} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img3} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img3} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img3} alt="" />
                            </div>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="April">
                            <div className="Img-show-list">
                                <img src={Img4} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img4} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img4} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img4} alt="" />
                            </div>
                            <div className="Img-show-list lis" >
                                <img src={Img4} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img4} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img4} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img4} alt="" />
                            </div>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="May">
                            <div className="Img-show-list">
                                <img src={Img5} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img5} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img5} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img5} alt="" />
                            </div>
                            <div className="Img-show-list lis" >
                                <img src={Img5} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img5} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img5} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img5} alt="" />
                            </div>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="June">
                            <div className="Img-show-list">
                                <img src={Img6} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img6} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img6} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img6} alt="" />
                            </div>
                            <div className="Img-show-list lis" >
                                <img src={Img6} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img6} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img6} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img6} alt="" />
                            </div>
                        </div>
                        <div className="ui tab  tabs-list-show" data-tab="July" >
                            <div className="Img-show-list">
                                <img src={Img7} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img7} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img7} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img7} alt="" />
                            </div>
                            <div className="Img-show-list lis" >
                                <img src={Img7} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img7} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img7} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img7} alt="" />
                            </div>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="August">
                            <div className="Img-show-list">
                                <img src={Img8} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img8} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img8} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img8} alt="" />
                            </div>
                            <div className="Img-show-list lis" >
                                <img src={Img8} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img8} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img8} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img8} alt="" />
                            </div>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="September">
                            <div className="Img-show-list">
                                <img src={Img9} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img9} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img9} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img9} alt="" />
                            </div>
                            <div className="Img-show-list lis" >
                                <img src={Img9} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img9} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img9} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img9} alt="" />
                            </div>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="October">
                            <div className="Img-show-list">
                                <img src={Img10} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img10} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img10} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img10} alt="" />
                            </div>
                            <div className="Img-show-list lis" >
                                <img src={Img10} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img10} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img10} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img10} alt="" />
                            </div>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="November">
                            <div className="Img-show-list">
                                <img src={Img11} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img11} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img11} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img11} alt="" />
                            </div>
                            <div className="Img-show-list lis" >
                                <img src={Img11} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img11} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img11} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img11} alt="" />
                            </div>
                        </div>
                        <div className="ui tab tabs-list-show" data-tab="December">
                            <div className="Img-show-list">
                                <img src={Img12} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img12} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img12} alt="" />
                            </div>
                            <div className="Img-show-list">
                                <img src={Img12} alt="" />
                            </div>
                            <div className="Img-show-list lis" >
                                <img src={Img12} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img12} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img12} alt="" />
                            </div>
                            <div className="Img-show-list lis">
                                <img src={Img12} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
