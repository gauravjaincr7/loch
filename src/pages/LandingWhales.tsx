import { FunctionComponent } from "react";
import FormContainer from "../components/FormContainer";
import EmailFormContainer from "../components/EmailFormContainer";

const LandingWhales = () => {
  const [draggedTestimonial, setDraggedTestimonial] = useState(null);
  const handleTestimonialDrag = (testimonial) => setDraggedTestimonial(testimonial);

  };


  const handleEmailSubmit = (email) => {
    if (email.includes("@") && email.includes(".")) {
      window.location.href = "https://app.loch.one/welcome";
    } else {
      alert("Please enter a valid email");
    }
  };

  
const LandingWhales: FunctionComponent = () => {
  return (
    <div className="relative bg-grey-900 w-full h-[1024px] overflow-y-auto text-right text-12xl text-background-f2f2f2 font-body">
      <div className="absolute top-[-114px] left-[-384px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(31,_169,_17,_0.81)_17.21%,_#2f15d0_64.58%,_rgba(0,_0,_0,_0))] w-[1334px] h-[1257.84px]" />
      <FormContainer
        personName="Yash P"
        jobTitle="Research, 3poch Crypto Hedge Fund"
        testimonialText="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
        yashPLeft="533px"
      />
      <FormContainer
        personName="Jack F"
        jobTitle="Ex Blackrock PM"
        testimonialText="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
        yashPLeft="160px"
      />
      <div className="absolute top-[0px] left-[800px] bg-white shadow-[0px_8px_22px_-6px_rgba(24,_39,_75,_0.12),_0px_14px_64px_-4px_rgba(24,_39,_75,_0.12)] w-[640px] h-[1024px]" />
      <img
        className="absolute h-[5.86%] w-[4.17%] top-[88.28%] right-[91.67%] bottom-[5.86%] left-[4.17%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/vector@2x.png"
      />
      <EmailFormContainer />
      <div className="absolute top-[86px] left-[60px] w-[322px] h-[251px] text-left">
        <div className="absolute top-[48px] left-[0px] leading-[120%] font-medium flex items-center w-[313px] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
          Get notified when a highly correlated whale makes a move
        </div>
        <div className="absolute top-[175px] left-[0px] text-base leading-[120%] font-medium flex items-center w-[322px] opacity-[0.7]">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden object-cover"
          alt=""
          src="/bell@2x.png"
        />
      </div>
      <div className="absolute top-[737px] left-[338px] text-6xl leading-[120%] font-medium flex items-center w-[400px]">
        Testimonials
      </div>
      <div className="absolute top-[786.5px] left-[59.5px] box-border w-[679px] h-px border-t-[1px] border-solid border-grey-50" />
      <img
        className="absolute top-[44px] left-[393px] w-[407px] h-[304px] object-cover"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="absolute top-[409px] left-[60px] w-[678px] h-[306px]">
        <img
          className="absolute top-[17px] left-[646px] w-8 h-8 overflow-hidden object-cover"
          alt=""
          src="/eye@2x.png"
        />
        <div className="absolute top-[65px] left-[373px] w-[305px] h-[147px]">
          <div className="absolute top-[0px] left-[0px] leading-[120%] font-medium flex items-center w-[305px]">
            Watch what the whales are doing
          </div>
          <div className="absolute top-[90px] left-[0px] text-base leading-[120%] font-medium flex items-center w-[305px] opacity-[0.7]">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-xl w-[335px] h-[306px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[0px] top-[14px] [transform:scale(1.392)]"
            alt=""
            src="/cohorts-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingWhales;
