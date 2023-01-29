import howToPlay from "../images/how-to-play.png";
import Button from "../helper/Button";
import { Link } from "react-router-dom";

/*************************************
 *
 * Tutotrial Page
 *
 *************************************/

const Tutorial = () => {
  /************************
   * KeyMappings array for button
   ***********************/
  const keyMappings = [
    { key: "Q", name: "Crash Key" },
    { key: "W", name: "Mid-Tom Key" },
    { key: "E", name: "High-Tom Key" },
    { key: "R", name: "Hi-hat Open Key" },
    { key: "A", name: "Floor-Tom Key" },
    { key: "S", name: "Kick Key" },
    { key: "D", name: "Snare Key" },
    { key: "F", name: "Hi-hat Close Key" },
  ];
  return (
    <>
      <section className="p-3 sm:p-6">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          {/*  how-to-play image*/}
          <img
            src={howToPlay}
            alt="how-to-play"
            className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500"
          />
          <div className="w-full px-6 py-4 sm:px-12 md:px-16 xl:col-span-2 rounded-3xl bg-gradient-to-b from-[#0000000d] to-[#edf1f4] shadow-volumeSliderShadow sm:p-6">
            <h1 className="text-2xl sm:text-4xl font-semibold pb-4 font-serif">
              Key Mappings
            </h1>
            {/* key mappings */}
            <div
              className="p-8 pt-4 bg-gray-200 outline-0 shadow-volumeSliderRangeShadow rounded-lg"
              aria-modal="true"
              role="dialog"
              tabIndex="-1"
            >
              <div className="mt-4 space-y-6">
                <ul className="space-y-4">
                  {" "}
                  {keyMappings.map((mapping, index) => (
                    <li key={index} className="flex items-center">
                      <Button
                        btnName={mapping.key}
                        className="w-12 h-12 rounded"
                      />
                      <div className="ml-4">
                        <h3 className="text-sm text-gray-900">
                          {mapping.name}
                        </h3>
                        <dl className="mt-0.5 space-y-px text-left text-[12px] text-gray-600">
                          <div>
                            <dt className="inline">Key: </dt>
                            <dd className="inline">{mapping.key}</dd>
                          </div>
                        </dl>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* btn to home */}
                <div className="space-y-4 text-center">
                  <Link to="/">
                    <Button
                      btnName={"Let's Beat "}
                      className="w-full px-5 py-3 transition rounded sm:text-md"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tutorial;
