import List from '@mui/material/List'
import * as React from 'react'
import {useState} from 'react'
import BikeScooterIcon from '@mui/icons-material/BikeScooter'
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import EarbudsIcon from '@mui/icons-material/Earbuds'
import 右侧商品类别折叠单项 from './右侧商品类别折叠单项'

export default function 右侧商品类别折叠列表(props) {
    const 商品类别数据 = props.商品类别数据
    
    const [当前展开位置, 设置当前展开位置] = useState(0)
    
    
    return (
        商品类别数据.map((大类别, index) =>
            <List>
                <右侧商品类别折叠单项 元数据={大类别} 展开位置={当前展开位置} 自身位置={index} 回调展开位置={设置当前展开位置} />
            </List>
        )
    )
}