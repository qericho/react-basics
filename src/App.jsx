import Accordion from "./project_1/Accordion";
import RandomColor from "./project_2/RandomColor";
import ImageSlider from "./project_3/ImageSlider";
import LoadMore from "./project_4/LoadMore";
import QrCodeGenerator from "./project_5/QrCodeGenerator";

const App = () => {
  return (
    <>
      {/* Projects */}
      <Accordion />
      <RandomColor />
      <ImageSlider />
      <LoadMore />
      <QrCodeGenerator />
    </>
  );
};

export default App;
