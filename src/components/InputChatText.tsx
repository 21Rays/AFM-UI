export function InputChatText(){
    return(
        //accept a chat prompt
        <input
            id="InputChatText"
            type="text"
            name="InputChatText"
            placeholder="ask"
            aria-label="ask"
            className="h-14 w-full min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus: focus:ring-2 focus:ring-gray-100"
            />
    );
}