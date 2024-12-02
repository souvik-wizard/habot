import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiEdit, FiPlusSquare, FiTrash } from "react-icons/fi";
import { LiaHashtagSolid } from "react-icons/lia";

const DropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center  bg-white w-full z-50">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 w-full hover:text-gray-800 md:text-[#6D6E71] md:hover:text-gray-800 "
        >
          <span className="md:text-sm font-medium md:font-normal ">
            Find Service Tags
          </span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-md md:rounded-b-md  absolute top-[139%] left-[50%] w-48 overflow-hidden border bg-white"
        >
          <Option
            text="Popular Tags"
            Icon={LiaHashtagSolid}
            setOpen={setOpen}
          />
          <Option text="Categories" Icon={FiEdit} setOpen={setOpen} />
          <Option text="New Tags" Icon={FiPlusSquare} setOpen={setOpen} />
          <Option text="Delete Tags" Icon={FiTrash} setOpen={setOpen} />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-green-100 text-slate-700 hover:text-[#00732F] transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default DropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
