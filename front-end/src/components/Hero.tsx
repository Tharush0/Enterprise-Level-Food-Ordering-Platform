import hero from "../assets/hero.jpg";
const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <img src={hero} className="w-full max-h-[650px] object-cover" />
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-12">
        <div className="flex flex-col gap-2">
          <h1 className="font-PlusJakartaSans text-2xl md:text-6xl font-bold tracking-tight text-green-600 leading-snug">
            Wellcome to BestFoods.lk
          </h1>
          <span className="text-base md:text-lg font-PlusJakartaSans text-white">
            Satisfy Your Cravings with BestFoods.lk – Order Your Favorite Meals
            Anytime, Anywhere!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
