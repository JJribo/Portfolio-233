import React from "react";

function Education(){
    return (
        <>
        <section className="block flex flex-wrap ml-20 ">
        <div className="flex min-h-screen flex-col justify-center bg-slate-900 ml-auto mr-auto">
            <div className="group h-80 w-72 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img src="elementary-logo.jpg" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"></img>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-900 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h5 className="mb-2 font-bold tracking-tight text-yellow-50 text-3xl dark:text-white">2010-2015</h5>
                        <p className="font-normal text-amber-50 dark:text-gray-400">Graduated at</p>
                        <p className="font-bold text-amber-200 dark:text-gray-400 text-2xl">EGCS</p>
                        <p className="font-normal text-amber-50 dark:text-gray-400">Ernesting Gonzalez Central School</p>
                    </div>
                </div>
            </div>

        </div>
        <div className="flex min-h-screen flex-col justify-center bg-slate-900 ml-auto mr-auto">
            <div className="group h-80 w-72 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img src="highschool-logo.jpg" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"></img>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-900 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h5 className="mb-2 font-bold tracking-tight text-yellow-50 text-3xl dark:text-white">2015-2019</h5>
                        <p className="font-normal text-amber-50 dark:text-gray-400">Graduated at</p>
                        <p className="font-bold text-amber-200 dark:text-gray-400 text-2xl">LSCA</p>
                        <p className="font-normal text-amber-50 dark:text-gray-400">Living Stone Christian Academy</p>
                    </div>
                </div>
            </div>

        </div>
        <div className="flex min-h-screen flex-col justify-center bg-slate-900 ml-auto mr-auto">
            <div className="group h-80 w-72 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img src="seniorhigh-logo.png" className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"></img>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-900 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h5 className="mb-2 font-bold tracking-tight text-yellow-50 text-3xl dark:text-white">2019-2021</h5>
                        <p className="font-normal text-amber-50 dark:text-gray-400">Graduated at</p>
                        <p className="font-bold text-amber-200 dark:text-gray-400 text-2xl">PUCU</p>
                        <p className="font-normal text-amber-50 dark:text-gray-400">PHINMA UPANG COLLEGE OF URDANETA</p>
                    </div>
                </div>
            </div>

        </div>
        </section>

        </>
    )
}
export default Education

