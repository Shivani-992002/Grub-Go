import { Beef, LeafyGreen } from "lucide-react";
import { useDispatch } from "react-redux";
import { AddItems } from "../redux/cartSlice";
import { toast } from "react-toastify";

const Card = ({ image, name, price, type, id }) => {
  const dispatch = useDispatch();
  return (
    <div className=" w-[45vw] md:w-[16vw] md:h-[36vh] lg:w-[16vw] lg:h-[36vh] bg-white p-3 gap-2  md:p-2 lg:p-2 shadow-2xl rounded-lg flex flex-col md:gap-2 lg:gap-2 hover:border-3 border-[#FE7804] hover:w-[15vw] hover:h-[34vh] hover:cursor-pointer transition-all ">
      <div className="h-[58%] w-full object-fit">
        {" "}
        <img
          className="h-full w-full overflow-hidden object-fit rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <div className="text-xl lg:text-2xl md:text-2xl font-bold">{name}</div>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Rs-{price}</h3>
        <div className="flex items-center justify-center gap-1 lg:gap-3 md:gap-3">
          {type === "veg" ? (
            <LeafyGreen size={15} strokeWidth={3} color="green" />
          ) : (
            <Beef size={15} strokeWidth={4} color="red" />
          )}{" "}
          <span className="font-semibold">{type}</span>
        </div>
      </div>
      <button
        className="bg-[#FE7804] font-semibold text-white px-2 py-1 rounded-md text-lg mt-3 hover:bg-orange-300"
        onClick={() => {
          dispatch(
            AddItems({ id: id, name: name, price: price, image: image, qty: 1 })
          );
          toast.success(`${name} added`);
        }}
      >
        Add items
      </button>
    </div>
  );
};

export default Card;
