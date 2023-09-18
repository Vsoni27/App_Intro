import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Lottie from "lottie-react";
import clickAnimation from "../assets/click_photo.json";
import AIanimation from "../assets/AI.json";
import communityAnimation from "../assets/community.json";
import langAnimation from "../assets/lang_support1.json";
import { Avatar } from "@mui/material";
import founder from "../../public/images/founder.jpeg";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="mt-20 sm:mt-40 flex flex-col sm:mx-40 mx-10">
      <div className="flex justify-center mb-20">
        <h1 className="font-semibold sm:font-bold sm:text-4xl text-3xl text-gray-800 sm:w-3/6 text-center">
          AI powered personal app for crop diagnosis and treatments
        </h1>
      </div>

      <div className="flex sm:flex-row flex-col items-center">
        <div className="w-2/3 mt-10">
          <h1 className="font-bold text-2xl text-green-900 mb-6">
            Just One Click
          </h1>
          <p className="font-semibold text-lg">
            Click a photo of your infected crop for a free consultation and
            treatment recommendations to help you address the issue effectively.
          </p>
        </div>
        <div className="w-1/3">
          <Lottie animationData={clickAnimation} className="h-60" />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col items-center">
        {!isMobile && (
          <div className="w-1/3">
            <Lottie animationData={AIanimation} className="h-40" />
          </div>
        )}
        <div className="w-2/3 mt-10">
          <h1 className="font-bold text-2xl text-green-900 mb-6">
            Powerful AI
          </h1>
          <p className="font-semibold text-lg">
            Receive AI-driven crop treatment suggestions in your local language,
            ensuring precise guidance for effective resolution of crop issues.
          </p>
        </div>
        {isMobile && (
          <div className="w-1/3">
            <Lottie animationData={AIanimation} className="h-60" />
          </div>
        )}
      </div>

      <div className="flex sm:flex-row flex-col items-center">
        <div className="w-2/3 mt-10">
          <h1 className="font-bold text-2xl text-green-900 mb-6">
            Diverse expert community
          </h1>
          <p className="font-semibold text-lg">
            Get connected to a diverse expert community and unlock a world of
            knowledge and support at your fingertips
          </p>
        </div>
        <div className="w-1/3">
          <Lottie animationData={communityAnimation} className="h-80" />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col items-center">
        {!isMobile && (
          <div className="w-1/3">
            <Lottie animationData={langAnimation} className="h-60" />
          </div>
        )}
        <div className="w-2/3 mt-10">
          <h1 className="font-bold text-2xl text-green-900 mb-6">
            Audio and regional language support
          </h1>
          <p className="font-semibold text-lg">
            Experience the power of audio and regional language support,
            enhancing accessibility and user-friendliness.
          </p>
        </div>
        {isMobile && (
          <div className="w-1/3">
            <Lottie animationData={langAnimation} className="h-60" />
          </div>
        )}
      </div>

      <div className="flex sm:flex-row flex-col items-center sm:mt-20 sm:justify-between justify-center bg-green-200 rounded-3xl p-4">
        <Avatar
          src={founder}
          sx={{
            height: "200px",
            width: "200px",
            marginLeft: { sm: "50px" },
            marginBottom: "20px",
          }}
        />
        <div className="w-2/3">
          <p className="text-xl ">
            {'"'}
            We believe in empowering farmers and growers worldwide. With just a
            photo of your crop, our diverse community of experts and advanced AI
            algorithms work together to provide you with the best possible
            diagnosis.{'"'}
          </p>
          <h1 className="font-semibold text-xl mt-4">Divyanshu Singh</h1>
          <h1 className="text-lg">Founder, Ex-farmer</h1>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
