import drum from "../images/drum-set.png";

/*******************************************
 *
 * Footer Component
 *
 *******************************************/

const Footer = () => {
  return (
    <>
      <footer aria-label="Site Footer" className="">
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center items-center gap-2 text-headline sm:justify-start">
              <img src={drum} alt="drum-set" />
              Javascript Drum Kit
            </div>
            <p className="mt-4 text-center text-sm text-paragraph lg:mt-0 lg:text-right">
              Copyright &copy; 2023.{" "}
              <a href="https://shubhambhoj.in" className="uppercase">
                Shubham Singh
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
