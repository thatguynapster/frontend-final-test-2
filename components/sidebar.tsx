"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Compass from "./icons/compass";
import Board from "./icons/board";
import Collections from "./icons/collections";
import Brands from "./icons/brands";
import { ChevronsLeft, Ellipsis, Plus } from "lucide-react";
import clsx from "clsx";
import LockedBadge from "./locked-badge";
import useStore from "@/hooks/useStore";

type Props = {};

const Sidebar = (props: Props) => {
  const { store, setStore } = useStore();

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

  const savedList = [
    {
      text: "Board name",
    },
    {
      text: "Board name",
    },
    {
      text: "Board name",
    },
    {
      text: "Board name",
    },
    {
      text: "Board name",
    },
  ];

  return (
    <div className="absolute left-0 top-0 bottom-0 z-10">
      <div
        className={clsx(
          "h-[calc(100vh-5rem)] mt-20",
          "bg-[#F5F5F5] border-r border-[#B4B4B4] overflow-y-auto relative",
          { "p-5 w-full max-w-[250px]": !store?.sidebarCollapsed },
          { "p-2.5 w-16 overflow-x-hidden": store?.sidebarCollapsed },
          "flex flex-col justify-between transition-all"
        )}
      >
        <button
          className={clsx(
            "absolute z-30 p-4",
            { "right-1 top-7": !store?.sidebarCollapsed },
            { "-right-5": store?.sidebarCollapsed }
          )}
          onClick={(ev) => {
            ev.stopPropagation();
            setStore({ sidebarCollapsed: !store?.sidebarCollapsed });
          }}
        >
          <ChevronsLeft size={store?.sidebarCollapsed ? 18 : 12} />
        </button>

        <div className="flex flex-col mb-auto">
          <div className="flex flex-col">
            {navOptions.map(({ active, icon, text }) => (
              <NavOption
                key={text}
                {...{
                  active,
                  collapse: store?.sidebarCollapsed ?? false,
                  icon,
                  text,
                }}
              />
            ))}
          </div>

          <hr className="my-4 bg-[#B4B4B4]" />

          <div className="flex flex-col gap-2.5">
            {!store?.sidebarCollapsed && (
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
            {!store?.sidebarCollapsed && (
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

                    {savedList.map(({ text }, i) => (
                      <div
                        key={i}
                        className="flex gap-5 justify-between py-2.5 px-5"
                      >
                        <p className="text-sm font-medium">{text}</p>
                        <Ellipsis size={12} />
                      </div>
                    ))}
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
            {!store?.sidebarCollapsed && (
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
          {!store?.sidebarCollapsed && (
            <p className="font-medium">My Account</p>
          )}
        </div>
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
