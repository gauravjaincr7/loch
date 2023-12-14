import { FunctionComponent, useMemo, type CSSProperties } from "react";

type FormContainerType = {
  personName?: string;
  jobTitle?: string;
  testimonialText?: string;

  /** Style props */
  yashPLeft?: CSSProperties["left"];
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  personName,
  jobTitle,
  testimonialText,
  yashPLeft,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      left: yashPLeft,
    };
  }, [yashPLeft]);

  return (
    <div
      className="absolute top-[827px] left-[533px] rounded-xl bg-white shadow-[0px_4px_10px_rgba(0,_0,_0,_0.04),_0px_1px_1px_rgba(0,_0,_0,_0.04)] w-[353px] flex flex-col items-start justify-start p-5 box-border gap-[20px] text-left text-base text-grey-900 font-body"
      style={frameDivStyle}
    >
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <div className="relative leading-[120%] font-semibold">
          {personName}
        </div>
        <div className="relative text-smi leading-[120%] font-medium text-grey-400">
          {jobTitle}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-text-5-">
        <div className="relative leading-[120%] font-medium inline-block w-[313px] shrink-0">
          {testimonialText}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
