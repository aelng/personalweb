

function About() {
    return (
        <div className="flex flex-col text-white max-w-xl mx-4 md:mx-auto mt-32" id="about">
            <p className="py-1 font-bold bg-[#3d3d3d] rounded-t-lg p-4">C:\Users\ali\Desktop\about.txt</p>
            <div className="bg-[#292828] rounded-b-lg p-4">
                <p className="text-[1.2em]">
                    Hi, I'm Ali! 
                </p>
                <p className="mt-5 text-[1.2em]">
                    I'm currently studying CS @ UWaterloo. Recently, I've been learning more about ML and app development. Feel free to message me anywhere if you have something cool to share.
                </p>
            </div>
        </div>
    );
}

export default About;