import React from 'react';
//头像 分割线
import { Avatar, Divider } from "antd";
import "../static/style/components/author.css"
const Author = () => {
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2221942406,3454925544&fm=26&gp=0.jpg" />
            </div>
            <div className="author-introduction">
                博客的文章列表有了，接下来开始完善博客右侧的功能，右侧的绝大部分都是需要在其他页面复用的，所以尽量制作成组件，减少以后的开发和维护成本。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"/>
                <Avatar size={28} icon="qq" className="account"/>
                <Avatar size={28} icon="wechat" className="account"/>
            </div>
        </div>
    )
}
export default Author;
