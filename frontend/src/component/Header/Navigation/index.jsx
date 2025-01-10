// import React from 'react'
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";
import "../Navigation/style.css"

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col-1 w-[23%]">
            <Button
              className="!text-black gap-3 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" /> Shop By Categories
              <LiaAngleDownSolid className="text-[14px] ml-auto font-bold " />
            </Button>
          </div>

          <div className="col-2 w-[60%]">
            <ul className="flex items-center gap-3">
              <li className="list-none">
                <Link
                  to="/home"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8 )] hover:!text-[#ff5252]" >
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/fashion"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8 )] hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/electronics"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8 )] hover:!text-[#ff5252]">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/bags"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8 )] hover:!text-[#ff5252]">
                    Bages
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/footwear"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8 )] hover:!text-[#ff5252]">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/groceries"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8 )] hover:!text-[#ff5252]">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/beuty"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8 )] hover:!text-[#ff5252]">
                    Beuty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/wellness"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8 )] hover:!text-[#ff5252]">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/jewellery"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8 )] hover:!text-[#ff5252]">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-3 w-[17%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Category panel component */}

      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
