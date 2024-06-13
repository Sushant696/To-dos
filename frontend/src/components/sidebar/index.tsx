import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useState } from "react";
import {
  Calendar,
  DirectInbox,
  Home2,
  SearchNormal,
  ArrowRight2,
  LogoutCurve,
  Setting2,
  User,
  ArrowLeft2,
} from "iconsax-react";
import Logout from "@/pages/auth/Logout";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const [completeProfile, setCompleteProfile] = useState(false);
  const toggleProfileComplete = false;
  if(toggleProfileComplete){setCompleteProfile(true)}

  // fetch the user profile data here and set the state to true if the profile is complete

  return (
    <div style={{ display: "flex", alignItems: "center", position: "fixed" }}>
      <Sidebar
        collapsed={collapsed}
        collapsedWidth="85px"
        transitionDuration={collapsed ? 600 : 300}
        rootStyles={{ height: "100vh" }}
      >
        <div className="mt-8 flex flex-col items-center justify-start ">
          <div>
            <Link to={"/profile"}>
              <div className="flex items-center gap-2">
                <User
                  color="#4285F4"
                  variant="Bulk"
                  size={72}
                  className="p-2 border rounded-xl m-2"
                />
                {!collapsed && (
                  <div
                    className="ease-in-out"
                    // data-aos="fade-zoom"
                    data-aos="zoom-in"
                    data-aos-duration="10"
                  >
                    <h1 className="text-xl font-semibold" data-aos="fade-right">
                      Admin
                    </h1>
                    <h1 data-aos="fade-right" className="text-sm font-semibold">
                      Nick name
                    </h1>
                  </div>
                )}
              </div>
              {!completeProfile && !collapsed && (
                <Button>Complete your profile</Button>
              )}
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <Menu>
            <MenuItem
              icon={<DirectInbox color="#4285F4" variant="Bulk" size={48} />}
            >
              {" "}
              Inbox
            </MenuItem>
            <MenuItem
              icon={<Calendar color="#4285F4" variant="Bulk" size={48} />}
            >
              Today
            </MenuItem>
            <MenuItem
              icon={<SearchNormal color="#4285F4" variant="Bulk" size={48} />}
            >
              {" "}
              Search
            </MenuItem>
            <MenuItem icon={<Home2 color="#4285F4" variant="Bulk" size={48} />}>
              {" "}
              Upcoming
            </MenuItem>
          </Menu>
        </div>
        <div className="bottom-menu">
          <Menu>
            <MenuItem
              icon={<Setting2 size="48" color="#4285F4" variant="Bulk" />}
            >
              {" "}
              Settings{" "}
            </MenuItem>
            <MenuItem
              icon={<LogoutCurve size="48" color="#4285F4" variant="Bulk" />}
            >
              {" "}
              <Logout />{" "}
            </MenuItem>
          </Menu>
        </div>
      </Sidebar>
      <div>
        <button className="ml-4" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            <ArrowRight2 color="#4285F4" size={40} />
          ) : (
            <ArrowLeft2 color="#4285F4" size={45} />
          )}
        </button>
      </div>
    </div>
  );
}

export default SideMenu;
