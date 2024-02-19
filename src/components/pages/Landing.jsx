import HeroSection from "../sections/HeroSection";

function Landing() {
  return (
    <div className="landing-page">
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title={"Electronics, for cheap!"}
        subTitle={"All electronics you would ever need, in one place"}
        buttonText={"Shop now"}
      />
    </div>
  );
}

export default Landing;
