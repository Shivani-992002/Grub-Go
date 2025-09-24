import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { DecreaseQty, IncreaseQty, RemoveItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

const CartItems = ({ name, image, price, qty, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-[20vh] p-2 flex overflow-y-auto">
      <div className="w-full h-full  rounded-lg flex justify-between p-3  shadow-2xl">
        <div className="w-[40%] h-full object-fit overflow-hidden rounded-lg ">
          <img className="w-full h-full overflow-hidden" src={image} alt="" />
        </div>
        <div className="flex flex-col  gap-5 py-3">
          <span className="text-xl font-semibold">{name}</span>
          <div className="border-1 border-[#FE7804] p-2">
            <button
              className="px-2 py-1 cursor-pointer text-2xl hover:text-slate-700 hover:text-xl"
              onClick={() => {
                qty > 1 ? dispatch(DecreaseQty(id)) : 1;
              }}
            >
              -
            </button>
            <span className="p-2 text-xl bg-slate-200 rounded-md overflow-hidden">
              {qty}
            </span>
            <button
              className="px-2 py-1 cursor-pointer text-2xl hover:text-slate-700 hover:text-xl"
              onClick={() => {
                dispatch(IncreaseQty(id));
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-2">
          <span className="flex items-center">Rs-{price}</span>
          <Trash2
            className="flex cursor-pointer items-center justify-center hover:border px-2 py-1"
            size={38}
            color="red"
            onClick={() => {
              dispatch(RemoveItem(id));
              toast.error(`${name} is removed`);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
