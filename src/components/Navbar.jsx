// navbar component
const Navbar = () => {
  return (
    <>
      <nav aria-label="Page Header">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-4 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="text-center sm:text-left">
              <h1 class="text-2xl font-bold text-headline sm:text-3xl">
                Javascript Drum Kit
              </h1>

              <p class="mt-1.5 text-sm text-paragraph">
                March to the beat of your own drummer! 🎉
              </p>
            </div>

            <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                class="inline-flex items-center justify-center rounded-lg border border-gray-400 px-5 py-3 text-paragraph transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span class="text-sm font-medium text-buttonText">
                  {" "}
                  View Project on Github{" "}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1.5 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>

              <button
                class="block rounded-lg bg-buttonColor px-5 py-3 text-sm font-medium text-buttonText transition hover:bg-[#eb7724] focus:outline-none focus:ring"
                type="button"
              >
                How to Play
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
