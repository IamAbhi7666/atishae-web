import { component$, useStylesScoped$ } from '@builder.io/qwik';
import style from './mainfooter.css?inline'

export default component$(()=>{
    useStylesScoped$(style);

    return(
        <section class="mainfooter">
            <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-2" data-slide-to="1"></li>
                    <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    <li data-target="#carousel-example-2" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                            <div class="view">
                            <img class="d-block w-100" src="src/components/images/testimonialbg.jpg"
                                    alt="First slide"/>
                            <div class="mask rgba-black-light"></div>
                        </div>
                        <div class="carousel-caption">
                            <img src="src/components/images/icon-1.png" alt="" />
                            <h3 class="h3-responsive mb-10 text-white pb-5">
                                "....The man who put it all together in making the app what it is today! Without his guidance, wisdom and development talents, there would be no app. We are so grateful you joined the team."
                            </h3>
                            <hr />
                            <p class="pb-4">James Burke, Consensus Interactive</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="src/components/images/testimonialbg.jpg"
                                    alt="First slide"/>
                            <div class="mask rgba-black-light"></div>
                        </div>
                        <div class="carousel-caption">
                            <img src="src/components/images/icon-1.png" alt="" />
                            <h3 class="h3-responsive mb-10 text-white pb-5">
                                "Hunter and I feel that you have done such a great job in helping us to finally get this app completed and have worked so well together we would like to give you or your company some recognition."
                            </h3>
                            <hr />
                            <p class="pt-4">Tammy Hall, RethinkEducation</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="src/components/images/testimonialbg.jpg"
                                    alt="First slide"/>
                            <div class="mask rgba-black-light"></div>
                        </div>
                        <div class="carousel-caption">
                            <img src="src/components/images/icon-1.png" alt="" />
                            <h3 class="h3-responsive pb-5 text-white ">
                                "ATISHAE was instrumental in helping deliver a high-quality, mission-critical enterprise solution to dozens of Fortune 2000 customers including Dow Chemical, Pfizer, and Tyco. Working with the people at ATISHAE was a pleasure. We will continue to engage them on our future projects."
                            </h3>
                            <hr />
                            <p class="">Rob Shavell, LRN</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="src/components/images/testimonialbg.jpg"
                                    alt="First slide"/>
                            <div class="mask rgba-black-light"></div>
                        </div>
                        <div class="carousel-caption">
                            <img src="src/components/images/icon-1.png" alt="" />
                            <h3 class="h3-responsive pb-5 text-white">
                                "When you take up a task of getting 1100 people together, internal coordination and customer satisfaction becomes paramount. MOBIOFFICE was a natural fit. In a brief meeting ATISHAE knew what we required. They delivered a better app than what we expected...all desired features and its extremely user friendly."
                            </h3>
                            <hr />
                            <p class="">Karishma Sanghvi, BONTEMPS</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>
    )
})