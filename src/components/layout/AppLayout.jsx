import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
// import Split from "react-split"
const AppLayout = () => {
    return <div style={{
        padding: '50px 14px 0px 305px'
    }}>
         {/* <Split 
                sizes={[20, 80]} 
                direction="horizontal" 
                className="split"
            > */}
        <Sidebar />
        <Outlet />
    {/* </Split> */}
    </div>;
};

export default AppLayout;
