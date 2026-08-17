import img from "../../assets/Image.png";
import "./Offer.css";
import linkImg from "../../assets/arrow_outward.png";
import linkImgTwo from "../../assets/arrow_outward (1).png";

const Offer = ({ mode }) => {
  return (
    <div>
      <section
        className={` w-full h-[679px]  p-[0px_120px] ${mode ? "bg-[#F2F2F2]" : "bg-[#0B0B23]"}`}
      >
        <div
          className={`w-full h-[597px] rounded-[16px] p-[80px] flex gap-[32px] ${
            mode
              ? "bg-[#F8F8F8] border-1 border-[#F2F2F2] shadow-[0px_8px_32px_8px_#301D650A,_0px_20px_26px_4px_#301D650F,_0px_10px_11px_6px_#301D650F]"
              : "bg-[#12123B] border-1 border-[#7A7ACB] shadow-[0px_8px_32px_8px_#301D650A,_0px_20px_26px_4px_#301D650F,_0px_10px_11px_6px_#301D650F]"
          }`}
        >
          <img src={img} alt="" />
          <div>
            <span
              className={`font-bold text-[16px] uppercase ${mode ? "text-[#5858BE]" : "text-[#FFFFFF]"} inter`}
            >
              ––—–– Our STORY
            </span>
            <h1
              className={`text-[72px] font-normal bebas mt-4 ${mode ? "text-[#000000]" : "text-[#FFFFFF]"}`}
            >
              Our Mission
            </h1>
            <p
              className={`font-normal inter size text-[20px] w-[500px] mb-[20px] ${mode ? "text-[#515151]" : "text-[#F2F2F2]"}`}
            >
              Since our founding in 2015, Koda Agency has pioneered the creation
              of advanced digital solutions. Our mission is to equip our clients
              not only to navigate the current market challenges but also to
              emerge as leaders in their fields through groundbreaking
              innovation and user-centric design.
            </p>
            <p
              className={`font-normal inter size text-[20px] w-[500px] mb-[20px] mb-[52px] ${mode ? "text-[#515151]" : "text-[#F2F2F2]"}`}
            >
              We specialise in creating bespoke digital experiences that
              resonate with audiences and drive measurable results.
            </p>
            <a
              className={`flex items-center gap-2 underline inter font-bold text-[20px] ${mode ? "text-[#5858BE]" : "text-[#FFFFFF]"}`}
              href="#"
            >
              Learn More About Us
              <img src={mode ? linkImgTwo : linkImg} alt="" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
