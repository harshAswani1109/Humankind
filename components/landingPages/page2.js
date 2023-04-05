import Image from "next/image";
import pg2 from "../../public/assets/p2.png";
const Page2 = () => {
  return (
    <footer>
      <div className="px-[5%] ">
        <div className="flex justify-center items-center flex-row max-sm:flex-col max-sm:ml-[10px] border-4 border-black w-full h-full rounded-3xl">
          <div className="flex justify-center items-center w-1/2 p-2 max-sm:w-11/12">
            <Image src={pg2} />
          </div>
          <div className="flex justify-center items-center flex-col w-1/2 p-6 max-sm:w-11/12 ">
            <h1 className="text-3xl max-sm:text-xl font-bold w-full">
              Bring your ideas to life with the Humankind Fund
            </h1>
            <p className="my-10 max-sm:my-4 text-lg max-sm:text-sm w-full">
              The Humankind Fund is a community-driven platform that supports
              and empowers projects that align with the values and mission of
              the Humankind brand. Join us in bringing creative ideas to life
              and making a positive impact in the world.
            </p>
            <div className="w-full ">
              <button class="bg-yellow-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full w-32 h-14">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Page2;
