import React, { ReactNode } from "react";
import LockedBadge from "./locked-badge";
import clsx from "clsx";

type Props = {
  active: boolean;
  icon?: ReactNode;
  locked: boolean;
  text: string;
};

const FilterButton = ({ active, icon, locked, text }: Props) => {
  return (
    <button
      className={clsx("flex items-center gap-2.5 px-5 py-2.5 rounded-md", {
        "bg-gradient-to-b from-[#A259FF] to-[#613599] text-white": active,
        "border border-black": !active,
      })}
      type="button"
    >
      {icon && icon}
      {text}
      {locked && <LockedBadge />}
    </button>
  );
};

export default FilterButton;
