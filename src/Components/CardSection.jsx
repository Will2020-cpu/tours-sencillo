import React from 'react'

const CardSection = ({icon,title}) => {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="py-2 px-2 bg-yellow-500 rounded-full">
                    {icon}
                </div>
                <div>
                    <span className="text-sm uppercase font-serif">{title}</span>
                </div>
            </div>
        </>
    )
}

export default CardSection
