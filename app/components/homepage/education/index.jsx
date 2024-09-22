// @flow strict
import Image from "next/image";

import { educations } from "@/utils/data/educations";
import GlowCard from "../../helper/glow-card";

function Education() {
    return (
        <div id="education" className="relative z-50 border-t my-8 lg:my-16 border-[#25213b]">
            <Image
                src="/section.svg"
                alt="Hero"
                width={1572}
                height={795}
                className="absolute top-0 -z-10"
            />
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
                </div>
            </div>

            <div className="flex justify-center my-4 lg:py-6">
                <div className="flex items-center">
                    <span className="w-16 h-[2px] bg-[#1a1443]"></span>
                    <span className="w-fit text-white p-3 px-6 text-3xl rounded-md">
                        Education
                    </span>
                    <span className="w-16 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="py-6 lg:py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {educations.map((education) => (
                        <GlowCard key={education.id} identifier={`education-${education.id}`}>
                            <div className="p-4 relative text-white h-[200px] flex flex-col justify-evenly items-center">
                                {/* Background Image */}
                                <Image
                                    src="/blur-23.svg"
                                    alt="Decorative Background"
                                    width={1080}
                                    height={200}
                                    className="absolute bottom-0 left-0 w-full h-auto opacity-70"
                                />

                                {/* Duration Section */}
                                <div className="text-center">
                                    <p className="text-lg sm:text-xl text-[#16f2b3] -mt-12">
                                        {education.duration}
                                    </p>
                                </div>

                                {/* Content Section */}
                                <div className="relative w-full flex items-center">
                                    {/* Image Container */}
                                    <div
                                        className="absolute left-0 transition-transform duration-300 hover:scale-105 pl-3 -mt-10"> {/* Use absolute positioning and pl-4 for spacing */}
                                        <img
                                            src={education.image} // Dynamic image source
                                            alt={`Logo of ${education.institution}`} // Updated Alt Text
                                            style={{ width: `${education.imageWidth}px` }} // Dynamic width based on data
                                            className="h-auto"
                                        />
                                    </div>

                                    {/* Text Container */}
                                    <div
                                        className="absolute right-0 text-right flex flex-col justify-center mt-1 pr-1"> {/* Use absolute positioning and pr-4 for spacing */}
                                        <p className="text-lg sm:text-4xl mb-1 font-bold text-yellow-400"> {/* Added `font-bold` */}
                                            {education.title}
                                        </p>

                                        <p className="text-lg sm:text-lg mb-1 font-medium"> {/* Adjusted Font Size */}
                                            {education.degree}
                                        </p>
                                        <p className="text-xs sm:text-sm">
                                            {/* Manually break the text as needed */}
                                            {education.institution.split(' ').slice(0, 6).join(' ')} <br/>
                                            {/*{education.institution.split(' ').slice(5).join(' ')}*/}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </GlowCard>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;
