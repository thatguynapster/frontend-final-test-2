"use client";

import Button from "@/components/button";
import FilterButton from "@/components/filter-button";
import FunnelCard from "@/components/funnel-card";
import EmailIcon from "@/components/icons/email";
import ImageIcon from "@/components/icons/image";
import Pointer from "@/components/icons/pointer";
import useStore from "@/hooks/useStore";
import { classNames } from "@/lib/helpers";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Home() {
  const { store } = useStore();

  const filterOptions = [
    {
      active: false,
      icon: <ImageIcon />,
      text: "Templates",
      locked: false,
    },
    { active: false, icon: <EmailIcon />, text: "Email", locked: true },
    { active: false, icon: <Pointer />, text: "Landers", locked: true },
    { active: true, icon: <Pointer />, text: "Funnels", locked: true },
  ];

  const funnels = [{}, {}, {}, {}];

  return (
    <div
      className={classNames(
        "mt-20 h-[calc(100vh-5rem)] flex-1 p-6 overflow-y-auto",
        "pl-[88px]",
        "transition-all",
        store?.sidebarCollapsed ? "lg:pl-[88px]" : "lg:pl-[274px]"
      )}
    >
      <main className="flex flex-col divide-y divide-[#A259FF40]">
        <div className="flex flex-col lg:flex-row gap-4 justify-between pb-4">
          {/* <div className="flex gap-10 flex-1"> */}
          <div className="flex gap-5 items-center">
            <Button type="button">Back</Button>
            <p
              className={clsx(
                "bg-gradient-to-b from-[#A259FF] to-[#613599] inline-block text-transparent bg-clip-text",
                "text-xl font-semibold"
              )}
            >
              Brand name
            </p>
          </div>

          <div className="flex flex-col lg:flex-row flex-1 gap-5 justify-between">
            <div className="flex gap-5 items-center flex-wrap lg:flex-nowrap">
              <p className="text-sm">Show:</p>
              <div className="flex overflow-x-auto gap-5">
                {filterOptions.map(({ active, icon, locked, text }) => (
                  <FilterButton
                    key={text}
                    {...{ active, locked, text, icon }}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-2.5 h-fit">
              <Button type="button">Save</Button>
              <Button type="button">Share</Button>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-5">
          {funnels.map((funnel, i) => (
            <FunnelCard key={i} />
          ))}
        </div>
      </main>
    </div>
  );
}
