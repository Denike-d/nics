import { clearanceContent } from "@/content/landing";
import Image from "next/image";

export default function Clearance() {
  return (
    <div>
      {/* <div>
        {" "}
        <h3 className=" text-black md:text-2xl text-bold text-center mb-2">
          Import Clearance Process
        </h3>
        <p className="text-black text-center">
          Follow these simple steps to get your import clearance approved
          <br /> by NESREA.
        </p>
      </div> */}
      {/* <section className="flex flex-col md:flex-row items-center justify-between bg-[#faf7ff] p-8 md:p-16 rounded-2xl max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-0 mt-8 m-4 gap-x-12">
          {clearanceContent.map((item) => (
            <div className="" key={item.id}>
              <div className="flex h-[170px] w-[420px] mx-auto items-center rounded-md bg-black m-4 text-white">
                <div className="mx-6">
                  <h6 className="text-bold text-xl">{item.text}</h6>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>

                <div>
                  {" "}
                  <div>
                    <Image src={item.image} alt="image" width={400} />{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-[#eff5f3] py-8 px-6 md:px-32 mx-auto w-full">
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-4 rounded-[2rem] border-2 border-dashed border-green-300 p-4 bg-white">
          {[
            "/images/container.jpg",
            "/images/naira.jpg",
            "/images/box.jpg",
            "/images/verified.jpg",
          ].map((imgSrc, index) => (
            <div
              key={index}
              className="rounded-[2rem] overflow-hidden flex items-center justify-center h-48 md:h-56 bg-gradient-to-tr from-pink-100 to-purple-100"
            >
              <img
                src={imgSrc}
                alt={`Student ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right: Text Section */}
        <div className="mt-10 md:mt-0 md:ml-16 text-gray-800 max-w-md">
          <h2 className="text-3xl md:text-3xl font-bold leading-snug">
            <span className="text-green-600">Import</span> Clearance Process
          </h2>

          <div className="mt-8 space-y-6">
            {clearanceContent.map((item) => (
              <div key={item.id} className="flex items-start space-x-4">
                <div className={`p-3 bg-green-600 rounded-full`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.text}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
