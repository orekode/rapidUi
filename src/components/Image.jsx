

export const Background = ({ children, ...props }) => {

    return (
        <div className="relative h-max ">
            <div className="relative z-10">{children}</div>
            <div className="absolute z-0 top-0 left-0 h-full w-full">
                <img alt="" className="img-cover"  {...props} />
            </div>
        </div>
    );
}