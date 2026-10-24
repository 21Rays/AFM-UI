type InputChatTextProps = {
  value: string;
  onChange: (value: string) => void;
};

export function InputChatText({ value, onChange }: InputChatTextProps) {
  return (
    //accept a chat prompt
    <input
      id="InputChatText"
      type="text"
      name="InputChatText"
      placeholder="ask"
      aria-label="ask"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-14 w-full min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-gray-100"
    />
  );
}