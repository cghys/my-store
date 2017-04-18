import React, {Component, PropTypes} from 'react'

import Helmet from "react-helmet"

import '../../style/Home.scss'
import '../../style/thirdparty/swiper.min.css'
import Swiper from '../thirdparty/swiper.min'
import Img1 from '../../image/cityplay-1.jpg'
import Img2 from '../../image/cityplay-2.jpg'
import Img3 from '../../image/cityplay-3.jpg'
import Img4 from '../../image/cityplay-4.jpg'
import Img5 from '../../image/show-list.jpg'
import Img6 from '../../image/show-list2.jpg'
import Img7 from '../../image/show-list3.jpg'
import Img8 from '../../image/banner-list1.jpg'
import Img9 from '../../image/banner-list2.jpg'
import Img10 from '../../image/banner-list3.jpg'
import Img11 from '../../image/banner-list4.jpg'
import Img12 from '../../image/banner-list5.jpg'
import Img13 from '../../image/banner-list6.jpg'
import Img14 from '../../image/banner-list11.jpg'
import Img15 from '../../image/banner-list22.jpg'
import Img16 from '../../image/banner-list33.jpg'
import Img17 from '../../image/banner-list44.jpg'
import Img18 from '../../image/banner-list55.jpg'
import Img19 from '../../image/banner-list66.jpg'
import Img20 from '../../image/banner-list01.jpg'
import Img21 from '../../image/banner-list02.jpg'
import Img22 from '../../image/banner-list03.jpg'
import Img23 from '../../image/banner-list04.jpg'
import Img24 from '../../image/banner-list05.jpg'
import Img25 from '../../image/banner-list06.jpg'

import Img26 from '../../image/banner-lista.jpg'
import Img27 from '../../image/banner-listb.jpg'
import Img28 from '../../image/banner-listc.jpg'
import Img29 from '../../image/banner-listd.jpg'
import Img30 from '../../image/banner-liste.jpg'
import Img31 from '../../image/banner-listf.jpg'

import Img32 from '../../image/banner-listaa.jpg'
import Img33 from '../../image/banner-listbb.jpg'
import Img34 from '../../image/banner-listcc.jpg'
import Img35 from '../../image/banner-listdd.jpg'
import Img36 from '../../image/banner-listee.jpg'
import Img37 from '../../image/banner-listff.jpg'

