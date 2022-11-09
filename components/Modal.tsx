import {VNode} from "preact";

interface IPropsModal {
  header?: string,
  children?: VNode,
  action: () => void
}

export function Modal({ header, children, action }:IPropsModal) {
  // const modalRef = useRef(null);

  return (
    <section className="flex flex-col justify-center items-center z-[9999] fixed inset-0 h-full w-full opacity-100 transition-opacity duration-[5000ms] ease-in bg-[rgba(0,0,0,.5)]">
      <div className="absolute md:relative rounded-2xl md:rounded-3xl max-w-[900px] sm:w-full sm:bottom-0 sm:h-full text-center z-10 bg-white"> 
        <div className="flex justify-end w-full lg:h-20 text-center p-4 ">
          <h2 className="text-white font-normal text-2xl">{header}</h2>
          <div className="lg:w-3.5 lg:top-5 lg:rounded-2xl lg:bg-transparent lg:p-0 cursor-pointer" onClick={action}>
            X
          </div>
        </div>
        <div className="font-body text-[#777777] text-[14px] p-10 sm:px-4 tracking-[1.12px] py-[6.67vw] px-[4.79vw] sm:min-h-[450px]">
          {children}
        </div>
      </div>
    </section>
  );
}