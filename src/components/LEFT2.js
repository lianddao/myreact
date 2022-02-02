import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import axios from "../axios_intance";
import 右侧商品类别折叠列表 from './右侧商品类别折叠列表'

export default function LEFT2(props) {
    const drawerWidth = 210;
    
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
            setProductCategory(response.data)
        }
        fetch()
    }, [])
    
    
    
    
    
    return (
        
        <Drawer
            variant="permanent"
            open={props.抽屉初始状态}
            sx={props.抽屉初始状态 ? 抽屉显示的样式 : 抽屉隐藏的样式}
        >
            <Toolbar />
            <Box sx={{overflow: 'auto'}}>
                <h1>{thisName}</h1>
                
                <右侧商品类别折叠列表 商品类别数据={ProductCategory} />
                
                
                {/*<List>*/}
                {/*    {*/}
                {/*        props.工厂区域.区域工种 == null ? [] : props.工厂区域.区域工种.map((item, index) =>*/}
                {/*            (*/}
                {/*                <Link to={encodeURI('/' + thisName + '/' + item.name)}>*/}
                {/*                    <ListItem button key={item.id}>*/}
                {/*                        <ListItemIcon>*/}
                {/*                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                {/*                        </ListItemIcon>*/}
                {/*                        <ListItemText primary={item.name} />*/}
                {/*                    </ListItem>*/}
                {/*                */}
                {/*                </Link>*/}
                {/*            ))*/}
                {/*    }*/}
                {/*</List>*/}
                {/*<Divider />*/}
                {/*<List>*/}
                {/*    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (*/}
                {/*        <ListItem button key={text}>*/}
                {/*            <ListItemIcon>*/}
                {/*                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                {/*            </ListItemIcon>*/}
                {/*            <ListItemText primary={text} />*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
                {/*<Divider />*/}
                {/*<List>*/}
                {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
                {/*        <ListItem button key={text}>*/}
                {/*            <ListItemIcon>*/}
                {/*                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                {/*            </ListItemIcon>*/}
                {/*            <ListItemText primary={text} />*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
            </Box>
        </Drawer>
    )
}