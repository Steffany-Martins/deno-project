import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";


export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {

  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      className="rounded-3xl bg-green-10 hover:bg-black text-white w-full font-semibold leading-8"
      // className="rounded-3xl bg-[#1A9CFC] bg-green-10 hover:bg-black text-white w-full font-semibold leading-8"

    />
  );
}
