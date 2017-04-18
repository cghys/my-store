import React, {Component, PropTypes} from 'react'
import {Link, browserHistory} from 'react-router'
import Helmet from "react-helmet"

import '../../style/Home.scss'
import '../../style/thirdparty/swiper.min.css'
import Swiper from '../thirdparty/swiper.min'
import Img1 from '../../image/lunbo1.jpg'
import Img2 from '../../image/lunbo2.jpg'
import Img3 from '../../image/lunbo3.jpg'
import Img4 from '../../image/lunbo4.jpg'
import Img5 from '../../image/icon/icon1.jpg'
import Img6 from '../../image/icon/icon2.jpg'
import Img7 from '../../image/icon/icon3.jpg'
import Img8 from '../../image/icon/icon4.jpg'
import Img9 from '../../image/icon/icon5.jpg'
import Img10 from '../../image/icon/icon6.jpg'
import Img11 from '../../image/icon/icon7.jpg'
import Img12 from '../../image/icon/icon8.jpg'
import Img13 from '../../image/icon/icon9.jpg'
import Img14 from '../../image/icon/home.png'
import Imga from '../../image/icon/foreign.png'



import Img15 from '../../image/tab-list-show.png'
import Img16 from '../../image/tab-list-show2.png'
import Img17 from '../../image/tab-list-show3.png'
import Img18 from '../../image/tab-list-show4.png'

import Img19 from '../../image/tab-list2-show1.png'
import Img20 from '../../image/tab-list2-show2.png'
import Img21 from '../../image/tab-list2-show3.png'
import Img22 from '../../image/tab-list2-show4.png'

import Img23 from '../../image/tab-list3-show1.png'
import Img24 from '../../image/tab-list3-show2.png'
import Img25 from '../../image/tab-list3-show3.png'
import Img26 from '../../image/tab-list3-show4.png'

import Img27 from '../../image/tab-list4-show1.png'
import Img28 from '../../image/tab-list4-show2.png'
import Img29 from '../../image/tab-list4-show3.png'
import Img30 from '../../image/tab-list4-show4.png'

import Img31 from '../../image/tab-list5-show1.png'
import Img32 from '../../image/tab-list5-show2.png'
import Img33 from '../../image/tab-list5-show3.png'
import Img34 from '../../image/tab-list5-show4.png'

import Img35 from '../../image/tab-list6-show1.png'
import Img36 from '../../image/tab-list6-show2.png'
import Img37 from '../../image/tab-list6-show3.png'
import Img38 from '../../image/tab-list6-show4.png'

import Img39 from '../../image/tab2-list-show.png'
import Img40 from '../../image/tab2-list-show2.png'
import Img41 from '../../image/tab2-list-show3.png'
import Img42 from '../../image/tab2-list-show4.png'



import Img43 from '../../image/tab2-list-shows1.png'
import Img44 from '../../image/tab2-list-shows2.png'
import Img45 from '../../image/tab2-list-shows3.png'
import Img46 from '../../image/tab2-list-shows4.png'


import Img47 from '../../image/tab2-list3-show.png'
import Img48 from '../../image/tab2-list3-show2.png'
import Img49 from '../../image/tab2-list3-show3.png'
import Img50 from '../../image/tab2-list3-show4.png'

import Img51 from '../../image/tab2-list4-show.png'
import Img52 from '../../image/tab2-list4-show2.png'
import Img53 from '../../image/tab2-list4-show3.png'
import Img54 from '../../image/tab2-list4-show4.png'



