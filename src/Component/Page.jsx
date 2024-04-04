import {forwardRef} from  "react"
const Page = forwardRef((props, ref) => {
    
    return (
        <div className="demoPage bg-white" ref={ref}>
           
            {/* <h1>Page Header</h1> */}
            <div className="h-full">{props.children}</div>
            <p  className="text-gray-800 text-end text-xs pb-4">Page: {props.number}</p>
        </div>
    );
});
export default Page
