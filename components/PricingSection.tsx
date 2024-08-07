import TitleSection from "./TitleSection";

const PricingSection = () => {
  const PRICING_CARDS = [
    {
      planType: "Free Plan",
      price: "0",
      description: "Limited block trials  for teams",
      highlightFeature: "",
      freatures: [
        "Unlimited blocks for teams",
        "Unlimited file uploads",
        "30 day page history",
        "Invite 2 guests",
      ],
    },
    {
      planType: "Pro Plan",
      price: "12.99",
      description: "Billed annually. $17 billed monthly",
      highlightFeature: "Everything in free +",
      freatures: [
        "Unlimited blocks for teams",
        "Unlimited file uploads",
        "1 year day page history",
        "Invite 10 guests",
      ],
    },
  ];

  const PRICING_PLANS = { proplan: "Pro Plan", freeplan: "Free Plan" };
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
    </section>
  );
};

export default PricingSection;
