import React from "react";
import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  console.log(phone);
  return (
    <div className="p-6 w-80 rounded-2xl bg-white text-gray-600 flex flex-col gap-5 mt-4">
      <h2 className="font-bold uppercase text-2xl">{phone.name}</h2>
      <img src={phone.image} alt={phone.name} className="w-40" />
      <p>{phone.description}</p>
      <div className="flex justify-between items-center">
        <p>Price : {phone.price} $</p>
        <button className="btn bg-transparent text-gray-600 w-[50%]">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Phone;
