import ali from "./assets/prophoto.jpg";

function Me() {
    return (
        <>
            <div className="flex justify-center my-[110px] text-white" id="home">
                <img src={ali} className="w-[200px] h-auto rounded-2xl"></img>
                <div className="flex flex-col justify-center max-w-[600px] ml-8">
                    <h1 className="font-bold text-3xl text-center leading-[5rem] ">Ali Elnagmi</h1>
                    <p className="text-md leading-tight text-center max-w-[300px]">Aspiring SWE who's always looking to build something new</p>
                </div>
            </div>
        </>
    );
}

export default Me;