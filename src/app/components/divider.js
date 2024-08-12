"use client"

const Divider = ({ title = '', ...props }) => {
    return (
        <div className="relative mt-2 mb-2" {...props}>
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
                <span className=" font-semibold px-2 text-sm text-gray-500">{title}</span>
            </div>
        </div>
    )
}

export default Divider