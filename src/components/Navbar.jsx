import { useContext, useEffect } from "react";
import { MoonStarIcon, Search, ShoppingCart, Sun } from "lucide-react";
import { DataContext } from "../utils/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

const Navbar = ({ toggle, dark }) => {
  const { input, setInput, setCat, setShowCart } = useContext(DataContext);
  const items = useSelector((state) => state.cart);

  useEffect(() => {
    const searchData = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input)
    );
    setCat(searchData);
  }, [input]);
  return (
    <div
      className={`${
        dark == true
          ? "w-full h-[12vh] flex items-center shadow-2xs justify-between relative px-2 md:px-4 bg-black text-white"
          : "w-full h-[12vh] flex items-center shadow-2xs justify-between relative px-2 md:px-4 bg-white"
      }`}
    >
      <div
        className={`${
          dark == true
            ? "h-[12vh] w-[14vw] shadow-lg  bg-black rounded-lg md:h-[8vh] md:w-[4vw] md:px-2  lg:h-[8vh] "
            : "h-[12vh] w-[14vw] shadow-lg  bg-white rounded-lg md:h-[8vh] md:w-[4vw] md:px-2  lg:h-[8vh] "
        }`}
      >
        <img
          className="h-full w-full overflow-hidden"
          src="/GrubGo/logo.webp"
          alt="Grab Go"
        />
      </div>

      <form className="flex items-center  gap-4 w-[55%] md:w-[60%]  lg:w-[62%]">
        <Search />
        <input
          className="w-full px-2 py-2 text-lg md:px-2 md:py-2 md:text-lg lg:px-2 lg:py-2 lg:text-lg outline-0 border"
          type="text"
          placeholder="Search item...."
          onChange={(e) => setInput(e.target.value.toLowerCase())}
          value={input}
        />
      </form>

      <div className="flex gap-5 items-center justify-center">
        <div onClick={toggle}>
          {dark ? <Sun size={22} /> : <MoonStarIcon size={22} />}
        </div>
        <div
          className="relative transition-all hover:text-white hover:font-semibold"
          onClick={() => setShowCart(true)}
        >
          <span className="text-sm text-black font-semibold absolute right-1 md:right-2 lg:right-2 ">
            {items.length}
          </span>
          <ShoppingCart className=" h-[7vh] w-[8vw] text-black transition-all duration-200 rounded-lg shadow-lg bg-white md:h-[6vh] md:w-[2.5vw]  lg:h-[5vh] lg:w-[3vw] lg:px-2 lg:py-2  hover:bg-[#FE7804]  " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
