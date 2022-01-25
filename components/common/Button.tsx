type ButtonPropsType = {
    text: string;
    id?: string;
    clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: "button" | "reset" | "submit";
};

const Button = ({ type, text, id, clickHandler, className }: ButtonPropsType) => (
    <button id={id} className={className} onClick={clickHandler} type={type}>
        {text}
    </button>
);

export default Button;
