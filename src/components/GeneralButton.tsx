type GeneralButtonProps = {
    button_title: string;
    button_aria_label?: string;
    onClick?: () => void;
};

export function GeneralButton({ button_title, button_aria_label, onClick}: GeneralButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
            aria-label={button_aria_label ?? button_title}
            >
            {button_title}
        </button>
    );
}