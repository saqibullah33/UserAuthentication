
 const LoginLoader = () => {
    return (

        <div className="flex gap-3  align-content-center">

            <div><h1>Loading... </h1></div>
            <div
                className="inline-block h-5 w-5 align-items-center my-auto animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>

            </div>
        </div>


    )
}


export default LoginLoader