import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaBluetooth } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";

import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";

//logo
import logo from "../../assets/Logo Icon.png";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();
  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4.35rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-navbarbg text-textcolor shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen dark:bg-whit dark:text-black "
      >
        <div className="flex items-center gap-2.5 font-medium  py-6  justify-start ">
          <img src={logo} alt="" className="px-4" min-width="20px" />
          <span className="text-xl whitespace-pre font-semibold">Logo</span>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-5 text-1xl py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link">
                <FaWifi size={20} className="min-w-max -ml-1" />
                Wifi
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className="link">
                <FaBluetooth size={20} className="min-w-max -ml-1" />
                Bluetooth
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className="link">
                <CiSettings size={20} className="min-w-max -ml-1" />
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: 0,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer bg-purple dark:bg-[#00c2ff] p-2 rounded-full"
        >
          <IoIosArrowBack size={14} className="text-white" />
        </motion.div>
      </motion.div>
      <div
        className="m-3 md:hidden text-white dark:text-black cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
