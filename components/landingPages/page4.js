import Image from "next/image";
import pg4 from "../../public/assets/Lunchboxes.gif";
const Page4 = () => {
  return (
    <div className="bg-[#f4f5f4]">
      <div className="px-[5%] bg-white">
        <div className="flex justify-center items-center flex-row max-sm:flex-col max-sm:ml-[10px] border-4 border-black w-full h-full rounded-3xl">
          <div className="flex justify-center items-center w-1/2 p-2 max-sm:w-11/12">
            <Image src={pg4} />
          </div>
          <div className="flex justify-center items-center flex-col w-1/2 p-6 lg:p-16 max-sm:w-11/12 ">
            <h1 className="text-3xl max-md:text-xl font-bold w-full">
              Grab your lunchbox. It will be a long journey.
            </h1>
            <p className="my-4 max-sm:my-4 text-xl max-md:text-sm w-full">
              We are delighted you’re finally joining our adventure alongside
              Maya and Dallas. It all starts with a simple and nostalgic object:
              a lunchbox. A lunchbox? What for? Well, it’s gonna be a long
              journey!
            </p>
            <p className="mb-10 max-sm:mb-4 text-xl max-md:text-sm w-full">
              Every lunchbox will unlock a Humankind on a brave quest. You’ll be
              able to claim your Kind with them. We’ve made our generative
              lunchboxes with art we’ve been creating for the last year.
            </p>

            <div className="flex justify-start items-center flex-row max-sm:flex-col gap-2 w-full">
              <button class="bg-black hover:bg-red-500 text-white border-2 border-black font-bold py-2 px-4 rounded-full h-14 w-52 max-sm:w-72">
                Get one from Opensea
              </button>
              <button class=" text-black font-bold border-2 border-black py-2 px-4 rounded-full w-32 h-14">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page4;
