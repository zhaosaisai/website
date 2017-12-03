import React from 'react'
import emoji from 'node-emoji'
import TitleHeader from 'components/TitleHeader'
import cx from 'classnames'
import 'static/about.scss'

export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reverse: false
        }
    }

    toReversed() {
        console.log(123)
        this.setState(prevState => {
            return {
                reverse: !prevState.reverse
            }
        })
    }

    render() {
        return (
            <div>
                <TitleHeader>
                    {emoji.get('v')}我是谁啊？么么哒！{emoji.get('kiss')}
                </TitleHeader>
                <div className="information">
                    <div className="story">
                        {emoji.get('joy')} {emoji.get('joy')} {emoji.get('joy')} 我不会夸自己肿么办？{emoji.get('broken_heart')}
                         {emoji.get('broken_heart')} {emoji.get('broken_heart')} 。那就 {emoji.get('beers')} 。
                    </div>
                    <div className="i-am">
                        <ul className={cx({
                            "reverse": this.state.reverse
                        })}>
                            <li>赵赛赛，call me 赛赛 please {emoji.get('flag-cn')}</li>
                            <li>年龄：不大，青春年华。二十有四吗 {emoji.get('question')}{emoji.get('question')}{emoji.get('question')}</li>
                            <li>伪全栈工程师</li>
                            <li>专职打杂工程师</li>
                            <li>金蝶做过前端开发</li>
                            <li>为逃避酷暑，毅然走进雾霾。</li>
                            <li>在微店，做伪全栈，专职打杂。</li>
                            <li>半路出家的 {emoji.get("monkey")} {emoji.get("monkey")} {emoji.get("monkey")}</li>
                            <li>喜欢结交基友，我的<span className="large">gay帐号：<a href="https://github.com/2json" target="_blank">2json</a></span></li>
                            <li>我的手机号 {emoji.get("iphone")} </li>
                            <li> {emoji.get("monkey")} 交流用的最多的是 <span className="large"><a href="https://github.com/2json" target="_blank">Gayhub</a></span></li>
                            <li>我的邮箱 {emoji.get("email")}</li>
                            <li>这个吧：<span className="large"><a href="mailto:pavoooo@163.com">pavoooo@163.com</a></span></li>
                            <li>哦，对了，还有这个：<span className="large"><a href="mailto:1457358080@qq.com">1457358080@qq.com</a></span></li>
                            <li>最后呢，<span className="clickable" onClick={this.toReversed.bind(this)}>点击这里</span>测试一下段子：<span className="large">倒着看</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}