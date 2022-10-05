import { component$, useStylesScoped$ } from '@builder.io/qwik';
import style from './lastfooter.css?inline'

export default component$(()=>{
    useStylesScoped$(style);

    return(
        // <section class ="lastfooter">
        //     <section class="container mx-auto">
        //         <div class="grid-rows-1">
        //             <div class="grid-cols-1 text-white ">
        //                 <h1 class="font-bold text-5xl">Changing your world?</h1>
        //                 <br/>
        //                 <h2 class="pb-3 text-2xl text-gray-300">We collaborate with ambitious brands and people; we’d love to build something great together.</h2>
        //                 <div class="contfootbtn">	    									
        //                     <button class="btn btn-primary"><a href="contact.html">Write to us</a></button>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </section>
        <footer class="lastfooter ">
            <section class="heroImg4">
                <div class="container mx-auto">
                    <div class="row">
                        <div class="col-6">
                            <div class="my-5">
                                <h1 class="font-bold text-4xl text-white">Changing your world?</h1>
                                <br/>
                                <h2 class="pb-3 text-2xl text-gray-300 my-2">We collaborate with ambitious brands and people; we’d <br /> love to build something great together.</h2>
                                <div class="contfootbtn">	    									
                                    <button class="ease-in-out bg-blue-500 hover:bg-white hover:text-black rounded-full px-10 py-2"><a href="#">Write to us</a></button>
                                </div>
                            </div>
                            <div class="col-12 ">
                                <div class="caption">
                                    <a href="" class="text-gray-300 text-sm">© ATISHAE 2001-2020</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
        
    )
})