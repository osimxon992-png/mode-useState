import Banner from "./components/banner/Banner";
import Choose from "./components/choose/Choose";
import Offer from "./components/offer/Offer";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState(true);

  return (
    <div className={mode ? "bg-[#F2F2F2]" : "bg-[#0B0B23]"}>
      <Banner mode={mode} setMode={setMode} />
      <Offer mode={mode} />
      <Choose mode={mode} />
    </div>
  );
};

export default App;
