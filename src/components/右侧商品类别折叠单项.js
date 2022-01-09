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

export default function 右侧商品类别折叠单项(props) {
    const 图标 = [<BikeScooterIcon />, <SettingsInputComponentIcon />, <CheckroomIcon />, <EarbudsIcon />]
    
    let 大类别 = props.元数据
    
    let 展开位置 = props.展开位置, 自身位置 = props.自身位置
    
    const [自身状态, set自身状态] = useState(true)
    
    
    const 点击大类别 = () => {
        if (展开位置 === 自身位置) {
            set自身状态(! 自身状态)
        } else {
            props.回调展开位置(自身位置)
        }
        
    }
    
    
    return (
        <>
            <ListItemButton onClick={点击大类别}>
                <ListItemIcon>
                    {图标[自身位置]}
                </ListItemIcon>
                <ListItemText>{大类别.Name}</ListItemText>
                <ExpandMore />
            </ListItemButton>
            <Collapse component="div" in={展开位置 === 自身位置 && 自身状态} timeout="auto" unmountOnExit>
                <List>
                    {
                        大类别.children.map((小类别) =>
                            <ListItem>
                                <ListItemIcon />
                                <ListItemText>{小类别.Name}</ListItemText>
                            </ListItem>
                        )
                    }
                </List>
            </Collapse>
            <Divider />
        </>
    )
}