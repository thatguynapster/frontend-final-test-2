"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Compass from "./icons/compass";
import Board from "./icons/board";
import Collections from "./icons/collections";
import Brands from "./icons/brands";
import { ChevronsLeft, Ellipsis, Lock, Plus } from "lucide-react";
import { useWidth } from "@/hooks/useWidth";
import { classNames } from "@/lib/helpers";
import clsx from "clsx";
import LockedBadge from "./locked-badge";

type Props = {};

const Sidebar = (props: Props) => {
  const width = useWidth();
  const isMobile = width! < 480;

  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    if (!isMobile) return setCollapse(false);

    return () => {
      setCollapse(true);
    };
  }, [width]);

  const navOptions = [
    {
      active: false,
      icon: <Compass />,
      text: "Inspiration",
    },
    {
      active: false,
      icon: <Board />,
      text: "Templates",
    },
    {
      active: false,
      icon: <Collections />,
      text: "Collections",
    },
    {
      active: false,
      icon: <Brands />,
      text: "Brands",
    },
  ];

  const features = [
    {
      text: "Hidden gems",
      locked: true,
    },
    {
      text: "Evergreen ads",
      locked: true,
    },
    {
      text: "Testing lab",
      locked: true,
    },
  ];

  return (
    <div
      className={clsx(
        "w-full h-[calc(100vh-5rem)]",
        "bg-[#F5F5F580] border-r border-[#B4B4B4] overflow-y-auto relative",
        { "p-5 max-w-[250px]": !collapse },
        { "p-2.5 max-w-16 overflow-x-hidden": collapse },
        "flex flex-col justify-between transition-all"
      )}
    >
      <button
        className={clsx(
          "absolute z-30 p-4",
          { "right-1 top-7": !collapse },
          { "-right-5": collapse }
        )}
        onClick={(ev) => {
          ev.stopPropagation();
          setCollapse(!collapse);
        }}
      >
        <ChevronsLeft size={collapse ? 18 : 12} />
      </button>

      <div className="flex flex-col mb-auto">
        <div className="flex flex-col">
          {navOptions.map(({ active, icon, text }) => (
            <NavOption key={text} {...{ active, collapse, icon, text }} />
          ))}
        </div>

        <hr className="my-4 bg-[#B4B4B4]" />

        <div className="flex flex-col gap-2.5">
          {!collapse && (
            <>
              <p className="uppercase font-semibold text-xs text-[#7F7F7F]">
                featured
              </p>

              <div>
                {features.map(({ locked, text }) => (
                  <FeatureOption key={text} {...{ locked, text }} />
                ))}
              </div>
            </>
          )}
        </div>

        <hr className="my-4 bg-[#B4B4B4]" />

        <div className="flex flex-col gap-2.5">
          {!collapse && (
            <>
              <div className="flex justify-between pl-5">
                <p className="uppercase font-semibold text-xs text-[#7F7F7F]">
                  Saved
                </p>

                <Plus size={12} />
              </div>

              <div>
                <div className="w-[150px] h-[1px] bg-gradient-to-r from-[#A259FF] to-[#613599] rotate-90 origin-top-left"></div>

                <div className="pl-5">
                  <div className="flex gap-5 py-2.5 px-5">
                    <p className="text-sm font-medium">All saved</p>
                  </div>

                  <div className="flex gap-5 justify-between py-2.5 px-5">
                    <p className="text-sm font-medium">Board name</p>
                    <Ellipsis size={12} />
                  </div>

                  <div className="flex gap-5 justify-between py-2.5 px-5">
                    <p className="text-sm font-medium">Board name</p>
                    <Ellipsis size={12} />
                  </div>

                  <div className="flex gap-5 justify-between py-2.5 px-5">
                    <p className="text-sm font-medium">Board name</p>
                    <Ellipsis size={12} />
                  </div>

                  <div className="flex gap-5 justify-between py-2.5 px-5">
                    <p className="text-sm font-medium">Board name</p>
                    <Ellipsis size={12} />
                  </div>

                  <div className="flex gap-5 justify-between py-2.5 px-5">
                    <p className="text-sm font-medium">Board name</p>
                    <Ellipsis size={12} />
                  </div>
                </div>
              </div>

              <div className="flex gap-5 justify-between py-2.5 px-5">
                <p className="text-sm font-medium">View all boards</p>
              </div>
            </>
          )}
        </div>

        <hr className="my-4 bg-[#B4B4B4]" />

        <div className="flex flex-col gap-2.5 mb-auto">
          {!collapse && (
            <>
              <p className="font-medium">Settings</p>
              <p className="font-medium">Help & Feedback</p>
              <p className="font-medium whitespace-nowrap">
                Join the CreativeOS Slack
              </p>
            </>
          )}
        </div>

        <hr className="my-4 bg-[#B4B4B4]" />
      </div>

      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-full bg-[#A259FF]"></div>
        {!collapse && <p className="font-medium">My Account</p>}
      </div>
    </div>
  );
};

export default Sidebar;

const NavOption = ({
  active,
  collapse,
  icon,
  text,
}: {
  active: boolean;
  collapse: boolean;
  icon?: ReactNode;
  text: string;
}) => {
  return (
    <button
      className={clsx("font-semibold rounded-md", {
        "bg-gradient-to-b from-[#A259FF] to-[#613599] p-[1px]": active,
      })}
    >
      <span
        className={clsx(
          "flex w-full rounded-md gap-2.5",
          {
            "bg-[#F5F5F5]": active,
          },
          { "py-4 px-5": !collapse },
          {
            "p-2.5 justify-center": collapse,
          }
        )}
      >
        {icon && icon}
        <p className={clsx("font-semibold text-sm", { hidden: collapse })}>
          {text}
        </p>
      </span>
    </button>
  );
};

const FeatureOption = ({ locked, text }: { locked: boolean; text: string }) => {
  return (
    <div className="flex gap-5 py-2.5 px-5">
      <p className="text-sm font-medium">{text}</p>
      {locked && <LockedBadge />}
    </div>
  );
};
