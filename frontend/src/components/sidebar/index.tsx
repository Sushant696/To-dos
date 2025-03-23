import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useState, useEffect } from "react";
import {
  Calendar,
  DirectInbox,
  ArrowRight2,
  LogoutCurve,
  Setting2,
  User,
  NoteSquare,
  ArrowLeft2,
} from "iconsax-react";
import Logout from "@/pages/auth/Logout";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Progress } from "antd";
import { ListTodo } from "lucide-react";
import { usePostUserDetails } from "@/hooks/useUserDetails";

function SideMenu() {
  const { data } = usePostUserDetails();
  const [collapsed, setCollapsed] = useState(false);
  const [completeProfile, setCompleteProfile] = useState(
    data?.data?.ProfileComplete ?? false
  );

  // console.log(data.data.ProfileComplete, "data from side menu");
  useEffect(() => {
    if (data && data.data.ProfileComplete) {
      setCompleteProfile(true);
    }
  }, [data]);

  // fetch the user profile data here and set the state to true if the profile is complete

  return (
    <div style={{ display: "flex", alignItems: "start", position: "fixed" }}>
      <Sidebar
        collapsed={collapsed}
        collapsedWidth="88px"
        width="300px"
        transitionDuration={collapsed ? 600 : 600}
        rootStyles={{ height: "100vh" }}
      >
        <div className="mt-8 flex flex-col items-center justify-start ">
          <div>
            <Link to={"/profile"}>
              <div className="flex items-center gap-2">
                {
                  completeProfile ? (
                    <img
                      className={`${
                        collapsed ? "w-20 h-20" : "w-24 h-24"
                      } rounded-xl`}
                      src={data.data.avatar}
                      alt={data.data._id}
                    />
                  ) : (
                    <User
                      color="#4285F4"
                      variant="Bulk"
                      size={72}
                      className="p-2 border rounded-xl m-2"
                    />
                  )
                  //  data.data.username
                }
                {!collapsed && (
                  <div
                    // className="ease-in-out"
                    // data-aos="fade-zoom"
                    // data-aos="zoom-in"
                    data-aos="fade-right"
                    // data-aos-duration="10"
                  >
                    <h1
                      className="medium-text capitalize font-semibold"
                      data-aos="fade-right"
                    >
                      {completeProfile
                        ? data.data.fullName
                        : //  data.data.username
                          // "admin"
                          data?.data?.username}
                    </h1>
                    <h1 data-aos="fade-right" className="text-[16px]">
                      {completeProfile ? data.data.nickName : "set nickname"}
                    </h1>
                  </div>
                )}
              </div>

              {!completeProfile && !collapsed && (
                <div
                  className="mt-3"
                  //  data-aos="zoom-in"
                  // data-aos-duration="10"
                  data-aos="fade-right"
                >
                  <p>Profile completion status</p>
                  <Progress
                    percent={30}
                    className="mb-2"
                    size="small"
                    status="active"
                  />

                  <Button>Complete Profile Now</Button>
                </div>
              )}
              {completeProfile && !collapsed && (
                <div
                  className="mt-3"
                  //  data-aos="zoom-in"
                  // data-aos-duration="10"
                  data-aos="fade-right"
                >
                  <Button>View Profile</Button>
                </div>
              )}
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <Menu data-aos="fade-right">
            <Link to={"/home"}>
              <MenuItem icon={<ListTodo color="#4285F4" size={48} />}>
                {" "}
                Todos
              </MenuItem>
            </Link>
            <Link to={"/inbox"}>
              <MenuItem
                icon={<DirectInbox color="#4285F4" variant="Bulk" size={48} />}
              >
                {" "}
                Inbox
              </MenuItem>
            </Link>
            <Link to={"/calender"}>
              <MenuItem
                icon={<Calendar color="#4285F4" variant="Bulk" size={48} />}
              >
                Calender
              </MenuItem>
            </Link>
            <Link to={"/notes"}>
              <MenuItem
                icon={<NoteSquare color="#4285F4" variant="Bulk" size={48} />}
              >
                {" "}
                Notes
              </MenuItem>
            </Link>
          </Menu>
        </div>
        <div className="bottom-menu">
          <Menu data-aos="fade-right">
            <Link to={"/setting"}>
              <MenuItem
                icon={<Setting2 size="48" color="#4285F4" variant="Bulk" />}
              >
                {" "}
                <h1 data-aos="fade-right">Settings </h1>
              </MenuItem>
            </Link>
            <MenuItem
              icon={<LogoutCurve size="48" color="#4285F4" variant="Bulk" />}
            >
              {" "}
              <Logout />{" "}
            </MenuItem>
          </Menu>
        </div>
      </Sidebar>
      <div className="mt-4 ">
        <button className="ml-4" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            <ArrowRight2 color="#4285F4" size={40} />
          ) : (
            <ArrowLeft2 color="#4285F4" size={40} />
          )}
        </button>
      </div>
    </div>
  );
}

export default SideMenu;
