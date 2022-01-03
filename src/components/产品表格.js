import React, {useState, useEffect} from "react";
import axios from "../axios_intance";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


const 产品表格 = () => {
    const [products, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get("/产品/所有产品")
            setItems(result.data)
        }

        fetchItems()
    }, [])

    const columns = [{
        dataField: 'ProductID',
        text: 'Product ID'
    }, {
        dataField: 'Name',
        text: 'Product Name'
    }, {
        dataField: 'ListPrice',
        text: 'Product Price'
    }];




    return (
        <BootstrapTable keyField='ProductID' data={products} columns={columns} pagination={paginationFactory()} />
    )
}

export default 产品表格