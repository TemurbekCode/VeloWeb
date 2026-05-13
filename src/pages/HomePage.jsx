import Header from "../components/header/Header";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/pricing/Pricing";
import Services from "../components/services/Services";

function HomePage() {
  return (
    <>
      <Header />
      <Services />
      <Portfolio />
      <Pricing />
    </>
  );
}

export default HomePage;