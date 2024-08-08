import clsx from "clsx";
import React, { FC, ReactNode } from "react";

type PricingCardProps = {
  className?: string;
  cardHeader?: ReactNode;
  cardBody?: ReactNode;
  cardFooter?: ReactNode;
};

const PricingCard: FC<PricingCardProps> = ({
  className,
  cardFooter,
  cardBody,
  cardHeader,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 relative shrink-0 w-[300px] min-h-[328px] px-[30px] py-[25px] bg-[#020014]/50",
        className
      )}
    >
      <div className="card-header">{cardHeader}</div>
      <div className="card-body">{cardBody}</div>
      <div className="card-footer">{cardFooter}</div>
    </div>
  );
};

export default PricingCard;
