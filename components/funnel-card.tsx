import Image from "next/image";
import React from "react";
import Button from "./button";
import Share from "./icons/share";

type Props = {};

const FunnelCard = (props: Props) => {
  return (
    <div className="flex flex-col w-full bg-[#F5F5F5] rounded-lg divide-y divide-[#B4B4B4]">
      {/* header */}
      <div className="flex justify-between gap-4 items-center py-3 px-2.5">
        <div className="flex gap-2.5 items-center ">
          <div className="w-8 h-8 rounded-full border-2 border-white relative">
            <Image
              src={"/img/user.png"}
              alt="user avatar"
              fill
              className="rounded-full"
            />
          </div>
          <p className="font-medium">Caraway</p>
        </div>

        <Button type="button">Save Funnel</Button>
      </div>

      {/* main */}
      <div className="flex flex-col md:flex-row gap-2.5 p-5 justify-between items-center">
        <div className="w-[229px] h-[407px] relative rounded-lg">
          <Image
            src={"/img/creative-vertical.jpg"}
            alt="user avatar"
            fill
            className="rounded-lg"
          />
        </div>

        <hr className="flex-1 bg-gradient-to-r from-[#A259FF] to-[#613599]" />

        <div className="w-[229px] h-[407px] relative rounded-lg">
          <Image
            src={"/img/landing-vertical.jpg"}
            alt="user avatar"
            fill
            className="rounded-lg"
          />
        </div>
      </div>

      {/* footer */}
      <div className="flex flex-wrap justify-end gap-2 5 py-4 px-5">
        <Button type="button" className="text-sm">
          Request Template
        </Button>
        <Button type="button" className="text-sm">
          View Funnel
        </Button>
        <Button type="button" className="text-sm !p-2.5">
          <Share />
        </Button>
      </div>
    </div>
  );
};

export default FunnelCard;