export default class CityplayComp extends Component {
    componentDidMount() {
        var myswiper = new Swiper('.swiper-container', {
            scrollbar:'.swiper-scrollbar',
            scrollbarHide : false,
            scrollbarDraggable : true ,
            scrollbarSnapOnRelease : true ,
            spaceBetween: 30,
            autoplay: 5000,
            autoplayDisableOnInteraction: false
        })
    }
    render(){
        return(
            <div className="container-cityplay">
                <Helmet title="城市玩乐" />
                <div className="cityplay-home">
                    <div className="home-content">
                        <ul className="category">
                            <li className="category-list"><i className="angle right big icon" style={{zIndex:999,position:'absolute',top:21,right:10,float:'right',display:'inline-block'}}></i>
                                <h2>港澳台 国内</h2><span></span>
                                <a href="#">香港</a><a href="#">澳门</a><a href="#">台湾</a><a href="#">三亚</a><a href="#">长白山</a>
                                <div className="subMenu">
                                    <ul>
                                        <h2>香港 澳门</h2>
                                        <li><a href="#"> 香港迪士尼</a><a href="#">太平山缆车</a><a href="#"> 海洋公园</a><a href="#"> 维港游船</a>
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
                            <li className="category-list"><i className="angle right big icon" style={{zIndex:999,position:'absolute',top:92,right:10,float:'right',display:'inline-block'}}></i>
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
                            <li className="category-list"><i className="angle right big icon" style={{zIndex:999,position:'absolute',top:163,right:10,float:'right',display:'inline-block'}}></i>
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
                            <li className="category-list"><i className="angle right big icon" style={{zIndex:999,position:'absolute',top:234,right:10,float:'right',display:'inline-block'}}></i>
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
                            <li className="category-list"><i className="angle right big icon" style={{zIndex:999,position:'absolute',top:305,right:10,float:'right',display:'inline-block'}}></i>
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
                        </ul>
                    </div>
                    <div className="home_top_right">
                        <div className="swiper-container">
                            <div className="swiper-wrapper" >
                                <div className="swiper-slide"><img src={Img1} alt="" /></div>
                                <div className="swiper-slide"><img src={Img2} alt="" /></div>
                                <div className="swiper-slide"><img src={Img3} alt="" /></div>
                                <div className="swiper-slide"><img src={Img4} alt="" /></div>
                            </div>
                            <div className="swiper-scrollbar"></div>
                        </div>
                        <div className="right_bottom">
                            <ul>
                                <li><img src={Img5} alt="" /></li>
                                <li><img src={Img6} alt="" /></li>
                                <li><img src={Img7} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="banner">
                        <h2>云游世界</h2>
                        <div className="banner-list bss1">
                            <div className="banner-list-left color-set1">
                                <h2>国内 港澳台</h2>
                                <p>
                                    <a href="#">三亚</a><a href="#">丽江</a> <a href="#">黄山</a>
                                    <a href="#">九寨沟</a><a href="#">长城</a><a href="#">西藏</a>
                                    <a href="#">澳门</a><a href="#">台北</a><a href="#">香港</a>
                                </p>
                            </div>
                            <div className="banner-list-right">
                                <div className="banner-show-list bx1">
                                    <img src={Img14} alt="" />
                                </div>
                                <div className="banner-show-list bx2">
                                    <img src={Img15} alt="" />
                                </div>
                                <div className="banner-show-list bx3">
                                    <img src={Img16} alt="" />
                                </div>
                                <div className="banner-show-list bx1 bss">
                                    <img src={Img17} alt="" />
                                </div>
                                <div className="banner-show-list bx2 bss">
                                    <img src={Img18} alt="" />
                                </div>
                                <div className="banner-show-list bx3 bss">
                                    <img src={Img19} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="banner-list bss2">
                            <div className="banner-list-left color-set2">
                                <h2>欧洲  美洲</h2>
                                <p>
                                    <a href="#">伦敦</a><a href="#">巴黎</a> <a href="#">东欧</a>
                                    <a href="#">挪威</a><a href="#">纽约</a><a href="#">旧金山</a>
                                    <a href="#">柏林</a><a href="#">威尼斯</a><a href="#">米兰</a>
                                </p>
                            </div>
                            <div className="banner-list-right">
                                <div className="banner-show-list bx1">
                                    <img src={Img8} alt="" />
                                </div>
                                <div className="banner-show-list bx2">
                                    <img src={Img9} alt="" />
                                </div>
                                <div className="banner-show-list bx3">
                                    <img src={Img10} alt="" />
                                </div>
                                <div className="banner-show-list bx1 bss">
                                    <img src={Img11} alt="" />
                                </div>
                                <div className="banner-show-list bx2 bss">
                                    <img src={Img12} alt="" />
                                </div>
                                <div className="banner-show-list bx3 bss">
                                    <img src={Img13} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="banner-list bss3">
                            <div className="banner-list-left color-set3">
                                <h2>澳大利亚  中东非</h2>
                                <p>
                                    <a href="#">墨尔本</a><a href="#">黄金海岸</a> <a href="#">大堡礁</a>
                                    <a href="#">迪拜</a><a href="#">皇后镇</a><a href="#">摩洛哥</a>
                                    <a href="#">埃及</a><a href="#">毛里求斯</a><a href="#">卡帕多奇亚</a>
                                </p>
                            </div>
                            <div className="banner-list-right">
                                <div className="banner-show-list bx1">
                                    <img src={Img20} alt="" />
                                </div>
                                <div className="banner-show-list bx2">
                                    <img src={Img21} alt="" />
                                </div>
                                <div className="banner-show-list bx3">
                                    <img src={Img22} alt="" />
                                </div>
                                <div className="banner-show-list bx1 bss">
                                    <img src={Img23} alt="" />
                                </div>
                                <div className="banner-show-list bx2 bss">
                                    <img src={Img24} alt="" />
                                </div>
                                <div className="banner-show-list bx3 bss">
                                    <img src={Img25} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="banner-list bss4">
                            <div className="banner-list-left color-set4">
                                <h2>东南亚  南亚</h2>
                                <p>
                                    <a href="#">曼谷</a><a href="#">普吉岛</a> <a href="#">吉隆坡</a>
                                    <a href="#">巴厘岛</a><a href="#"> 长滩</a><a href="#">圣淘沙</a>
                                    <a href="#">槟城</a><a href="#">天福宫</a><a href="#">清莱</a>
                                </p>
                            </div>
                            <div className="banner-list-right">
                                <div className="banner-show-list bx1">
                                    <img src={Img26} alt="" />
                                </div>
                                <div className="banner-show-list bx2">
                                    <img src={Img27} alt="" />
                                </div>
                                <div className="banner-show-list bx3">
                                    <img src={Img28} alt="" />
                                </div>
                                <div className="banner-show-list bx1 bss">
                                    <img src={Img29} alt="" />
                                </div>
                                <div className="banner-show-list bx2 bss">
                                    <img src={Img30} alt="" />
                                </div>
                                <div className="banner-show-list bx3 bss">
                                    <img src={Img31} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="banner-list bss5">
                            <div className="banner-list-left color-set5">
                                <h2>日本 韩国</h2>
                                <p>
                                    <a href="#">东京</a><a href="#">大阪</a> <a href="#">京都</a>
                                    <a href="#">札幌</a><a href="#">首尔</a><a href="#">济州</a>
                                    <a href="#">釜山</a><a href="#">仁川</a><a href="#">明洞</a>
                                </p>
                            </div>
                            <div className="banner-list-right">
                                <div className="banner-show-list bx1">
                                    <img src={Img32} alt="" />
                                </div>
                                <div className="banner-show-list bx2">
                                    <img src={Img33} alt="" />
                                </div>
                                <div className="banner-show-list bx3">
                                    <img src={Img34} alt="" />
                                </div>
                                <div className="banner-show-list bx1 bss">
                                    <img src={Img35} alt="" />
                                </div>
                                <div className="banner-show-list bx2 bss">
                                    <img src={Img36} alt="" />
                                </div>
                                <div className="banner-show-list bx3 bss">
                                    <img src={Img37} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}