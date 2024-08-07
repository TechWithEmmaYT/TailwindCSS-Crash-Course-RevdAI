import clsx from "clsx";
import React, { FC, ReactNode } from "react";

type TestimonialCardProps = {
  className?: string;
  cardHeader?: ReactNode;
  cardBody?: ReactNode;
  cardFooter?: ReactNode;
};

const TestimonialCard: FC<TestimonialCardProps> = ({
  className,
  cardFooter,
  cardBody,
  cardHeader,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col relative shrink-0 w-[507px] h-[244px] p-[25px] rounded-2xl bg-gradient-to-t from-[#030014] to-[#161427] from-[0%] to-[100%]",
        className
      )}
    >
      <div className="card-header">{cardHeader}</div>
      <div className="card-body">{cardBody}</div>
      <div className="card-footer">{cardFooter}</div>
    </div>
  );
};

export default TestimonialCard;
