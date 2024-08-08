import { Fragment } from "react";
import clsx from "clsx";
import TitleSection from "./TitleSection";
import PricingCard from "./ui/PricingCard";
import GlassBox from "@/public/assets/glassSquare.svg";
import GlassCheck from "@/public/assets/glassSend.svg";

enum PRICING_PLAN {
  BASIC = "Basic Plan",
  PREMIUM = "Premium Plan",
  ENTERPRISE = "Enterprise Plan",
}

enum DURATION {
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY",
}

const PricingSection = () => {
  const PRICING_CARDS = [
    {
      planType: PRICING_PLAN.BASIC,
      typeName: "Basic",
      duration: "",
      price: "0",
      description: "Limited block trials for teams",
      highlightFeature: "",
      features: [
        "Unlimited blocks for teams",
        "Limited file uploads",
        "30 day page history",
      ],
    },
    {
      planType: PRICING_PLAN.PREMIUM,
      duration: DURATION.MONTHLY,
      typeName: "Premium",
      price: "29.99",
      description: "Billed annually. $14.5 billed monthly",
      highlightFeature: "Everything in free +",
      features: [
        "Unlimited blocks for teams",
        "Unlimited file uploads",
        "30 days page history",
      ],
    },
    {
      planType: PRICING_PLAN.ENTERPRISE,
      duration: DURATION.YEARLY,
      typeName: "Enterprise",
      price: "299.9",
      description: "Billed annually.",
      highlightFeature: "Everything in free +",
      features: [
        "Unlimited blocks for teams",
        "Unlimited file uploads",
        "100 days page history",
      ],
    },
  ];

  return (
    <section
      className="w-full px-4
    sm:px-6 mt-[200px] flex justify-center items-center flex-col relative"
    >
      <div className="flex justify-center items-center max-w-[60%] lg:max-w-[100%]">
        <TitleSection
          pill="Pricing Plan"
          title="Unlimited pricing plans"
          isCurveline={false}
        />
      </div>

      <div
        className="w-full max-w-xs flex flex-col-reverse lg:flex-row gap-4 justify-center
       sm:items-stretch mt-14 mx-auto
      "
      >
        {PRICING_CARDS.map((plan) => (
          <PricingCard
            key={plan.planType}
            className={clsx(
              "border rounded-2xl background-blur-3xl relative ",
              {
                "border-brand-primary-purple":
                  plan.planType === PRICING_PLAN.PREMIUM,
                "border-[#282829]": plan.planType !== PRICING_PLAN.PREMIUM,
              }
            )}
            cardHeader={
              <div className="w-full">
                {plan.planType === PRICING_PLAN.PREMIUM && (
                  <Fragment>
                    <div
                      className="w-[100%] blur-[120px]
                        rounded-full h-56 
                      bg-brand-primary-purple/80 -z-10 top-4 absolute"
                    />

                    <span className="absolute top-4 right-6">
                      <GlassBox />
                    </span>
                  </Fragment>
                )}
                <h1 className="text-3xl font-semibold text-neutrals-4">
                  {plan.typeName}
                </h1>
              </div>
            }
            cardBody={
              <div className="p-0">
                <div className="flex items-center">
                  <span className="text-sm text-neutrals-6">$</span>
                  <h5 className="text-[28px] text-neutrals-6">
                    {plan.price}
                    <span className="!text-[16px] text-neutrals-8">
                      {plan.duration === DURATION.MONTHLY
                        ? "/mo"
                        : plan.duration === DURATION.YEARLY
                        ? "/yr"
                        : ""}
                    </span>
                  </h5>
                </div>
                <p className="text-washed-purple-800">{plan.description}</p>
                <button
                  className="whitespace-nowrap w-full h-[42px] mt-4 p-[1px]
                bg-gradient-to-r from-[#201F30] to-[#666666]/30 rounded-[15px]
                "
                >
                  <span
                    className="flex items-center gap-3 justify-center w-full 
                  h-full rounded-[15px]
                  bg-gradient-to-tr from-black to-[#46445b]/5
                  text-[17px] font-normal text-[#8D8C95]"
                  >
                    {plan.planType === PRICING_PLAN.ENTERPRISE
                      ? "Contact Us"
                      : "Get Started"}
                  </span>
                </button>
              </div>
            }
            cardFooter={
              <>
                <p className="font-normal text-[14px] text-white mb-4">
                  {plan.highlightFeature}
                </p>
                <ul className="font-normal flex mb-2 flex-col gap-3">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-neutrals-6 text-[15px]"
                    >
                      <GlassCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
