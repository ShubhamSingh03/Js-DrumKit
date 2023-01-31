import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

//Button Helper --import
import Button from "../helper/Button";

// Navbar Modal Component --import
import NavModal from "./NavModal";

/*******************************************
 *
 * Navbar Component
 *
 *******************************************/

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  /***************************************
   *  handleModal function
   **************************************/
  const handleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  /***************************************
   *  useLocation hook react-router-dom
   **************************************/
  const { pathname } = useLocation();

  return (
    <>
      {/***************************************
       *  Navbar
       **************************************/}
      <nav aria-label="Page Header">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              {/* title-heading */}
              <Link to="/">
                <h1 className="text-2xl font-bold text-headline sm:text-3xl">
                  Javascript Drum Kit
                </h1>
              </Link>
              {/* subtitle-heading */}
              <p className="mt-1.5 text-sm text-paragraph">
                March to the beat of your own drummer! 🎉
              </p>
            </div>
            {/* buttons/links to pages */}
            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              {/* yt video modal */}
              <button
                onClick={handleModal}
                className="inline-flex items-center justify-center rounded-lg border border-gray-400 px-5 py-3 text-paragraph transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium text-buttonText">
                  {" "}
                  Watch YouTube Demo{" "}
                </span>
              </button>
              {/* modal component & routes pages */}
              {pathname === "/" ? (
                <>
                  {modalIsOpen ? (
                    <NavModal
                      handleModal={handleModal}
                      videoId={"enKgl7wf5cM"}
                    />
                  ) : null}
                  <Link to="/tutorial">
                    <Button btnName={"How to Play?"} className="w-full" />
                  </Link>
                </>
              ) : (
                <>
                  {modalIsOpen ? (
                    <NavModal
                      handleModal={handleModal}
                      videoId={"Dnf59hzpRsU"}
                    />
                  ) : null}
                  <Link to="/">
                    <Button btnName={"Back to Home"} className="w-full" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
