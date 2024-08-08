import Image from "next/image";
import TitleSection from "@/components/TitleSection";
import Banner from "@/public/images/appBanner1.png";
import CompanySection from "@/components/CompanySection";
import FeatureSection from "@/components/FeatureSection";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import CallToActionSection from "@/components/CallToActionSection";

export default function Home() {
  return (
    <main>
      <section
        className="overflow-hidden 
          px-4 sm:px-6 mt-10 sm:flex gap-4 md:justify-center
              md:items-center"
      >
        <div className="flex flex-col">
          <div className="flex flex-col">
            <TitleSection
              pill="✨ Your AI Workspace, Perfected"
              title="Explore the possibilities of AI Tools with Revd.ai"
              isCurveline={true}
            />
            <div className="flex flex-col items-center w-full max-w-[350px] gap-3 py-5 mx-auto">
              <div
                className="w-full h-[46px] relative rounded-full bg-gradient-to-r p-[1px] 
            from-[#2A2A2A] to-[#737373] mt-5"
              >
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full h-full rounded-full
                 bg-brand-dark pl-6 text-[14px] 
                 placeholder:text-washed-purple-800"
                />
                <button
                  className="absolute top-1 right-2 rounded-[28px] w-[107px] h-[37px] p-[1px]
              bg-gradient-to-r bg-opacity-30"
                >
                  <span
                    className="flex items-center justify-center w-full text-white
                h-full rounded-[28px] bg-gradient-to-r  from-washed-purple-700 to-primary-purple-700"
                  >
                    Start Free
                  </span>
                </button>
              </div>
              <p className="text-[16px] text-washed-purple-600 font-medium">
                No credit card ✨ 14-days free trial
              </p>
            </div>
          </div>
          <div
            className="relative md:mt-[-45px] sm:w-full w-[750px] flex justify-center
          items-center mt-[-40px] sm:ml-0 ml-[-50px]"
          >
            <Image src={Banner} alt="Application Banner" />
            <div
              className="bottom-0 top-[40%] bg-gradient-to-t from-black/50
                left-0 right-0 absolute z-10"
            />
          </div>
        </div>
      </section>

      <CompanySection />
      <FeatureSection />
      <Testimonials />
      <PricingSection />
      <CallToActionSection />
    </main>
  );
}
