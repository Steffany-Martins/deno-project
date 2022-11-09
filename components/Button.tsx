import { JSX , VNode} from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";


interface IPropsBtn {
  className?: string,
  onClick?: () => void,
  children?: VNode | string
}
export function Button({className, onClick, children}:IPropsBtn) {
  return (
    <button
      onClick={onClick}
      className={className}
      // className="rounded-3xl bg-[#1A9CFC] bg-green-10 hover:bg-black text-white w-full font-semibold leading-8"
    >
      {children}
    </button>
  );
}
