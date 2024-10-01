<script>
  let showCopyTooltip = false;

  let installPreview = false;

  import commandHandlerIllustration from '$lib/assets/command_icon.webp';
  import localizationHandlerIllustration from '$lib/assets/localization.jpg';
  import databaseIllustration from '$lib/assets/database.png';
  import apiIllustration from '$lib/assets/api.png';

  const faqs = [{
    question: "What is Zumito?",
    answer: "Zumito is a framework for Discord bot development. It is built on top of Discord.js and provides a lot of features to make your life easier."
  }, {
    question: "Why should I use Zumito framework?",
    answer: "Zumito is built with the developer in mind. It provides a lot of features to make your life easier. It also has a lot of documentation and we are working on make a great community."
  }, {
    question: "How do I get started?",
    answer: "You can get started by reading the documentation. You can also join our Discord server to get help from the community."
  }, {
    question: "Can i contribute to the project?",
    answer: "You can contribute by reporting bugs, suggesting features, or even by contributing to the codebase. You can also join our Discord server to get help from the community."
  }]

  function onShowCopyTooltip(e) {
    const element = e.currentTarget;
    navigator.clipboard.writeText('npx zumito-cli create project');
    element.classList.add('tooltip-open', 'tooltip');
    setTimeout(() => {
      element.classList.remove('tooltip-open', 'tooltip');
    }, 1200);
  }
</script>

