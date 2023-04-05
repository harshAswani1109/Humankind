import Link from "next/link";
import Image from "next/image";
import bluneo from "../../public/Humankind_Assets/images/main.svg";
import { RxCross1 } from "react-icons/rx";
const MobileNav = (props) => {
  return (
    <div className="flex flex-col justify-start items-start p-4 right-[-16px] top-[1px] text-black bg-white w-screen gap-4 rounded-sm font-semibold absolute ">
      <div className="flex justify-between items-center flex-row w-full mr-6">
        <Image src={bluneo} />
        <span onClick={props.handler}>
          <RxCross1 />
        </span>
      </div>

      <div className="flex flex-col justify-start items-start gap-4 rounded-sm font-semibold w-full p-4 border">
        <ul>Art</ul>
        <ul>Collectibles</ul>
        <ul>Studios</ul>
        <ul>Community</ul>
        <ul>Subscribe</ul>
        <div className="flex justify-center items-center w-full mt-4">
          <button class="bg-black hover:bg-red-500  text-white font-bold p-1 rounded-full h-10 w-44">
            Burn a Lunchbox
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
