import React, {useState, useEffect, useCallback, useRef} from "react";
import axios from "../axios_intance";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import $ from 'jquery';


const 产品种类表格 = () => {
    const [productCategory, setProductCategory] = useState([]);
    
    
    const [第1次数据, set第1次数据] = useState([]);
    
    
    useEffect(() => {
        const fetch1 = async () => {
            const aaa = await axios.get("/产品/产品种类")
            set第1次数据(aaa.data)
            
            
            // 一次获取所有需要的count,可以避免多次重渲染
            const bbb = await axios.post("/product/category2/", {list: aaa.data})
            set第1次数据(bbb.data)
        }
        fetch1()
        
    }, [])
    
    
    const columns = [
        {
            dataField: 'id',
            text: '#'
        },
        {
            dataField: 'parentId',
            text: '父层ID'
        },
        {
            dataField: 'name',
            text: '种类名称'
        },
        {
            dataField: "count",
            text: "该类产品的数量",
        }
    ];
    
    
    return (
        <div>
            <BootstrapTable keyField='id' data={第1次数据} columns={columns} />
        </div>
    
    )
}


export default 产品种类表格