<main class="space-y-20 bg-white">
  <div class="relative" id="home">
    <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40">
        <div class="h-56 bg-gradient-to-br from-rose-600 to-purple-400 blur-[106px]"></div>
        <div class="h-32 bg-gradient-to-r from-pink-400 to-sky-300 blur-[106px]"></div>
    </div>
    <div class="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
      <div class="relative ml-auto pt-36">
        <div class="mx-auto text-center lg:w-2/3">
          <h1 class="text-4xl font-bold text-gray-900 md:text-5xl xl:text-6xl">
            <div data-cursor="text">
              Discord bot development 
            </div>
            <span class="text-rose-600" data-cursor="block">Reimagined.</span>
          </h1>
          <p class="mt-8 text-gray-700" data-cursor="text">
            Unleash your creativity and build top-notch Discord bots in no time with our user-friendly framework
          </p>

          <div class="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
            <a data-cursor="block" href="https://docs.zumito.dev/docs/custom/quickstart" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-rose-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
              <span class="relative text-base font-semibold text-white">Quick start</span>
            </a>
            <a  data-cursor="block" href="#features" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-rose-600/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
              <span class="relative text-base font-semibold text-rose-600">Learn more</span>
            </a>
          </div>
          <button class="tooltip-bottom relative m-auto mt-5 w-full max-w-sm" data-tip="Copied to clipboard!" data-cursor="block" on:click={onShowCopyTooltip}>
            
            <div class="mx-auto flex w-[250px] max-w-sm items-center justify-between rounded-md border border-gray-800 bg-white px-4 py-3 font-mono text-sm text-gray-800" style="width:100%">
              <div class="flex w-full gap-1">
                  <span>$</span>
                  <span>npx zumito-cli create project</span>
              </div>
              <span class="flex h-5 w-5 cursor-pointer text-gray-800 duration-200 hover:text-gray-400">
                  <svg class="fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 115.77 122.88" style="enable-background:new 0 0 115.77 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"/></g></svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div id="features" class="mx-auto max-w-7xl bg-white p-4 lg:p-12">

    <h2 class="s-y_bCXRrkrYfP text-center text-2xl font-bold text-gray-800 md:text-4xl" data-cursor="text">What we offer?</h2>

    <div class="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">

      <div class="overflow-hidden rounded-2xl bg-blue-50 p-4 lg:p-12">
        <div class="flex items-center text-blue-500">
          <p class="text-sm font-bold uppercase" data-cursor="block">Command Handler</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <h2 class="mt-4 text-3xl font-semibold text-slate-800">Handle all the commands with ease</h2>
        <p class="mt-4 text-lg text-slate-600">Advanced command handling, arguments, multilanguage, slash commands, prefix commands, etc.</p>
        <div class="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
            <img src={commandHandlerIllustration} class="h-auto w-[300px]" alt="command handler illustration" />
        </div>
      </div>

      <div class="overflow-hidden rounded-2xl bg-pink-50 p-4 lg:p-12">
        <div class="flex items-center text-pink-500">
          <p class="text-sm font-bold uppercase" data-cursor="block">Localization system</p>

          <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <h2 class="mt-4 text-3xl font-semibold text-slate-800" data-cursor="text">let your bot reach all corners of the world</h2>

        <p class="mt-4 text-lg text-slate-600" data-cursor="text">Multilingual support is a valuable feature that allows reaching a global audience, improves accessibility and user experience, and increases competitiveness in the market.</p>

        <div class="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
          <img src={localizationHandlerIllustration} class="h-auto w-[300px]" alt="command handler illustration" />
        </div>
      </div>

      <div class="overflow-hidden rounded-2xl bg-green-50 p-4 lg:p-12">
        <div class="flex items-center text-green-500">
          <p class="text-sm font-bold uppercase" data-cursor="block">Database handler</p>

          <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <h2 class="mt-4 text-3xl font-semibold text-slate-800" data-cursor="text">Your server, your settings</h2>

        <p class="mt-4 text-lg text-slate-600" data-cursor="text">The framework offers flexibility and convenience by allowing you to easily store any type of information in any database engine of your choice.</p>

        <div class="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
          <img src={databaseIllustration} class="h-auto w-[300px]" alt="command handler illustration" />
        </div>
      </div>

      <div class="overflow-hidden rounded-2xl bg-purple-50 p-4 lg:p-12">
        <div class="flex items-center text-purple-500">
          <p class="text-sm font-bold uppercase" data-cursor="block">API Handler</p>

          <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <h2 class="mt-4 text-3xl font-semibold text-slate-800"data-cursor="text">Serve info to third party apps.</h2>

        <p class="mt-4 text-lg text-slate-600"data-cursor="text">The framework allows you to share information easily through a REST API, allowing you to connect applications and systems in an efficient and easy way.</p>

        <div class="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
          <img src={apiIllustration} class="h-auto w-[300px]" alt="command handler illustration" />
        </div>
      </div>

    </div>
  </div>

    <div class="min-h-sceen mx-auto max-w-7xl bg-white px-5">
        <div class="flex flex-col items-center">
            <h2 class="text-center text-4xl font-bold text-gray-800 md:text-5xl" data-cursor="text">
                Not enough?
            </h2>
            <p class="text-center text-xl text-gray-600" data-cursor="text">
                We have more features to offer.
            </p>
        </div>
        <div class="mt-4 grid grid-cols-1 gap-4 px-2 md:grid-cols-2 xl:gap-12 xl:px-12">
            <div class="mt-8 flex space-x-8">
                <div>
                    <svg data-cursor="block" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 stroke-current text-pink-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"></path>
                        <path d="M20 4v5h-5"></path>
                     </svg>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-gray-700" data-cursor="text">Hot reloading</h4>
                    <p class="my-2 text-gray-600" data-cursor="text">
                        Modify a command and they will be reloaded automatically without having to restart the bot.
                    </p>
                    <a href="#" class="capitalize text-blue-600 hover:text-blue-800 hover:underline" title="Read More" data-cursor="block">Read More</a>
                </div>
            </div>
            
            <div class="mt-8 flex space-x-8">
                <div>
                    <svg data-cursor="block" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 stroke-current text-pink-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
                        <path d="M12 9l0 3"></path>
                        <path d="M12 15l.01 0"></path>
                     </svg>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-gray-700" data-cursor="text">D.R.Y. Principles</h4>
                    <p class="my-2 text-gray-600" data-cursor="text">
                        The framework is designed to be as DRY as possible, allowing you to reuse code and keep your codebase clean. This is achieved by implementing an event handler, command handler, localization handler and a lot more.
                    </p>
                    <a href="#" class="capitalize text-blue-600 hover:text-blue-800 hover:underline" title="Read More" data-cursor="block">Read More</a>
                </div>
            </div>

            <div class="mt-8 flex space-x-8">
                <div>
                    <svg data-cursor="block" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-gray-700" data-cursor="text">Great CLI</h4>
                    <p class="my-2 text-gray-600" data-cursor="text">
                        The framework comes with a great CLI that allows you to create commands, events, and more with ease. It boilerplates the code for you and even allows you to create a new project.
                    </p>
                    <a href="#" class="capitalize text-blue-600 hover:text-blue-800 hover:underline" title="Read More" data-cursor="block">Read More</a>
                </div>
            </div>

            <div class="mt-8 flex space-x-8">
                <div>
                    <svg data-cursor="block" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-pink-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 9v-1a3 3 0 0 1 6 0v1"></path>
                        <path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3"></path>
                        <path d="M3 13l4 0"></path>
                        <path d="M17 13l4 0"></path>
                        <path d="M12 20l0 -6"></path>
                        <path d="M4 19l3.35 -2"></path>
                        <path d="M20 19l-3.35 -2"></path>
                        <path d="M4 7l3.75 2.4"></path>
                        <path d="M20 7l-3.75 2.4"></path>
                     </svg>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-gray-700" data-cursor="text">Error handling</h4>
                    <p class="my-2 text-gray-600" data-cursor="text">Built-in error handling and logging for better debugging and troubleshooting.</p>
                    <a href="#" class="capitalize text-blue-600 hover:text-blue-800 hover:underline" title="Read More" data-cursor="block">Read More</a>
                </div>
            </div>

        </div>
    </div>

    <div class="min-h-sceen mx-auto max-w-7xl bg-white px-5 pt-16">
        <div class="flex flex-col items-center">
            <h2 class="text-center text-4xl font-bold text-gray-800 md:text-5xl" data-cursor="text">
                Next steeps?
            </h2>
            <p class="text-center text-xl text-gray-600" data-cursor="text">
                We don't stop here, we are working on new features and improvements to make the framework even better.<br>Here are some of the things we are working on
            </p>
        </div>

        <div class="w-full px-2 py-3 sm:mx-auto sm:max-w-2xl sm:px-0">

            <div class="relative text-sm font-semibold text-gray-700 antialiased">
        
              <!-- Vertical bar running through middle -->
              <div class="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-pink-300 sm:block"></div>
        
              <!-- Left section, set by justify-start and sm:pr-8 -->
              <div class="mt-6 sm:mb-12 sm:mt-0">
                <div class="flex flex-col items-center sm:flex-row">
                  <div class="mx-auto flex w-full items-center justify-start">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <div class="rounded bg-white p-4 shadow" data-cursor="text">
                        rate limiting and throttling to prevent abuse of bot commands
                      </div>
                    </div>
                  </div>
                  <div class="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-4 border-white bg-pink-500 sm:translate-y-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
              </div>
        
              <!-- Right section, set by justify-end and sm:pl-8 -->
              <div class="mt-6 sm:mb-12 sm:mt-0">
                <div class="flex flex-col items-center sm:flex-row">
                  <div class="mx-auto flex w-full items-center justify-end">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="rounded bg-white p-4 shadow" data-cursor="text">
                        Integration with error managers like sentry
                      </div>
                    </div>
                  </div>
                  <div class="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-4 border-white bg-pink-500 sm:translate-y-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
              </div>
        
              <!-- Left section, set by justify-start and sm:pr-8 -->
              <div class="mt-6 sm:mb-12 sm:mt-0">
                <div class="flex flex-col items-center sm:flex-row">
                  <div class="mx-auto flex w-full items-center justify-start">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <div class="rounded bg-white p-4 shadow" data-cursor="text">
                        Analitycs system. track usage and data about your bot
                      </div>
                    </div>
                  </div>
                  <div class="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-4 border-white bg-pink-500 sm:translate-y-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
        
              <!-- Right section, set by justify-end and sm:pl-8 -->
              <div class="mt-6 sm:mt-0">
                <div class="flex flex-col items-center sm:flex-row">
                  <div class="mx-auto flex w-full items-center justify-end">
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="rounded bg-white p-4 shadow" data-cursor="text">
                        Test system for automated unit tests
                      </div>
                    </div>
                  </div>
                  <div class="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-4 border-white bg-pink-500 sm:translate-y-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                </div>
              </div>
        
        
        
            </div>
        
          </div>
    </div>

  <div id="features" class="mx-auto max-w-6xl bg-white p-4 lg:p-12">
    <h2 class="s-y_bCXRrkrYfP text-center text-2xl font-bold text-gray-800 md:text-4xl" data-cursor="text">Why trust us?</h2>
    <p class="text-justify" data-cursor="text">
      We have been working on our own technology for years, but after two years of effort, we realized that we needed a solid and reliable base to continue. 
      That's when we started working within the Zumito framework.
    </p>
    <br>
    <p class="text-justify" data-cursor="text">
      We are a team with a 'dogfooding' philosophy, that is, we use our own technology to make sure it is of high quality before offering it to other developers. 
      This allows us to be sure that we offer an exceptional and reliable tool for developers looking to build quality bots. 
      Our experience and dedication are the guarantee that our technology is reliable and secure. Give it a try and check it by yourself.
    </p>
  </div>

  <div class="mx-auto max-w-7xl bg-white p-4 lg:p-12">
    <h2 class="s-y_bCXRrkrYfP text-center text-2xl font-bold text-gray-800 md:text-4xl" data-cursor="text">Partners</h2>
    <p class="text-center text-xl text-gray-600" data-cursor="text">
      We are proud to be part of the following communities
    </p>
    <div class="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

      <div class="w-96 rounded-lg bg-white p-6 shadow-md">
        <div class="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded bg-gray-300">
            <svg class="h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
        </div>
        <h2 class="mb-4 mt-6 text-center text-2xl font-bold">
          <div class="mx-auto h-[20px] w-full max-w-[50%] rounded-lg bg-gray-200"></div>
        </h2>
        <div class="mb-8 text-center text-gray-600">
          <div class="mx-auto mt-4 h-[10px] w-full max-w-[85%] rounded-lg bg-gray-200"></div>
          <div class="mx-auto mt-2 h-[10px] w-full max-w-[70%] rounded-lg bg-gray-200"></div>
        </div>
        <div class="mb-4 flex justify-center">
          <button class="h-10 min-w-[80%] rounded bg-gray-400 px-4 py-2 font-bold text-white hover:bg-gray-500"></button>
        </div>
      </div>

      <div class="w-96 rounded-lg bg-white p-6 shadow-md">
        <img src="https://images-ext-2.discordapp.net/external/OFT7Osw4siY8L8XVpjq4VwHmEn4VNbFRxycLNerYpT0/https/portalmybot.com/assets/img/logo-guia.png?width=514&height=513" alt="MyBot Team logo" class="mx-auto mb-4 h-24 w-24">
        <h2 class="mb-2 text-center text-2xl font-bold" data-cursor="text">MyBot Team</h2>
        <p class="mb-4 text-center text-gray-600" data-cursor="text">Join our Discord server or visit our website to learn more about us.</p>
        <div class="mb-4 flex justify-center">
          <a href="https://discord.gg/g6ssSmK" class="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600" data-cursor="block">Join Discord</a>
          <a href="https://portalmybot.com/?ref=framework.zumito.dev" class="rounded bg-gray-400 px-4 py-2 font-bold text-white hover:bg-gray-500" data-cursor="block">Visit Website</a>
        </div>
      </div>

      <div class="w-96 rounded-lg bg-white p-6 shadow-md">
        <div class="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded bg-gray-300">
            <svg class="h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
        </div>
        <h2 class="mb-4 mt-6 text-center text-2xl font-bold">
          <div class="mx-auto h-[20px] w-full max-w-[50%] rounded-lg bg-gray-200"></div>
        </h2>
        <div class="mb-8 text-center text-gray-600">
          <div class="mx-auto mt-4 h-[10px] w-full max-w-[85%] rounded-lg bg-gray-200"></div>
          <div class="mx-auto mt-2 h-[10px] w-full max-w-[70%] rounded-lg bg-gray-200"></div>
        </div>
        <div class="mb-4 flex justify-center">
          <button class="h-10 min-w-[80%] rounded bg-gray-400 px-4 py-2 font-bold text-white hover:bg-gray-500"></button>
        </div>
      </div>

    </div>
  </div>
  

  <div class="relative py-16">
    <div aria-hidden="true" class="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40">
      <div class="h-56 bg-gradient-to-br from-rose-600 to-purple-400 blur-[106px]"></div>
      <div class="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px]"></div>
    </div>
    <div class="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
      <div class="relative">
        <div class="flex items-center justify-center -space-x-2" style="display:none;">
          <!-- <img loading="lazy" width="400" height="400" src="./images/avatars/avatar.webp" alt="member photo" class="h-8 w-8 rounded-full object-cover">
          <img loading="lazy" width="200" height="200" src="./images/avatars/avatar-2.webp" alt="member photo" class="h-12 w-12 rounded-full object-cover">
          <img loading="lazy" width="200" height="200" src="./images/avatars/avatar-3.webp" alt="member photo" class="z-10 h-16 w-16 rounded-full object-cover">
          <img loading="lazy" width="200" height="200" src="./images/avatars/avatar-4.webp" alt="member photo" class="relative h-12 w-12 rounded-full object-cover">
          <img loading="lazy" width="200" height="200" src="./images/avatars/avatar-1.webp" alt="member photo" class="h-8 w-8 rounded-full object-cover"> -->
        </div>
        <div class="m-auto mt-6 space-y-6 md:w-8/12 lg:w-7/12">
          <h1 class="text-center text-4xl font-bold text-gray-800 md:text-5xl" data-cursor="text">Get Started now</h1>
          <p class="text-center text-xl text-gray-600" data-cursor="text">
            Build your next project with zumito framework and start saving time.
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <a href="https://docs.zumito.dev/docs/custom/quickstart" data-cursor="block" class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-rose-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
              <span class="relative text-base font-semibold text-white">Get Started</span>
            </a>
            <a href="https://docs.zumito.dev/docs/quick-start" data-cursor="block" class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-rose-600/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
              <span class="relative text-base font-semibold text-rose-600">More about</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-center bg-white">
    <div class="text-center">
      <div class="text-7xl leading-5 text-blue-300">”</div>
      <div class="max-w-xl text-xl font-medium" data-cursor="text">
        Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.
      </div>
      <div class="mt-5">
        <span class="font-bold" data-cursor="text">Patrick McKenzie</span>
      </div>
    </div>
  </div>


  <div class="min-h-sceen mx-auto max-w-7xl px-5">
    <div class="flex flex-col items-center">
      <h2 class="text-center text-4xl font-bold text-gray-800 md:text-5xl" data-cursor="text">
        FAQ
      </h2>
      <p class="text-center text-xl text-gray-600" data-cursor="text">
        Frequenty asked questions
      </p>
    </div>
    <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
      {#each faqs as item}
        <div class="py-5">
          <details class="group">
            <summary class="flex list-none items-center justify-between font-medium" data-cursor="block">
              <span>{item.question}</span>
              <span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p class="group-open:animate-fadeIn mt-3 text-neutral-600" data-cursor="text">
              {item.answer}
            </p>
          </details>
        </div>
      {/each}
    </div>
  </div>

  <!-- <section class="bg-white">
    <div class="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <Command></Command>
    </div>
  </section> -->

  <section class="bg-white">
    <div class="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <nav class="-mx-5 -my-2 flex hidden flex-wrap justify-center">
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    About
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Blog
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Team
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Pricing
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Contact
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Terms
                </a>
            </div>
        </nav>
        <div class="mt-8 flex justify-center space-x-6">
            <a data-cursor="block" href="https://discord.gg/rFywZxgsyF" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Discord</span>
                <svg class="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 -28.5 256 256" version="1.1" preserveAspectRatio="xMidYMid">
                    <g>
                        <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="currentColor" fill-rule="nonzero"></path>
                    </g>
                </svg>
            </a>
            <a data-cursor="block" href="https://github.com/ZumitoTeam/zumito-framework" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">GitHub</span>
                <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
        <p data-cursor="text" class="mt-8 text-center text-base leading-6 text-gray-400">
            ZumitoTeam { new Date().getFullYear() }
        </p>
    </div>
</section>

</main>

<!--

  https://tailwindcomponents.com/component/logo-cloud
  https://tailwindcomponents.com/component/about-section
  https://tailwindcomponents.com/component/free-tailwind-css-list-component
  https://tailwindcomponents.com/component/free-tailwind-css-cloud-logo-component
  https://tailwindcomponents.com/component/free-tailwind-css-404-page-component
  https://tailwindcomponents.com/component/tailwind-css-404-error-page
  https://tailwindcomponents.com/component/tailwind-css-faq-page
  https://tailwindcomponents.com/component/testimonials-block
  https://tailwindcomponents.com/component/responsive-vertical-timeline-1
  

-->

<style>
  :global(.asciicast) {
    margin: 0 !important;
  }
</style>
