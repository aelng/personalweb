import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function End() {
    return(
        <>
            <div className="max-w-2xl mx-auto pb-[30px] text-darkBg dark:text-lightBg flex flex-col gap-5">
                <div className="gap-3 mx-10 items-start flex flex-col">
                    <div className="flex flex-row justify-center gap-4 mx-auto">
                        <a target="_blank" href="https://www.linkedin.com/in/ali-elnagmi/">
                            <FaLinkedin className="text-white cursor-pointer transition-transform hover:scale-110" size={50}/>
                        </a>
                        <a target="_blank" href="https://github.com/aelng">
                            <FaGithub className="text-white cursor-pointer transition-transform hover:scale-110" size={50}/>
                        </a>
                    </div>
                </div>
                <div className="mx-10 text-white text-center"><p>Copyright © aelng 2025</p></div>
            </div>
        </>
    );
}

export default End;
