import React, {memo} from "react";

const Button = ({text, textColor, onClick, className, icon}) => {
    return(
        <button
            type="button"
            className={`${textColor} ${className} flex justify-center items-center outline-none rounded-md hover:underline `}
            onClick={onClick}
        >
            <span className="pr-[5px] text-[19px]">{icon}</span>
            {text}
        </button>
    )
}

export default memo(Button)