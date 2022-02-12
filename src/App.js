import * as React from "react";
import {useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import './font-awesome-4.7.0/css/font-awesome.min.css'
import 波峰焊 from './components/波峰焊'
import 镭射 from "./components/镭射";
import 用户登录 from './components/用户登录'
import TOP2 from "./components/TOP2";
import LEFT2 from "./components/LEFT2";
import RIGHT2 from "./components/RIGHT2";
import Box from "@mui/material/Box";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



function App() {
    const [isLeftOpen, setIsLeftOpen] = useState(true)

    const [工厂区域, set工厂区域] = useState({id: -1, name: '', 区域工种: []})

    return (
        <div>
            <Box sx={{display: 'flex'}}>
                <TOP2 抽屉初始状态={isLeftOpen} 抽屉状态监听回调={setIsLeftOpen} 工厂区域={工厂区域} 工厂区域点击回调={set工厂区域} />
                <LEFT2 抽屉初始状态={isLeftOpen} 工厂区域={工厂区域} />
                <RIGHT2 抽屉初始状态={isLeftOpen} 工厂区域={工厂区域} />
            </Box>


            {/*<About />*/}
            {/*<Left></Left>*/}
            {/*<Right></Right>*/}
        </div>
    );
}






// function Left() {
//     return (
//         <div className="left">
//             LEFT
//             <nav>
//                 <Link to="/">Home</Link>
//             </nav>
//             <nav>
//                 <Link to="/about">About</Link>
//             </nav>
//             <nav>
//                 <Link to={encodeURI('/波峰焊')}>波峰焊</Link>
//             </nav>
//             <nav>
//                 <Link to={encodeURI('/镭射')}>镭射</Link>
//             </nav>
//             <nav>
//                 <Link to={encodeURI('/用户登录')}>用户登录</Link>
//             </nav>
//         </div>
//     )
// }
//
// function Right() {
//     return (
//         <div className="right">
//             RIGHT
//             <header>
//                 <h1>Welcome to React Router!</h1>
//             </header>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="about" element={<About />} />
//                 <Route path={encodeURI('/波峰焊')} element={<波峰焊 />} />
//                 <Route path={encodeURI('/镭射')} element={<镭射 />} />
//                 <Route path={encodeURI('/用户登录')} element={<用户登录 />} />
//             </Routes>
//         </div>
//     )
// }
//
// function Home() {
//     return (
//         <div>
//             <main>
//                 <h2>Welcome to the homepage!</h2>
//                 <p>You can do this, I believe in you.</p>
//             </main>
//             <nav>
//                 <Link to="/about">About</Link>
//             </nav>
//         </div>
//     );
// }
//
// function About() {
//     const [isLeftOpen, setIsLeftOpen] = useState(true)
//     useEffect(() => {
//     }, []);
//
//     console.log("About 加载")
//     return (
//         <div>
//             <main>
//                 <h2>Who are we?</h2>
//                 <p>
//                     That feels like an existential question, don't you
//                     think?
//                 </p>
//             </main>
//             <nav>
//                 <Link to="/">Home</Link>
//             </nav>
//         </div>
//     );
// }


export default App;
