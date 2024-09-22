// @flow strict

import { publications } from "@/utils/data/publication"; // Import publications
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Publication() {
    return (
        <div id="publication" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
                        Publications
                    </span>
                    <span className="w-16 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="py-8">
                <div className="gap-8 lg:gap-16">
                    <div>
                        <div className="flex flex-col gap-6">
                            {publications.map(publication => (
                                <GlowCard
                                    key={publication.id}
                                    identifier={`publication-${publication.id}`}
                                >
                                    <div className="p-3 relative z-10">
                                        <Image
                                            src="/blur-23.svg"
                                            alt="Background"
                                            width={1080}
                                            height={200}
                                            className="absolute bottom-0 opacity-80 pointer-events-none" // Added pointer-events-none
                                        />
                                        <div className="flex items-center gap-x-8 px-3 py-5">
                                            <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                                                <BsPersonWorkspace size={36} />
                                            </div>
                                            <div>
                                                {/* Publication Title */}
                                                <a
                                                    href={publication.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-base sm:text-xl mb-2 font-bold text-green-500 hover:underline relative z-20"
                                                >
                                                    {publication.title}
                                                </a>

                                                {/* Authors */}
                                                <p className="text-sm text-gray-400">
                                                    {publication.authors}
                                                </p>

                                                {/* Journal and Year */}
                                                <p className="text-sm text-gray-400 italic">
                                                    {publication.journal} {publication.year}
                                                    {publication.volume ? `, Vol. ${publication.volume}` : ""}
                                                    {publication.pages ? `, pp. ${publication.pages}` : ""}
                                                </p>

                                                {/* Highlights */}
                                                <div className="text-sm sm:text-base mb-2">
                                                    {publication.highlights.map((highlight, index) => (
                                                        <div key={index} className="text-yellow-300 mb-1">
                                                            {highlight}
                                                        </div>
                                                    ))}
                                                </div>
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

export default Publication;
