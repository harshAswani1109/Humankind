import Image from "next/image";
import pg7 from "../../public/Humankind_Assets/images/page7.png";
const Page7 = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="mx-16">
          <Image src={pg7} />
        </div>
        <div className="flex justify-center items-center flex-row max-lg:flex-col max-lg:items-start m-12">
          <span className="text-5xl font-bold lg:w-1/2 lg:p-16">
            Designing a universe
          </span>
          <div className="flex justify-center items-center flex-col gap-8 lg:w-1/2 lg:p-16 mt-6">
            <p className="text-xl ">
              We’re building the Humankind brand, its world, stories, and
              characters. Our goal is to capture the hearts and minds of kids
              and adults worldwide with epic creations, a unique vision, and
              community-driven storytelling.
            </p>
            <div className="w-full">
              <button class="text-black font-bold py-2 px-4 rounded-full border-2 border-black w-40 h-14 ml-2">
                Discover the Art
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page7;
