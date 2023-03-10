import React, {useState} from 'react'
import zhCN from 'antd/locale/zh_CN';
import {Button, ConfigProvider} from "antd";

function App() {
    return (
        <ConfigProvider locale={zhCN}>
            <div>
                <Button type={"primary"}>a</Button>
            </div>
        </ConfigProvider>
    )
}

export default App
