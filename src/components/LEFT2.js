import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import axios from "../axios_intance";
import 右侧商品类别折叠列表 from './右侧商品类别折叠列表'



/**
 * ★ 左侧
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function LEFT2(props) {
    const 抽屉宽度 = 230;
    const 抽屉显示的样式 = {
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 抽屉宽度},
    }
    const 抽屉隐藏的样式 = {
        display: 'none',
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 抽屉宽度},
    }



    // 取产品目录数据
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
                <右侧商品类别折叠列表 商品类别数据={ProductCategory} />
            </Box>

        </Drawer>
    )
}


