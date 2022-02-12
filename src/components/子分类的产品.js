import {useParams} from "react-router-dom";

export default function 子分类的产品() {

    const {ProductSubcategoryID} = useParams()

    return (
        <h1>
            hello, {ProductSubcategoryID}
        </h1>
    )

}