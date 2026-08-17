import logo from "../../assets/Brand Image.png";
import logoTwo from "../../assets/Brand Image (1).png";
import backImg from "../../assets/wavy lines acid lime 1.png";
import backImgTwo from "../../assets/wavy lines acid lime 1 (1).png";
import linkImg from "../../assets/arrow_outward.png";
import linkImgTwo from "../../assets/arrow_outward (1).png";
import number from "../../assets/Number.png";
import numberTwo from "../../assets/Number (1).png";
import two from "../../assets/Card Number.png";
import three from "../../assets/Card Number (1).png";
import twoSecond from "../../assets/Card Number (2).png";
import threeSecond from "../../assets/Card Number (3).png";
import icon from "../../assets/Icon Container.png";
import iconTwo from "../../assets/Icon Container (1).png";
import "./Banner.css";

const Banner = ({ mode, setMode }) => {
  return (
    <div>
      <section
        className={`w-full h-[1400px] bg-cover bg-center ${mode ? "bg-[#F2F2F2]" : "bg-[#0B0B23]"} pt-[48px] px-[120px]`}
        style={{ backgroundImage: `url("${mode ? backImgTwo : backImg}")` }}
      >
        <header
          className={`w-full h-[88px] shadow-[0_8px_32px_8px_rgba(37,37,118,0.04)] rounded-[100px] flex items-center justify-between p-[16px_24px] mb-[100px] ${mode ? "bg-[#F2F2F2]" : "bg-[#0B0B23]"}`}
        >
          <a href="#">
            <img src={mode ? logoTwo : logo} alt="" />
          </a>
          <nav>
            <ul className="flex items-center gap-[36px]">
              <li>
                <a
                  className={`flex items-center gap-[8px] font-bold text-[20px] ${mode ? "text-[#5858BE]" : "text-[#fff]"}`}
                  href="#"
                >
                  Services <img src={mode ? linkImgTwo : linkImg} alt="" />
                </a>
              </li>
              <li>
                <a
                  className={`flex items-center gap-[8px] font-bold text-[20px] ${mode ? "text-[#5858BE]" : "text-[#fff]"}`}
                  href="#"
                >
                  About <img src={mode ? linkImgTwo : linkImg} alt="" />
                </a>
              </li>
              <li>
                <a
                  className={`flex items-center gap-[8px] font-bold text-[20px] ${mode ? "text-[#5858BE]" : "text-[#fff]"}`}
                  href="#"
                >
                  Resources <img src={mode ? linkImgTwo : linkImg} alt="" />
                </a>
              </li>
              <button
                className={`p-[21px_50px] text-[20px] font-bold rounded-[9999px] border transition-colors ${
                  mode
                    ? "border-1 border-[#000] text-[#000]"
                    : "border-1 border-[#fff] text-[#fff]"
                }`}
                onClick={() => setMode(!mode)}
              >
                {mode ? "Dark Mode" : "Light Mode"}
              </button>
            </ul>
          </nav>
        </header>

        <div className="mb-[100px]">
          <span
            className={`font-bold text-[16px] uppercase ${mode ? "text-[#5858BE]" : "text-[#DDFD00]"} inter`}
          >
            ––—–– Award-Winning Studio
          </span>
          <h1
            className={`mt-[24px] bebas text-[100px] w-[800px] line__height ${mode ? "text-[#1C1C59]" : "text-[#FFFFFF]"} mb-[56px]`}
          >
            We build bespoke digital experiences
          </h1>
          <div className="flex items-center gap-[32px]">
            <button
              className={`flex items-center gap-[15px] font-bold text-[20px] ${
                mode
                  ? "bg-[#252576] border-2 border-[#fff] shadow-[0_0_8px_4px_rgba(18,18,59,0.16),_inset_0_4px_12px_4px_rgba(255,255,255,0.32)] text-[#fff]"
                  : "bg-[#DDFD00] border-2 border-[#000] shadow-[0_0_8px_4px_rgba(18,18,59,0.16),inset_0_4px_12px_4px_rgba(255,255,255,0.32)]"
              } p-[24px_48px] rounded-[9999px]`}
            >
              Get Started <img src={mode ? linkImg : linkImgTwo} alt="" />
            </button>
            <button
              className={`bg-[transparent] p-[24px_48px] rounded-[9999px] font-bold text-[20px] border-2 ${mode ? "border-[#000]" : "border-[#fff] text-[#fff]"}`}
            >
              Learn More
            </button>
          </div>
        </div>

        <div
          className={`p-[80px] w-full h-[585px] rounded-[16px] ${
            mode
              ? "border-1 border-[#F2F2F2] bg-[#F8F8F8] shadow-[0px_8px_32px_8px_#301D650A,_0px_20px_26px_4px_#301D650F,_0px_10px_11px_6px_#301D650F]"
              : "border-1 border-[#7A7ACB] bg-[#12123B] shadow-[0px_8px_32px_8px_#301D650A,_0px_20px_26px_4px_#301D650F,_0px_10px_11px_6px_#301D650F]"
          }`}
        >
          <span
            className={`font-bold text-[16px] uppercase ${mode ? "text-[#5858BE]" : "text-[#FFFFFF]"} inter`}
          >
            ––—–– SERVICES
          </span>
          <h1
            className={`text-[72px] font-normal bebas mt-4 mb-2 ${mode ? "text-[#000000]" : "text-[#FFFFFF]"}`}
          >
            What We Offer
          </h1>
          <p
            className={`text-[20px] inter font-normal size mb-[20px] ${mode ? "text-[#303030]" : "text-[#F8F8F8]"}`}
          >
            From initial concept to final deployment, we provide comprehensive
            solutions that redefine your digital footprint.
          </p>

          <div className="flex items-center gap-[50px]">
            <div
              className={`w-[323px] h-[224px] rounded-[16px] p-[24px_32px] ${mode ? "bg-[#FCFCFC]" : "bg-[#1C1C59]"}`}
              style={{
                backgroundImage: `url("${mode ? numberTwo : number}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "180px 24px",
              }}
            >
              <img className="mb-[28px]" src={mode ? icon : iconTwo} alt="" />
              <h2
                className={`font-bold inter text-[20px] ${mode ? "text-[#303030]" : "text-[#F8F8F8]"} mb-2`}
              >
                Design & Prototyping
              </h2>
              <p
                className={`text-[16px] font-normal inter ${mode ? "text-[#303030]" : "text-[#a2a0a0]"}`}
              >
                Crafting intuitive and engaging interfaces that elevate user
                experience and drive interaction.
              </p>
            </div>

            <div
              className={`w-[323px] h-[224px] rounded-[16px] p-[24px_32px] ${mode ? "bg-[#FCFCFC]" : "bg-[#1C1C59]"}`}
              style={{
                backgroundImage: `url("${mode ? twoSecond : two}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "155px -5px",
              }}
            >
              <img className="mb-[28px]" src={mode ? icon : iconTwo} alt="" />
              <h2
                className={`font-bold inter text-[20px] ${mode ? "text-[#303030]" : "text-[#F8F8F8]"} mb-2`}
              >
                Development & Integration
              </h2>
              <p
                className={`text-[16px] font-normal inter ${mode ? "text-[#303030]" : "text-[#a2a0a0]"}`}
              >
                Seamless implementation of features with systems to ensure
                optimal performance.
              </p>
            </div>

            <div
              className={`w-[323px] h-[224px] rounded-[16px] p-[24px_32px] ${mode ? "bg-[#FCFCFC]" : "bg-[#1C1C59]"}`}
              style={{
                backgroundImage: `url("${mode ? threeSecond : three}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "155px -5px",
              }}
            >
              <img className="mb-[28px]" src={mode ? icon : iconTwo} alt="" />
              <h2
                className={`font-bold inter text-[20px] ${mode ? "text-[#303030]" : "text-[#F8F8F8]"} mb-2`}
              >
                Testing & Feedback
              </h2>
              <p
                className={`text-[16px] font-normal inter ${mode ? "text-[#303030]" : "text-[#a2a0a0]"}`}
              >
                Conducting thorough usability tests to refine and enhance
                product functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
