import React from 'react'


export function CircledButton({bgColor, text, textColor, bgColorHover, dst}){
        return(
            <>
                <a href={dst} className={`px-4 py-3 bg-${bgColor} rounded-lg text-${textColor} hover:bg-${bgColorHover}`}>{text}</a>
            </>
        )
}


export function FlatButton({textColor, text, dst, bgColor}){
    return(
        <>
            <a href={dst} className={`bg-${bgColor} text-${textColor} hover:border-b-2 border-${textColor}`}>{text}</a>
        </>
    )
}

