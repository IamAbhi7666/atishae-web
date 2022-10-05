import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <header class="header">
        <div class="container mx-auto fixed top-0 left-0 right-0">
          <div class="text-white ">
            <div class="row">
              <div class="col-12 ">
                <img src="src/components/images/logo.png" alt="Logo" class="center"/>
                <ul class="flex flex-row my-8">
                  <li class="pr-4 hover:text-blue-500">
                    <a href="/" target="_self" class="font-sans text-lg"> 
                      About
                    </a>
                  </li>

                    <li class="px-4 hover:text-blue-500">
                      <a href="/" target="_self" class="font-sans text-lg">
                        Jobs
                      </a>
                    </li>

                  <li class="px-4 hover:text-blue-500">
                    <a href="/" target="_self" class="font-sans text-lg">
                      Blog
                    </a>
                  </li>

                  <li class="px-4 hover:text-blue-500">
                    <a href="/" target="_self" class="font-sans text-lg">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ul class="flex flex-row my-8 work">
                  <li class="pr-4 hover:text-blue-500">
                    <a href="serviceNav.tsx" class="text-2xl font-sans">Services</a>
                  </li>
                  <li class="px-4 hover:text-blue-500">
                    <a href="/" class="text-2xl font-sans">Out Work</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>  
    </header>
  );
});

