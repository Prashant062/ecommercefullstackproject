import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="calegoryPanel">
      <h3 className="p-3 text-[17px] font-[500] flex item-center justify-between">
        Shop By Categories{" "}
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Button className=" w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
              Fashion
            </Button>
            <FaRegSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" />

            <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3">
              <li className="list-none ">
                <Button className=" w-full !text-left !justify-start  px-3 !text-[rgba(0,0,0,0.8)]">
                  Apparel
                </Button>
                <FaRegSquarePlus className="absolute top-[10px] left-[220px] cursor-pointer" />

                <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3">
                  <li className="list-none mb-1">
                    <Link
                      to="/"
                      className=" link w-full !text-left !justify-start relative !left-[15px]  !px-3 text-[14px] "
                    >
                      Smart Tablet
                    </Link>
                  </li>
                  <li className="list-none mb-1 ">
                    <Link
                      to="/"
                      className=" link w-full !text-left !justify-start relative !left-[15px]  !px-3 text-[14px] "
                    >
                      Crepe T-Shirt
                    </Link>
                  </li>
                  <li className="list-none mb-1">
                    <Link
                      to="/"
                      className=" link w-full !text-left !justify-start relative !left-[15px]  !px-3 text-[14px] "
                    >
                      Leather Watch
                    </Link>
                  </li>
                  <li className="list-none mb-1">
                    <Link
                      to="/"
                      className=" link w-full !text-left !justify-start relative !left-[15px]  !px-3 text-[14px] "
                    >
                      Rolling Diamond
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
