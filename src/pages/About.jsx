import { useTranslation, Trans } from "react-i18next";
import Tilt from "react-parallax-tilt";

function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center py-28 overflow-hidden pt-24 px-6 pb-10 2xl:px-44 lg:px-24"
    >
      {/* Ambient orbs for depth */}
      <div className="absolute top-20 right-0 w-87.5 h-87.5 bg-secondary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-24 w-full h-full">
        {/* LEFT SIDE: Image */}
        <div className="flex justify-center cursor-pointer xl:pl-24">
          <Tilt
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            scale={1.05}
            transitionSpeed={600}
            className="tilt-box"
          >
            <div className="relative w-70 h-70 lg:w-85 lg:h-85 rounded-full p-0.75 bg-gradient-rose-indigo animate-pulse-glow">
              {/* Inner border overlay */}
              <div className="w-full h-full rounded-full p-0.75 bg-darkBg">
                <img
                  src="/lilyass.jpg"
                  alt="Ilyas Lhouari"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </Tilt>
        </div>

        {/* RIGHT SIDE: Text */}
        <div className="w-full md:w-2xl lg:w-xl 2xl:w-4xl">
          <h2 className="font-Poppins text-[2rem] lg:text-[2.8rem] font-bold mb-6 text-center lg:text-left text-white tracking-wide">
            <Trans
              i18nKey="about_title"
              components={{
                highlight: <span className="text-gradient" />,
              }}
            />
          </h2>

          <p className="font-Poppins text-[1rem] lg:text-[1.15rem] leading-[1.8] mb-5 text-white/50 text-center lg:text-left">
            <Trans
              i18nKey="about_intro"
              components={{
                highlight: (
                  <span className="text-primary font-semibold font-josefin" />
                ),
                bold: <strong className="text-white/90" />,
              }}
            />
          </p>
        </div>
      </div>
      {/* ignore it */}
      {t("")}
    </section>
  );
}

export default About;
