import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb, Avatar } from "antd";

import Header from "../components/Header";
import Advert from "../components/Advert";
import Author from "../components/Author";
import Footer from "../components/Footer";
import "../static/style/pages/detailed.css";

const Detailed = () => (
    <div>
        <Head>
            <title>Detailed</title>
        </Head>

        <Header></Header>
        <Row className="comm-main" type="flex" justify="center">
            <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                <div>
                    <div className="bread-div">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <a href="/">首页</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="/">视频列表</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="/">XXX</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div>
                        <div class="detailed-title">
                            React实战视频-xxx
                        </div>
                        <div className="list-icon center">
                            <span>
                                <Icon type="calendar" />2020-2-14
                            </span>
                            <span>
                                <Icon type="folder" />视屏教程
                            </span>
                            <span>
                                <Icon type="fire" />5678人
                            </span>
                        </div>
                        <div className="detailed-content">
                            makdown 内容
                        </div>
                    </div>
                </div>
            </Col>
            <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>

                <Author />
                <Advert />
            </Col>
            <Footer />
        </Row>
    </div>
)

export default Detailed
