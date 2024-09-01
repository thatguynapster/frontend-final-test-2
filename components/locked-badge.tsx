import { Lock } from "lucide-react";
import React from "react";

type Props = {};

const LockedBadge = (props: Props) => {
  return (
    <div className="rounded-lg py-1 px-2.5 bg-[conic-gradient(#f48b11,#9383f9,#004873,#020304,#000000,#670889,#cc2c69,#ce3165)]">
      <Lock size={12} className="text-white" />
    </div>
  );
};

export default LockedBadge;
