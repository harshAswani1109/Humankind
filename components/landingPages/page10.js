import Image from "next/image";
import pg10 from "../../public/Humankind_Assets/images/pg-10.png";
const Page10 = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className=" flex justify-center items-center">
        <Image src={pg10} className="h-full w-full" />
      </div>
      <div className="flex justify-center items-center text-center flex-col max-lg:px-16 gap-6 lg:w-1/2 my-6">
        <span className="text-5xl font-bold ">Join our adventure</span>

        <p className="text-xl text-center max-sm:text-sm">
          Despite the many evil forces in the world, there is hope. We can still
          make a positive difference through art and community. We're looking
          for other geeks, punks, and freaks like us who believe in the power of
          storytelling to be a part of our quest.
        </p>

        <button class="bg-black hover:bg-red-500 text-white border-2 border-black font-bold py-2 px-4 rounded-full h-14 w-52">
          Join our Discord
        </button>
      </div>
    </div>
  );
};
export default Page10;
