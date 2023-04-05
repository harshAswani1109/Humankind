import Image from "next/image";
import pg3 from "../../public/assets/p3.png";
const Page3 = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div>
          <Image src={pg3} />
        </div>
        <div className="flex justify-center items-center flex-row max-md:flex-col max-md:items-start m-12">
          <span className="text-3xl font-bold md:w-1/2 md:p-16">
            The land of Kinds is in danger !
          </span>
          <div className="flex justify-center items-center flex-col gap-8 md:w-1/2 md:p-16 mt-6">
            <p className="text-lg">
              Chiquito Village has been attacked by the giant Mechas. Maya and
              Dallas need you to join the adventure.
            </p>
            <div className="w-full">
              <button class="text-black font-bold py-2 px-4 rounded-full border-2 border-black w-40 h-14 ml-2">
                Go help them!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page3;
