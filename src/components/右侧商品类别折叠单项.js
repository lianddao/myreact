import {ListItemButton} from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import * as React from 'react'
import BikeScooterIcon from '@mui/icons-material/BikeScooter'
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import EarbudsIcon from '@mui/icons-material/Earbuds'
import {useState} from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess'
import Link from "@mui/material/Link";
import {NavLink, Route, Routes} from "react-router-dom";


/**
 * 右侧商品类别折叠单项
 * @param props
 * @returns {JSX.Element}
 */
export default function 右侧商品类别折叠单项(props) {
    const 图标 = [<BikeScooterIcon />, <SettingsInputComponentIcon />, <CheckroomIcon />, <EarbudsIcon />]

    let 大类别 = props.元数据

    let 展开位置 = props.展开位置, 自身位置 = props.自身位置

    const [自身状态, set自身状态] = useState(展开位置 === 自身位置)

    let 状态图标 = 展开位置 === 自身位置 ? <ExpandLess /> : <ExpandMore />


    const 点击大类别 = () => {
        props.回调展开位置(自身位置)
    }



    return (
        <>
            <ListItemButton onClick={点击大类别}>
                <ListItemIcon>
                    {图标[自身位置]}
                </ListItemIcon>
                <ListItemText>{大类别.Name}</ListItemText>
                {状态图标}
            </ListItemButton>
            <Collapse component="div" in={展开位置 === 自身位置} timeout="auto" unmountOnExit>
                <List>
                    {
                        大类别.children.map((小类别, index) =>
                            <ListItem key={index}>
                                <ListItemIcon />
                                <nav>
                                    <NavLink
                                        to={encodeURI('/产品/子分类的产品/' + 小类别.ProductSubcategoryID)}
                                        style={{color: 'black', textDecoration: 'none'}}
                                    >{小类别.Name}</NavLink>
                                </nav>

                            </ListItem>
                        )
                    }
                </List>
            </Collapse>
            <Divider />
        </>
    )
}