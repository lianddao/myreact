import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Route, Routes} from "react-router-dom";
import 波峰焊 from "./波峰焊";
import 镭射 from "./镭射";
import 用户登录 from "./用户登录";
import 产品表格 from "./产品表格";
import 产品种类表格 from "./产品种类表格";
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import 子分类的产品 from "./子分类的产品";



export default function RIGHT2(props) {
    const drawerWidth = 230;

    const 抽屉显示的样式 = {
        // color: 'blue',
        marginLeft: drawerWidth + 'px',
        p: 3,
        flexGrow: 1
    }

    const 抽屉隐藏的样式 = {
        flexGrow: 1,
        p: 3,
        // color: 'red',
    }



    const categoryName = props.工厂区域.name.length == 0 ? "产品" : props.工厂区域.name
    // debugger
    // const thisName = props.工厂区域.区域工种[0]

    const thisName = props.工厂区域.区域工种.length == 0 ? null : props.工厂区域.区域工种[0].name


    const 面包屑 = () => {

        function handleClick(event) {
            // event.preventDefault();
            // alert('You clicked a breadcrumb.');
        }

        return (
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href={"/" + categoryName}
                    >
                        {categoryName}
                    </Link>
                    <Typography color="text.primary"> {thisName}</Typography>
                </Breadcrumbs>
            </div>
        )
    }


    return (
        <Box component="main" sx={props.抽屉初始状态 ? 抽屉显示的样式 : 抽屉隐藏的样式}>
            <Toolbar title="空的工具栏作为高度的占位" />

            <Routes>
                <Route path="*" element={<面包屑 />}></Route>
            </Routes>


            <Routes>
                <Route path={encodeURI('/产品')} element={<产品种类表格 category="产品" />} />

                <Route path={encodeURI('/波峰焊')} element={<波峰焊 />} />
                <Route path={encodeURI('/镭射')} element={<镭射 />} />
                <Route path={encodeURI('/用户登录')} element={<用户登录 />} />
                <Route path={encodeURI('/产品/产品种类表格')} element={<产品种类表格 />} />
                <Route path={encodeURI('/产品/所有产品表格')} element={<产品表格 />} />
                <Route path={encodeURI('/产品/子分类的产品/:ProductSubcategoryID')} element={<子分类的产品 />} />
            </Routes>

        </Box>
    )
}