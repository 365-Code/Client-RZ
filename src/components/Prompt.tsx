import React from "react";

const Prompt = ({
  show,
  question,
  action,
  setshow,
  type,
}: {
  show: boolean;
  question: string;
  action: any;
  setshow: any;
  type?: string;
}) => {
  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black/30 z-10`}
    >
      <div
        className={` ${
          show ? "translate-y-0" : " -translate-y-full overflow-hidden p-0"
        } ${type == "red" ? "bg-red-500" : "bg-blue-500"} flex flex-col gap-2 text-white border-slate-400 max-w-full w-[300px] border p-4 rounded-lg fixed top-4 z-10 left-1/2 -translate-x-1/2`}
      >
        <p>{question}</p>
        <div className="flex items-center gap-2">
          <button
            onClick={action}
            className={`btn bg-white/50 hover:bg-white/80 text-black`}
          >
                Yes
          </button>
          <button
            onClick={() => setshow(false)}
            className="btn bg-black/50 hover:bg-black/80 text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
