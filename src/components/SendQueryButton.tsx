import SendIcon from "../assets/send.svg";

export function SendQueryButton() {
  return (
    //render the send query button
    <button
      type="button"
      aria-label="Send query"
      className="group flex h-14 w-14 items-center justify-center rounded-xl bg-white text-black transition-colors hover:bg-gray-200 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-200"
    >
      <img
        src={SendIcon}
        alt=""
        aria-hidden="true"
        className="size-full brightness-0 transition"
      />
    </button>
  );
}