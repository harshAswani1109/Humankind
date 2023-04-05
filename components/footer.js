import Image from "next/image";
import buneo from "../public/Humankind_Assets/images/bluneo-logo.svg";
const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center items-center flex-row my-6">
        Powered by
        <Image src={buneo} />
      </div>
    </footer>
  );
};
export default Footer;
