import React from "react";
import Image from "next/image";
import kind from "../../public/Humankind_Assets/images/page1.png";
import human from "../../public/Humankind_Assets/images/pg1.png";
const Page1 = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="h- w-full flex justify-center items-center flex-col">
        <div className="relative">
          <Image src={human} className="" />
        </div>
        <div className="absolute mt-[20%]">
          <Image src={kind} className="" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col relative mt-[20%] max-sm:ml-6">
        <p className="mb-10 mt-4 text-xl flex justify-center items-center max-sm:w-[320px]">
          Creating a magical world for the kid in all of us.
        </p>
        <div className="flex justify-center items-center flex-row max-sm:flex-col gap-2 ">
          <button class="bg-white text-black border-2 border-black font-bold py-2 px-4 rounded-full h-16 w-52 max-sm:w-72">
            Get a Lunchbox
          </button>
          <button class="bg-black hover:bg-red-500 text-white border-2 border-black font-bold py-2 px-4 rounded-full h-16 w-52 max-sm:w-72">
            Burn a Lunchbox
          </button>
        </div>
        <p className="my-6 text-lg">Lunchbox burn starts on Dec 13th, 2022</p>
      </div>
    </div>
  );
};
export default Page1;
