import React, {useState, useEffect} from "react";
import axios from "../axios_intance";


const 波峰焊 = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get("/波峰焊")
            setItems(result.data)
        }

        fetchItems()
    }, [])

    console.log("波峰焊 加载")

    return (
        <div>
            {
                items.map((item) => (
                    <p>
                        {item.id} , {item.name}
                    </p>
                ))
            }
        </div>
    )
}

export default 波峰焊