import landingImage from "../assets/landingImg.png"
import appDownloadImage from "../assets/appDownload.png"

const HomePage = () => { 
    return (
      <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
          <h1 className="font-PlusJakartaSans text-5xl font-bold tracking-tight text-green-600">
            Cravings Don't Wait - Tuk It Away Today!
          </h1>
          <span className="text-xl font-PlusJakartaSans">
            Food is just a click away!
          </span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} />
                <div className="flex flex-col items-center justify-center gap-4 text-center font-PlusJakartaSans">
                    <span className="font-bold text-3xl tracking-tighter">
                        Order takeway even faster!
                    </span>
                    <span>
                        Download the BestFoods App fro faster ordering and personalised recommendations
                    </span>
                    <img src={appDownloadImage} />
                </div> 
            </div>
      </div>
    );
}
export default HomePage;