import React from "react";

function Work(){
    return(
        <>
            <section className="flex flex-wrap max-w-fit flex items flex justify-center items-center min-h-screen m-auto" >
            <div class="flex min-h-screen items-center justify-center ">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mr-auto ml-auto">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 m-8">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="vexxa-icon.png"/>
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 "></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-1000 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">VEXXA</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Using Android Studio we Created a application called
        Vexxa. It is a Quiz game mobile application  that has a Log in and Sign up 
        function and has a categorie of grammar(Filipino and English), trivia, and brain teaser(Puzzles).</p>
      </div>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 m-8">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="baguio-girl-coffee-icon.png"/>
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-1000 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Baguio Girl Coffee</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        It is a E-COMMERCE web based using PHP for front-end and
        MySQL for back-end, it is a website that you can order coffee and foods.</p>
      </div>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 m-8">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="wakeg2.png"/>
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-1000 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Multipage Website</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        A multipage website is a collection of web pages, each with its own HTML, CSS, and JavaScript code. Allowing users to move between different sections and access various content and features. HTML structures the content, 
        CSS styles the design, and JavaScript adds interactivity.
        </p>
        
      </div>
    </div>
  </div>
  <div class="fixed bottom-16">
  </div>
</div>

            </section>

        </>
    );
}
export default Work