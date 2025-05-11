import { FaLink } from "react-icons/fa";



function Projects() {
    return (
        <>
            <div id="projects" className="max-w-2xl mx-auto mb-[5rem]">
                <div className="flex flex-col justify-center gap-3 mx-10">
                    <h1 className="text-2xl text-center font-bold text-white mt-20 mb-5">Cool projects</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr w-full gap-3">
                        <a 
                            href='https://www.bedstats.net/' 
                            target="_blank" 
                            className="transition-all text-white bg-[#1a1a1a] border-[#232423] border-[0.8px] rounded hover:bg-[#2d2d2d] hover:shadow-lg duration-300 cursor-pointer p-5 flex flex-col gap-3 relative"
                            >
                            <div className="flex flex-row">
                                <FaLink className="absolute right-5 top-5" size={25}/>
                                <div>
                                <h2 className="font-bold text-xl mt-5 ml-5">BedStats</h2>
                                <h3 className="ml-5 text-[1.2rem]">A discord statistics bot that reports in-game player information (used by over 1M people)</h3>
                                </div>
                            </div>
                            </a>
                        <a href='https://devpost.com/software/motus-alwiqt' target="_blank" className="transition-all text-white bg-[#1a1a1a] border-[#232423] border-[0.8px] rounded hover:bg-[#2d2d2d] hover:shadow-lg duration-300 cursor-pointer p-5 flex flex-col gap-3 relative">
                            <div className="flex flex-row">
                                <FaLink className="absolute right-5 top-5" size={25}/>
                                <div>
                                <h2 className="font-bold text-xl mt-5 ml-5">Motus</h2>
                                <h3 className="ml-5 text-[1.2rem]">A sight controlled wheelchair allowing for hands-free navigation</h3>
                                </div>
                            </div>
                            </a>

                            <a href='https://devpost.com/software/looklock-fwemi2' target="_blank" className="transition-all text-white bg-[#1a1a1a] border-[#232423] border-[0.8px] rounded hover:bg-[#2d2d2d] hover:shadow-lg duration-300 cursor-pointer p-5 flex flex-col gap-3 relative">
                            <div className="flex flex-row">
                                <FaLink className="absolute right-5 top-5" size={25}/>
                                <div>
                                <h2 className="font-bold text-xl mt-5 ml-5">LookLock</h2>
                                <h3 className="ml-5 text-[1.2rem]">A focus tool that tracks your eyes to keep you on track</h3>
                                </div>
                            </div>
                            </a>

                            <a href='https://devpost.com/software/budget-bites' target="_blank" className="transition-all text-white bg-[#1a1a1a] border-[#232423] border-[0.8px] rounded hover:bg-[#2d2d2d] hover:shadow-lg duration-300 cursor-pointer p-5 flex flex-col gap-3 relative">
                            <div className="flex flex-row">
                                <FaLink className="absolute right-5 top-5" size={25}/>
                                <div>
                                <h2 className="font-bold text-xl mt-5 ml-5">Budget Bites</h2>
                                <h3 className="ml-5 text-[1.2rem]">A web application that helps businesses reduce food waste</h3>
                                </div>
                            </div>
                            </a>
                        {/*<a href='https://www.youthcreativityfund.ca/success-stories/rythmhacks' target="_blank" className="transition-shadow text-white card border-[#181c3d] border-[0.8px] rounded  hover:shadow-lg duration-300 cursor-pointer p-5 flex flex-col gap-3 relative">
                            <div className="flex flex-row">
                            <FaLink className="absolute right-5 top-5" size={25}/>
                                <div>
                                    <h2 class="font-bold text-xl mt-5 ml-5">Rythm Hacks</h2>
                                    <h3 className="ml-5 text-[1.2rem]">The second largest Canadian high school hackathon of 2023</h3>
                                </div>
                            </div>
                        </a>*/}
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;