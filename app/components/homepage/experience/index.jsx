// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

// Define your color palette
const highlightColors = [
    'text-blue-500',
    'text-green-500',
    'text-red-500',
    'text-yellow-500',
    'text-indigo-500',
    'text-purple-500',
    'text-pink-500',
    'text-teal-500',
    'text-orange-500',
    'text-gray-500'
];

function Experience() {
    return (
        <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <Image
                src="/section.svg"
                alt="Hero"
                width={1572}
                height={795}
                className="absolute top-0 -z-10"
            />

            <div className="flex justify-center my-4 lg:py-6">
                <div className="flex items-center">
                    <span className="w-16 h-[2px] bg-[#1a1443]"></span>
                    <span className="w-fit text-white p-3 px-6 text-3xl rounded-md">
                        Research Experience
                    </span>
                    <span className="w-16 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="py-8">
                <div className="gap-8 lg:gap-16">
                    <div>
                        <div className="flex flex-col gap-6">
                            {experiences.map(experience => (
                                <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                                    <div className="p-3 relative">
                                        <Image
                                            src="/blur-23.svg"
                                            alt="Background"
                                            width={1080}
                                            height={200}
                                            className="absolute bottom-0 opacity-80"
                                        />
                                        <div className="flex items-center gap-x-8 px-3 py-5">
                                            <div
                                                className="text-violet-500 transition-all duration-300 hover:scale-125">
                                                <BsPersonWorkspace size={36}/>
                                            </div>
                                            <div>
                                                <p className="text-base sm:text-xl mb-2 font-bold text-green-500">
                                                    {experience.title}
                                                </p>


                                                {/* Colored Highlights */}
                                                <div className="flex flex-wrap gap-2 text-sm sm:text-base mb-2">
                                                    <p className="text-sm sm:text-base text-yellow-300">
                                                        {experience.highlights}
                                                    </p>
                                                    {/*{experience.highlights.split(',').map((highlight, index) => {*/}
                                                    {/*    const colorClass = highlightColors[index % highlightColors.length];*/}
                                                    {/*    return (*/}
                                                    {/*        <span key={index} className={`${colorClass}`}>*/}
                                                    {/*            {highlight.trim()}*/}
                                                    {/*        </span>*/}
                                                    {/*    );*/}
                                                    {/*})}*/}
                                                </div>

                                                {/* Bullets */}
                                                <ul className="list-disc list-inside ml-4 text-sm sm:text-base">
                                                    {experience.bullets.map((bullet, index) => (
                                                        <li key={index}>
                                                            {bullet}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </GlowCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
