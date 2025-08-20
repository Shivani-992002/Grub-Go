import Navbar from "../components/Navbar";
import Categoires from "../Categories.jsx";
import { useContext, useState } from "react";
import Card from "../components/Card";
import { food_items } from "../food.js";
import { DataContext } from "../utils/UserContext.jsx";
import { X } from "lucide-react";
import CartItems from "../components/CartItems.jsx";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart.jsx";
import NoItemFound from "../components/NoItemFound.jsx";

const Home = () => {
  const [dark, setDark] = useState(false);
  const { cat, setCat, input, showCart, setShowCart } = useContext(DataContext);
  const items = useSelector((state) => state.cart);
  const subtotal = items.reduce(
    (total, itme) => total + itme.price * itme.qty,
    0
  );
  const delivery = 20;
  const taxes = (subtotal * 0.5) / 100;
  const total = Math.floor(subtotal + delivery + taxes);
  const toggle = () => {
    setDark(!dark);
  };
  const filter = (category) => {
    if (category === "All") {
      setCat(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category.toLowerCase() === category.toLowerCase()
      );
      setCat(newList);
    }
  };
  return (
    <div
      className={`${
        dark == false
          ? "bg-gray-100 w-full text-black min-h-screen "
          : "bg-black w-full min-h-screen"
      }`}
    >
      <Navbar dark={dark} toggle={toggle} />
      <div className="mt-5 md:mt-2 lg:mt-2 w-full flex gap-5 flex-wrap items-center justify-center md:gap-3 lg:gap-3">
        {Categoires.map((item, index) => {
          return input.length !== 0 ? null : (
            <div
              key={index}
              className={`${
                dark == false
                  ? "h-[8vh] w-[20vw] md:h-[12vh] md:w-[8vw] lg:h-[12vh] lg:w-[8vw] cursor-pointer flex flex-col items-center justify-center gap-2 rounded-lg transition-all duration-500  bg-white shadow-xl hover:bg-[#FE7804] hover:text-white hover:font-semibold hover:h-[10vh] hover:w-[6vw]"
                  : "h-[8vh] w-[20vw] md:h-[12vh] md:w-[8vw] lg:h-[12vh] lg:w-[8vw] cursor-pointer flex flex-col items-center justify-center gap-2 rounded-lg transition-all duration-500 border border-white bg-black text-white shadow-xl hover:bg-white hover:text-black hover:font-semibold hover:h-[10vh] hover:w-[6vw]"
              }`}
              onClick={() => filter(item.name)}
            >
              {item.icon}
              <h3 className="text-sm md:text-lg lg:text-lg">{item.name}</h3>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8  py-10">
        {cat.length === 0 ? (
          <NoItemFound />
        ) : (
          cat.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.food_name}
                price={item.price}
                image={item.food_image}
                type={item.food_type}
                id={item.id}
              />
            );
          })
        )}
      </div>
      <div
        className={`${
          dark ? "bg-black text-white" : "bg-white text-black"
        } w-full md:w-[43vw] lg:w-[43vw] h-screen overflow-auto fixed top-0 right-0 p-6 transition-all duration-500 ${
          showCart ? "translate-x-0 " : "translate-x-full "
        }`}
      >
        <header className="flex items-center justify-between mb-10">
          <span className="text-lg font-semibold hover:text-[#FE7804] ">
            {" "}
            Order Items
          </span>
          <X
            size={28}
            className="hover:text-red-500 cursor-pointer hover:border transition-all"
            onClick={() => setShowCart(false)}
          />
        </header>
        <div className="flex flex-col gap-5 overflow-y-auto">
          {items.length == 0 ? (
            <EmptyCart />
          ) : (
            items.map((item, index) => {
              return (
                <CartItems
                  key={index}
                  name={item.name}
                  image={item.image}
                  qty={item.qty}
                  price={item.price}
                  id={item.id}
                />
              );
            })
          )}
        </div>
        <div className="w-full  border-t-2 mt-15 p-3 flex flex-col border-b-2 ">
          <div className="flex items-center justify-between">
            <div className="font-semibold">Subtotal</div>
            <div className="font-semibold">Rs-{subtotal}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-semibold">Delivery</div>
            <div className="font-semibold">Rs-{delivery}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-semibold">Taxes</div>
            <div className="font-semibold">Rs-{taxes}</div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-500">Total</span>
          <span className="font-bold">Rs-{total}</span>
        </div>
        <div className="w-full p-2">
          <button className="px-2 py-1 w-full bg-[#FE7804] text-white font-semibold text-xl mt-5 rounded-lg hover:bg-orange-400 cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
