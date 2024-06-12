import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useState } from "react";
import { Calendar, DirectInbox, Home2, SearchNormal, ArrowRight2, LogoutCurve, Setting2, User, ArrowLeft2 } from "iconsax-react";
import Logout from "@/pages/auth/Logout";
import { Button } from "../ui/button";

function SideMenu() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div style={{ display: "flex", alignItems: "center", position: "fixed" }}>
            <Sidebar collapsed={collapsed} transitionDuration={600} className="sidebar" rootStyles={{ height: "100vh" }}>
                <div className="mt-8 flex flex-col items-center justify-start p-2 ">
                    <div className="flex items-center">
                        <User color="#4285F4" variant="Bulk" size={75} className="rounded-full" />
                        {!collapsed &&
                            <div className="">
                                <h1 className="text-xl font-semibold">Admin</h1>
                                <h1 className="text-sm font-semibold">nick name</h1>
                            </div>
                        }
                    </div>
                    {!collapsed &&
                        <Button className="mt-3">
                            View Profile
                        </Button>
                    }
                </div>

                <div className="mt-12">
                    <Menu>
                        <MenuItem icon={<DirectInbox color="#4285F4" variant="Bulk" size={32} />} > Inbox</MenuItem>
                        <MenuItem icon={<Calendar color="#4285F4" variant="Bulk" size={32} />} >Today</MenuItem>
                        <MenuItem icon={<SearchNormal color="#4285F4" variant="Bulk" size={32} />}> Search</MenuItem>
                        <MenuItem icon={<Home2 color="#4285F4" variant="Bulk" size={32} />}> Upcoming</MenuItem>
                    </Menu>
                </div>
                <div className="bottom-menu">
                    <Menu>
                        <MenuItem icon={<Setting2 size="32" color="#4285F4" variant="Bulk" />}> Settings </MenuItem>
                        <MenuItem icon={<LogoutCurve size="32" color="#4285F4" variant="Bulk" />}> <Logout /> </MenuItem>
                    </Menu>
                </div>
            </Sidebar>
            <div>
                <button className="ml-4" onClick={() => setCollapsed(!collapsed)}>
                    {collapsed ? <ArrowRight2 color="#4285F4" size={40} /> : <ArrowLeft2 color="#4285F4" size={45} />}
                </button>
            </div>
        </div>
    );
}

export default SideMenu;
