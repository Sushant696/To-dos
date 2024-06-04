import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useState } from "react";
import { AddCircle, Calendar, DirectInbox, Home2, SearchNormal, ArrowRight2, LogoutCurve, Setting2 } from "iconsax-react";

function SideMenu() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div style={{ display: "flex", alignItems:"center", position: "fixed" }}>
            <Sidebar collapsed={collapsed} transitionDuration={1200} className="sidebar" rootStyles={{ height: "100vh" }}>
                <div className="top-menu">
                    <Menu>
                        <MenuItem icon={<AddCircle color="#4285F4" variant="Bulk" size={32} />}> Add Task</MenuItem>
                        <MenuItem icon={<DirectInbox color="#4285F4" variant="Bulk" size={32} />} > Inbox</MenuItem>
                        <MenuItem icon={<Calendar color="#4285F4" variant="Bulk" size={32} />} >Today</MenuItem>
                        <MenuItem icon={<SearchNormal color="#4285F4" variant="Bulk" size={32} />}> Search</MenuItem>
                        <MenuItem icon={<Home2 color="#4285F4" variant="Bulk" size={32} />}> Upcoming</MenuItem>
                    </Menu>
                </div>
                <div className="bottom-menu">
                    <Menu>
                        <MenuItem icon={<Setting2 size="32" color="#4285F4" variant="Bulk" />}> Settings </MenuItem>
                        <MenuItem icon={<LogoutCurve size="32" color="#4285F4" variant="Bulk" />}> Logout </MenuItem>
                    </Menu>
                </div>
            </Sidebar>
            <div>
                <button className="" onClick={() => setCollapsed(!collapsed)}>
                    <ArrowRight2 color="#343432" variant="Bulk" size={32} />
                </button>
            </div>
        </div>
    );
}

export default SideMenu;