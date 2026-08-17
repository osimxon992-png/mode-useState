import "./Choose.css";
import checked from "../../assets/Icon.png";
const Choose = ({ mode }) => {
  return (
    <div>
      <section className="w-full h-[879px] p-[16px_120px]">
        <div
          className={`w-full h-[777px] rounded-[16px] p-[80px] gap-[32px] ${
            mode
              ? "bg-[#F8F8F8] border-1 border-[#F2F2F2] shadow-[0px_8px_32px_8px_#301D650A,_0px_20px_26px_4px_#301D650F,_0px_10px_11px_6px_#301D650F]"
              : "bg-[#12123B] border-1 border-[#7A7ACB] shadow-[0px_8px_32px_8px_#301D650A,_0px_20px_26px_4px_#301D650F,_0px_10px_11px_6px_#301D650F]"
          }`}
        >
          <span
            className={`font-bold text-[16px] uppercase ${mode ? "text-[#5858BE]" : "text-[#FFFFFF]"} inter`}
          >
            ––—–– BENEFITS
          </span>
          <h1
            className={`text-[72px] font-normal bebas  ${mode ? "text-[#000000]" : "text-[#FFFFFF]"}`}
          >
            Why choose us
          </h1>
          <p
            className={`w-full font-normal inter line__height mb-[32px] ${mode ? "text-[#303030]" : "text-[#F8F8F8]"}`}
          >
            We understand that making the right choice is crucial. We offer
            unparalleled expertise and dedication to ensure your success.
          </p>
          <div
            className={`flex items-center gap-[24px] w-[1132px] h-[100px] rounded-[4px] mb-3 p-[24px] ${mode ? "bg-[#FCFCFC]" : "bg-[#1C1C59]"}`}
          >
            <img src={checked} alt="" />
            <div>
              <h3
                className={`text-[20px] font-bold inter ${mode ? "text-[#303030]" : "text-[#F8F8F8]"}`}
              >
                Unmatched Expertise
              </h3>
              <p
                className={`font-normal text-[16px] inter ${mode ? "text-[#303030]" : "text-[#F8F8F8]"}`}
              >
                Our team consists of industry-leading experts committed to
                providing innovative solutions tailored to your unique needs.
              </p>
            </div>
          </div>
          <div
            className={`flex items-center gap-[24px] w-[1132px] h-[100px] rounded-[4px] mb-3 p-[24px] ${mode ? "bg-[#FCFCFC]" : "bg-[#1C1C59]"}`}
          >
            <img src={checked} alt="" />
            <div>
              <h3
                className={`text-[20px] font-bold inter ${mode ? "text-[#303030]" : "text-[#F8F8F8]"}`}
              >
                Client-Centric Approach
              </h3>
              <p
                className={`font-normal text-[16px] inter ${mode ? "text-[#303030]" : "text-[#F8F8F8]"}`}
              >
                We help with your goals, working closely to develop strategies
                that drive growth and achieve measurable results.
              </p>
            </div>
          </div>
          <div
            className={`flex items-center gap-[24px] w-[1132px] h-[100px] rounded-[4px] mb-3 p-[24px] ${mode ? "bg-[#FCFCFC]" : "bg-[#1C1C59]"}`}
          >
            <img src={checked} alt="" />
            <div>
              <h3
                className={`text-[20px] font-bold inter ${mode ? "text-[#303030]" : "text-[#F8F8F8]"}`}
              >
                Proven Track Record
              </h3>
              <p
                className={`font-normal text-[16px] inter ${mode ? "text-[#303030]" : "text-[#F8F8F8]"}`}
              >
                With a history of successful partnerships and transformative
                outcomes, we deliver excellence and exceed expectations.
              </p>
            </div>
          </div>
          <div
            className={`flex items-center gap-[24px] w-[1132px] h-[100px] rounded-[4px] p-[24px] ${mode ? "bg-[#FCFCFC]" : "bg-[#1C1C59]"}`}
          >
            <img src={checked} alt="" />
            <div>
              <h3
                className={`text-[20px] font-bold inter ${mode ? "text-[#303030]" : "text-[#F8F8F8]"}`}
              >
                Cutting-Edge Technology
              </h3>
              <p
                className={`font-normal text-[16px] inter ${mode ? "text-[#303030]" : "text-[#F8F8F8]"}`}
              >
                We use latest advancements to provide you with solutions that
                keep you ahead in a rapidly evolving landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