export default class HomeComp extends Component {
    componentDidMount() {
        $('.menu .item').tab();
        var myswiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            autoplay: 5000,
            autoplayDisableOnInteraction: false
        })
    }
    render() {
        return (
         <div className="container-home">
             <Helmet title="穷游网，带你云游世界" />
                 <div className="swiper-container">
                     <div className="swiper-wrapper" >
                      <div className="swiper-slide" ><img src={Img1} alt="" /></div>
                      <div className="swiper-slide"><img src={Img2} alt="" /></div>
                      <div className="swiper-slide"><img src={Img3} alt="" /></div>
                      <div className="swiper-slide"><img src={Img4} alt="" /></div>
                   </div>
                     <div className="swiper-pagination"></div>
                     <div className="swiper-button-prev swiper-button-white"></div>
                     <div className="swiper-button-next swiper-button-white"></div>
                     {/*分页器*/}
                  </div>
                 <div className="home-content">
                    <ul className="category">
                        <li className="category-list">
                        <li className="category-list">
                           {/*xiugai*/}
                            <i className="angle right big icon" style={{zIndex:999,position:'absolute',top:21,right:10, float:'right',display:'inline-block'}}></i>
                            <h2>港澳台 国内</h2><span></span>
                            <a href="#">香港</a><a href="#">澳门</a><a href="#">台湾</a><a href="#">三亚</a><a href="#">长白山</a>
                            <div className="subMenu">
                                <ul>
                                    <h2>香港 澳门</h2>
                                    <li><a href="#">香港迪士尼</a><a href="#">太平山缆车</a><a href="#">海洋公园</a><a href="#"> 维港游船</a>
                                        <a href="#"> 一日游</a><a href="#"> 水舞间</a><a href="#"> 澳门塔</a><a href="#"> 新濠影汇</a>
                                        <a href="#"> 香港迪士尼</a><a href="#"> 天际100</a><a href="#"> 豪华自助</a><a href="#"> 极限运动</a>
                                    </li>
                                    <h2>台湾</h2>
                                    <li><a href="#"> 台北</a><a href="#">高雄</a><a href="#"> 垦丁</a><a href="#"> 宜兰</a>
                                        <a href="#"> 澎湖</a><a href="#"> 台北101</a><a href="#"> 野柳九份</a><a href="#"> 夜宿海生馆</a>
                                        <a href="#"> 太鲁阁</a><a href="#"> 日月潭</a><a href="#"> 阿里山</a><a href="#"> 水上活动</a>
                                    </li>
                                    <h2>国内</h2>
                                    <li><a href="#"> 三亚</a><a href="#">厦门</a><a href="#"> 云南丽江</a><a href="#"> 满洲里</a>
                                        <a href="#"> 乌鲁木齐</a><a href="#"> 上海迪士尼</a><a href="#"> 桂林</a><a href="#"> 北海</a>
                                        <a href="#"> 长隆</a><a href="#"> 北京周边</a><a href="#"> 华东周边</a><a href="#">成都周边</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="category-list"><i className="angle right big icon" style={{zIndex:999,position:'absolute',top:91,right:10,display:'inline-block'}}></i>
                            <h2>日本 韩国</h2><span></span>
                            <a href="#">东京</a><a href="#">大阪</a><a href="#">首尔</a><a href="#">济州岛</a>
                            <div className="subMenu">
                                <ul>
                                    <h2>日本</h2>
                                    <li><a href="#"> 东京</a><a href="#">大阪</a><a href="#"> 冲绳</a><a href="#"> 静冈</a>
                                        <a href="#"> 京都</a><a href="#"> 北海道</a><a href="#"> 札幌</a><a href="#"> 名古屋</a>
                                        <a href="#"> 长椅</a><a href="#"> 鹿儿岛</a><a href="#"> 广岛</a><a href="#"> 东京迪士尼</a>
                                        <a href="#"> 不二雄博物馆</a><a href="#"> 三丽鸥彩虹乐园</a><a href="#"> 大江户温泉无语</a>
                                    </li>
                                    <h2>韩国</h2>
                                    <li><a href="#"> 首尔</a><a href="#">济州岛</a><a href="#"> 乐天世界</a><a href="#"> 首尔塔</a>
                                        <a href="#">T-money</a><a href="#">首尔夜景</a><a href="#"> 韩国美食</a><a href="#"> K-LIVE演唱会</a>
                                        <a href="#"> 弘大3D美术院</a><a href="#"> 明洞设计体验</a><a href="#"> 阿里山</a><a href="#"> 水上活动</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="category-list"><i className="angle right big icon" style={{zIndex:999,position:'absolute',top:162,right:10,display:'inline-block'}}></i>
                            <h2>东南亚 南亚</h2><span></span>
                            <a href="#">普吉</a><a href="#">清迈</a><a href="#">沙巴</a><a href="#">巴厘岛</a><a href="#">马尔代夫</a>
                            <div className="subMenu">
                                <ul>
                                    <h2>泰国</h2>
                                    <li><a href="#"> 普吉岛</a><a href="#">清迈</a><a href="#">曼谷</a><a href="#"> 苏梅岛</a>
                                        <a href="#"> 甲米</a><a href="#"> 芭提雅</a><a href="#">清莱</a><a href="#"> 新濠影汇</a>
                                        <a href="#"> 香港迪士尼</a><a href="#"> 天际100</a><a href="#"> 豪华自助</a><a href="#"> 极限运动</a>
                                    </li>
                                    <h2>南亚</h2>
                                    <li><a href="#"> 马尔代夫</a><a href="#">斯里兰卡</a><a href="#"> 尼泊尔</a><a href="#"> 班度士岛</a>
                                        <a href="#"> 蓝色美人蕉</a><a href="#">伊露岛</a><a href="#">阿玛瑞岛</a><a href="#">港丽岛</a>
                                        <a href="#">镀锡天阙</a><a href="#">都喜天阙</a><a href="#"> 神仙珊瑚岛</a>
                                    </li>
                                    <h2>东南亚</h2>
                                    <li><a href="#"> 新加坡</a><a href="#">马来西亚</a><a href="#">沙巴</a><a href="#"> 长滩岛</a>
                                        <a href="#">巴厘岛</a><a href="#">柬埔寨</a><a href="#">芽庄</a><a href="#">岘港</a>
                                        <a href="#">杜马盖地</a><a href="#">滨海湾花园</a><a href="#"> 红树林萤火虫</a><a href="#">芭雅岛</a><a href="#">蓝梦岛</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="category-list"><i className="angle right big icon" style={{zIndex:999,position:'absolute',top:233,right:10,display:'inline-block'}}></i>
                            <h2>欧洲 美洲</h2><span></span>
                            <a href="#">法国</a><a href="#">意大利</a><a href="#">美国</a><a href="#">英国</a>
                            <div className="subMenu">
                                <ul>
                                    <h2>欧洲</h2>
                                    <li><a href="#"> 法国</a><a href="#">意大利</a><a href="#">希腊</a><a href="#"> 土耳其</a>
                                        <a href="#"> 瑞士</a><a href="#">英国</a><a href="#">捷克</a><a href="#">冰岛</a>
                                        <a href="#"> 荷兰</a><a href="#"> 瑞士</a><a href="#">英国</a><a href="#">捷克</a><a href="#">冰岛</a>
                                        <a href="#"> 荷兰</a><a href="#">德国</a><a href="#">巴黎</a><a href="#">伦敦</a>
                                        <a href="#"> 塞纳河游船</a><a href="#">卢浮宫</a>
                                    </li>
                                    <h2>美洲</h2>
                                    <li><a href="#"> 美国</a><a href="#">加拿大</a><a href="#"> 洛杉矶</a><a href="#"> 纽约</a>
                                        <a href="#"> 拉斯维加斯</a><a href="#">旧金山</a><a href="#">芝加哥</a><a href="#">西雅图</a>
                                        <a href="#">华盛顿</a><a href="#">奥兰多</a><a href="#">夏威夷</a>
                                        <a href="#">塞班岛</a><a href="#">迪士尼</a><a href="#">大峡谷</a><a href="#">羚羊谷</a>
                                        <a href="#"> 尼亚加拉大瀑布</a><a href="#">帝国大厦</a><a href="#">奥德莱斯</a>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li className="category-list"><i className="angle right big icon" style={{zIndex:999,position:'absolute',top:304,right:10,display:'inline-block'}}></i>
                            <h2>澳新 中东非</h2><span></span>
                            <a href="#">悉尼</a><a href="#">新西兰</a><a href="#">迪拜</a><a href="#">帕劳</a>
                            <div className="subMenu">
                                <ul>
                                    <h2>澳洲 新西兰</h2>
                                    <li><a href="#"> 澳大利亚</a><a href="#">新西兰</a><a href="#">帕劳</a><a href="#">斐济</a>
                                        <a href="#">凯恩斯</a><a href="#">圣林群岛</a><a href="#">阿德莱德</a><a href="#">达尔文</a>
                                        <a href="#"> 珀斯</a><a href="#"> 皇后镇</a><a href="#">西海岸冰岛</a><a href="#">米尔福德峡湾</a><a href="#">凯库拉</a>
                                        <a href="#"> 悉尼海港大桥</a><a href="#">大堡礁</a><a href="#">澳大利亚观鲸</a><a href="#">太阳恋人号</a>
                                    </li>
                                    <h2>非洲</h2>
                                    <li><a href="#">毛里求斯</a><a href="#">塞舌尔</a><a href="#">埃及</a>
                                    </li>
                                    <h2>中东</h2>
                                    <li><a href="#"> 迪拜</a><a href="#">沙漠冲沙</a><a href="#">迪拜直升飞机</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                     <li className="category-list"><i className="angle right big icon" style={{zIndex:999,position:'absolute',top:375,right:10,display:'inline-block'}}></i>
                         <h2>主题推荐</h2><span></span>
                         <a href="#">邮轮</a><a href="#">亲子</a><a href="#">情侣</a><a href="#">海岛游</a><a href="#">购物</a>
                         <div className="subMenu">
                             <ul className="special">
                              <h2>主题推荐</h2>
                                 <li><a href="#"><img src={Img5} /></a><a href="#"><img src={Img6} /></a><a href="#"><img src={Img7} /></a> </li>
                                 <li><a href="#"><img src={Img8} /></a><a href="#"><img src={Img9} /></a><a href="#"><img src={Img10} /></a> </li>
                                 <li><a href="#"><img src={Img11} /></a><a href="#"><img src={Img12} /></a><a href="#"><img src={Img13} /></a> </li>
                             </ul>
                         </div>
                     </li>
                        </li>
                 </ul>

             </div>
             <div className="tab-show tab1">
                 <div className="tab-top"> <img src={Img14} alt="" /><span className="special-item" >国内</span></div>
                 <div className="ui secondary menu nav-show">
                     <a className="item  active" data-tab="town-time">小镇时光</a>
                     <a className="item" data-tab="food-city">美食之城</a>
                     <a className="item" data-tab="ascent-height">登高望远</a>
                     <a className="item" data-tab="respite-therma">小憩温泉</a>
                     <a className="item" data-tab="nature-oxygen">天然氧吧</a>
                     <a className="item" data-tab="grasslan-relax">草原放空</a>
                 </div>
                 <div className="ui active tab  tab-shows" data-tab="town-time" >
                     <div className="tab-show-list list1">
                             <img src={Img19} alt=" " />
                             <div className="tat-show-list-content">
                                 <p>烟柳画侨 小桥流水</p>
                             </div>
                      </div>
                     <div className="tab-show-list list2">
                         <img src={Img20} alt=" " />
                         <div className="tat-show-list-content">
                             <p>如痴如醉 流连忘返</p>
                         </div>
                     </div>
                     <div className="tab-show-list list3">
                         <img src={Img21} alt=" " />
                         <div className="tat-show-list-content">
                             <p>风雨烟云 千年古城</p>
                         </div>
                             </div>
                     <div className="tab-show-list list4">
                         <img src={Img22} alt=" " />
                         <div className="tat-show-list-content">
                             <p>古风犹存 如诗如画</p>
                         </div>
                             </div>
                 </div>
                 <div className="ui tab tab-shows" data-tab="food-city">
                     <div className="tab-show-list list1">
                     <img src={Img23} alt=" " />
                         <div className="tat-show-list-content">
                             <p>眼花缭乱 口水不断</p>
                         </div>
                  </div>
                     <div className="tab-show-list list2">
                         <img src={Img24} alt=" " />
                         <div className="tat-show-list-content">
                             <p>美味飘香 源源不断</p>
                         </div>
                     </div>
                     <div className="tab-show-list list3">
                         <img src={Img25} alt=" " />
                         <div className="tat-show-list-content">
                             <p>只有想不到 没有找不到</p>
                         </div>
                     </div>
                     <div className="tab-show-list list4">
                         <img src={Img26} alt=" " />
                         <div className="tat-show-list-content">
                             <p>垂涎三尺 难以克制</p>
                         </div>
                     </div>
                 </div>
                 <div className="ui tab tab-shows" data-tab="ascent-height">
                     <div className="tab-show-list list1">
                     <img src={Img15} alt=" " />
                         <div className="tat-show-list-content">
                             <p>春意撩人 登高踏青赏春色</p>
                         </div>
                 </div>
                     <div className="tab-show-list list2">
                         <img src={Img16} alt=" " />
                         <div className="tat-show-list-content">
                             <p>阳春三月 闻着茶香去峨眉</p>
                         </div>
                     </div>
                     <div className="tab-show-list list3">
                         <img src={Img17} alt=" " />
                         <div className="tat-show-list-content">
                             <p>赤子交辉 瞬息万变 </p>
                         </div>
                     </div>
                     <div className="tab-show-list list4">
                         <img src={Img18} alt=" " />
                         <div className="tat-show-list-content">
                             <p>西上太白凤 夕阳穷登攀</p>
                         </div>
                     </div></div>
                 <div className="ui tab tab-shows" data-tab="respite-therma">
                     <div className="tab-show-list list1">
                     <img src={Img27} alt=" " />
                         <div className="tat-show-list-content">
                             <p>身临其境 犹如仙境</p>
                         </div>
                 </div>
                     <div className="tab-show-list list2">
                         <img src={Img28} alt=" " />
                         <div className="tat-show-list-content">
                             <p>独秀一枝 寒风的一股乱流</p>
                         </div>
                     </div>
                     <div className="tab-show-list list3">
                         <img src={Img29} alt=" " />
                         <div className="tat-show-list-content">
                             <p>纯天然 无公害</p>
                         </div>
                     </div>
                     <div className="tab-show-list list4">
                         <img src={Img30} alt=" " />
                         <div className="tat-show-list-content">
                             <p>零距离 亲临大自然</p>
                         </div>
                     </div></div>
                 <div className="ui tab tab-shows" data-tab="nature-oxygen">
                     <div className="tab-show-list list1">
                     <img src={Img31} alt=" " />
                         <div className="tat-show-list-content">
                             <p>高原古城 圣山天湖 沁人心脾</p>
                         </div>
                 </div>
                     <div className="tab-show-list list2">
                         <img src={Img32} alt=" " />
                         <div className="tat-show-list-content">
                             <p>文献名邦 彩云之南 空谷幽兰</p>
                         </div>
                     </div>
                     <div className="tab-show-list list3">
                         <img src={Img33} alt=" " />
                         <div className="tat-show-list-content">
                             <p>开阔天空 胸怀博大 云淡风轻</p>
                         </div>
                     </div>
                     <div className="tab-show-list list4">
                         <img src={Img34} alt=" " />
                         <div className="tat-show-list-content">
                             <p>东海翡翠 舟山群岛 气候宜人</p>
                         </div>
                     </div> </div>
                 <div className="ui tab tab-shows" data-tab="grasslan-relax">
                     <div className="tab-show-list list1">
                     <img src={Img35} alt=" " />
                         <div className="tat-show-list-content">
                             <p>高原上的绿洲</p>
                         </div>
                 </div>
                     <div className="tab-show-list list2">
                         <img src={Img36} alt=" " />
                         <div className="tat-show-list-content">
                             <p>风景美如画 醉美祁连山</p>
                         </div>
                     </div>
                     <div className="tab-show-list list3">
                         <img src={Img37} alt=" " />
                         <div className="tat-show-list-content">
                             <p>草原 牧民 小马狗</p>
                         </div>
                     </div>
                     <div className="tab-show-list list4">
                         <img src={Img38} alt=" " />
                         <div className="tat-show-list-content">
                             <p>地都最近的草原</p>
                         </div>
                     </div> </div>
             </div>
             <div className="tab-show tab2">
                 <div className="tab-top"> <img src={Imga} alt="" /><span className="special-item" >海外</span></div>
                 <div className="ui secondary menu nav-show">
                     <a className="item  active" data-tab="literature-art">文艺清新</a>
                     <a className="item" data-tab="face-sea">面朝大海</a>
                     <a className="item" data-tab="special-architecture">别样建筑</a>
                     <a className="item" data-tab="charm-city">魅力都市</a>
                 </div>
                 <div className="ui active tab  tab-shows" data-tab="literature-art" >
                     <div className="tab-show-list list1">
                         <img src={Img39} alt=" " />
                         <div className="tat-show-list-content">
                             <p>烟柳画侨 小桥流水</p>
                         </div>
                     </div>
                     <div className="tab-show-list list2">
                         <img src={Img40} alt=" " />
                         <div className="tat-show-list-content">
                             <p>如痴如醉 流连忘返</p>
                         </div>
                     </div>
                     <div className="tab-show-list list3">
                         <img src={Img41} alt=" " />
                         <div className="tat-show-list-content">
                             <p>风雨烟云 千年古城</p>
                         </div>
                     </div>
                     <div className="tab-show-list list4">
                         <img src={Img42} alt=" " />
                         <div className="tat-show-list-content">
                             <p>古风犹存 如诗如画</p>
                         </div>
                     </div>
                 </div>
                 <div className="ui tab tab-shows" data-tab="face-sea">
                     <div className="tab-show-list list1">
                         <img  src={Img43} alt=" " />
                         <div className="tat-show-list-content">
                             <p>眼花缭乱 口水不断</p>
                         </div>
                     </div>
                     <div className="tab-show-list list2">
                         <img  src={Img44} alt=" " />
                         <div className="tat-show-list-content">
                             <p>美味飘香 源源不断</p>
                         </div>
                     </div>
                     <div className="tab-show-list list3">
                         <img  src={Img45} alt=" " />
                         <div className="tat-show-list-content">
                             <p>只有想不到 没有找不到</p>
                         </div>
                     </div>
                     <div className="tab-show-list list4">
                         <img src={Img46} alt=" " />
                         <div className="tat-show-list-content">
                             <p>垂涎三尺 难以克制</p>
                         </div>
                     </div>
                 </div>
                 <div className="ui tab tab-shows" data-tab="special-architecture">
                     <div className="tab-show-list list1">
                         <img src={Img47} alt=" " />
                         <div className="tat-show-list-content">
                             <p>春意撩人 登高踏青赏春色</p>
                         </div>
                     </div>
                     <div className="tab-show-list list2">
                         <img src={Img48} alt=" " />
                         <div className="tat-show-list-content">
                             <p>阳春三月 闻着茶香去峨眉</p>
                         </div>
                     </div>
                     <div className="tab-show-list list3">
                         <img src={Img49} alt=" " />
                         <div className="tat-show-list-content">
                             <p>赤子交辉 瞬息万变 </p>
                         </div>
                     </div>
                     <div className="tab-show-list list4">
                         <img src={Img50} alt=" " />
                         <div className="tat-show-list-content">
                             <p>西上太白凤 夕阳穷登攀</p>
                         </div>
                     </div></div>
                 <div className="ui tab tab-shows" data-tab="charm-city">
                     <div className="tab-show-list list1">
                         <img src={Img51} alt=" " />
                         <div className="tat-show-list-content">
                             <p>身临其境 犹如仙境</p>
                         </div>
                     </div>
                     <div className="tab-show-list list2">
                         <img src={Img52} alt=" " />
                         <div className="tat-show-list-content">
                             <p>独秀一枝 寒风的一股乱流</p>
                         </div>
                     </div>
                     <div className="tab-show-list list3">
                         <img src={Img53} alt=" " />
                         <div className="tat-show-list-content">
                             <p>纯天然 无公害</p>
                         </div>
                     </div>
                     <div className="tab-show-list list4">
                         <img src={Img54} alt=" " />
                         <div className="tat-show-list-content">
                             <p>零距离 亲临大自然</p>
                         </div>
                     </div>
                 </div>
             </div>

         </div>
      )
    }
}
