import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Link as RouterLink, Link} from "react-router-dom";
import {Button, CardContent} from "@material-ui/core";
import {useEffect, useState} from 'react'
import axios from "../axios_intance";
import Collapse from '@mui/material/Collapse'

export default function LEFT2(props) {
    const drawerWidth = 240;
    
    const thisName = props.工厂区域.name
    
    
    const 抽屉显示的样式 = {
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
    }
    
    const 抽屉隐藏的样式 = {
        display: 'none',
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
    }
    
    //todo: 根据工厂区域,显示各自的功能菜单
    
    
    
    
    // 数据
    const [ProductCategory, setProductCategory] = useState([])
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get("/ProductCategory")
            debugger
            setProductCategory(response.data)
        }
        fetch()
    }, [])
    
    
    
    // 折叠效果
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen((prevOpen) => ! prevOpen);
    };
    // function ListItemLink(props) {
    //     const {to, open, ...other} = props;
    //     const primary = breadcrumbNameMap[to];
    //
    //     let icon = null;
    //     if (open != null) {
    //         icon = open ? <ExpandLess /> : <ExpandMore />;
    //     }
    //
    //     return (
    //         <li>
    //             <ListItem button component={RouterLink} to={to} {...other}>
    //                 <ListItemText primary={primary} />
    //                 {icon}
    //             </ListItem>
    //         </li>
    //     );
    // }
    
    
    
    const rootCategoryIcons = [<BikeScooterIcon />, <SettingsInputComponentIcon />, <CheckroomIcon />, <EarbudsIcon />]
    
    
    return (
        
        <Drawer
            variant="permanent"
            open={props.抽屉初始状态}
            sx={props.抽屉初始状态 ? 抽屉显示的样式 : 抽屉隐藏的样式}
        >
            <Toolbar />
            <Box sx={{overflow: 'auto'}}>
                <h1>{thisName}</h1>
                
                <List>
                    {
                        ProductCategory.map((n, i) =>
                            <Box>
                                <ListItem button onClick={handleClick}>
                                    <ListItemIcon>
                                        {rootCategoryIcons[i]}
                                    </ListItemIcon>
                                    <ListItemText>{n.Name}</ListItemText>
                                    <ExpandMore />
                                </ListItem>
                                <Collapse component="div" in={open} timeout="auto" unmountOnExit>
                                    <List>
                                        {
                                            n.children.map((m) =>
                                                <ListItem>
                                                    <ListItemIcon />
                                                    <ListItemText>{m.Name}</ListItemText>
                                                </ListItem>
                                            )
                                        }
                                    </List>
                                </Collapse>
                                <Divider />
                            </Box>
                        )
                    }
                </List>
                
                <List>
                    {
                        props.工厂区域.区域工种 == null ? [] : props.工厂区域.区域工种.map((item, index) =>
                            (
                                <Link to={encodeURI('/' + thisName + '/' + item.name)}>
                                    <ListItem button key={item.id}>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={item.name} />
                                    </ListItem>
                                
                                </Link>
                            ))
                    }
                </List>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}