import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <div className="bg-green-600 mt-20 flex justify-center">
      <div className="w-2/3 flex justify-center p-6">
        <InstagramIcon
          onClick={() => window.open("https://www.instagram.com/")}
          sx={{ fontSize: "40px", marginRight: { sm: "10px", xs: "5px" } }}
          className="cursor-pointer hover:scale-110"
        />
        <YouTubeIcon
          onClick={() => window.open("https://www.youtube.com/")}
          sx={{ fontSize: "40px", marginX: { sm: "10px", xs: "5px" } }}
          className="cursor-pointer hover:scale-110"
        />
        <TwitterIcon
          onClick={() => window.open("https://www.twitter.com/")}
          sx={{ fontSize: "40px", marginX: { sm: "10px", xs: "5px" } }}
          className="cursor-pointer hover:scale-110"
        />
        <FacebookIcon
          onClick={() => window.open("https://www.facebook.com/")}
          sx={{ fontSize: "40px", marginX: { sm: "10px", xs: "5px" } }}
          className="cursor-pointer hover:scale-110"
        />
        <LinkedInIcon
          onClick={() => window.open("https://www.linkedin.com/")}
          sx={{ fontSize: "40px", marginLeft: { sm: "10px", xs: "5px" } }}
          className="cursor-pointer hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Contact;
