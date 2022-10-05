import { component$, useStylesScoped$ } from '@builder.io/qwik';
import style from './footer.css?inline'

export  default component$(()=>{
    useStylesScoped$(style);

    return(
        <footer class="footer ">
            <section class="heroImg2">
                <div class="container mx-auto">
                    <div class="row">
                        <div class="col-6">
                            <p class="animated animatedFadeInUp fadeInUp mb-5">
                                    Helping businesses grow faster by providing<br/>
                                    <strong> engineering </strong> and
                                    <strong> consulting</strong> services to design,<br/> build and
                                    deploy the most appropriate<br/> technology solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
})
