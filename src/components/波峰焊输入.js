import React, {useState, useEffect} from "react";
import axios from "../axios_intance";

export function 波峰焊() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get("/波峰焊")
            setItems(result.data)
        }

        fetchItems()
    }, [])


    return (
        <div>
            <form>
                <table>
                    <tr>
                        <td>壳号:</td>
                        <td>
                            <input type="text" placeholder="扫描枪扫描壳号"/>
                        </td>


                    </tr>
                    <tr>
                        <td>参数:</td>
                        <td>
                            <textarea style="height:5em"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button>保存</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default 波峰焊