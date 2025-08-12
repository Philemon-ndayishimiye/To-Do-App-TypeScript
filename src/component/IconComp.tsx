import React from "react";

interface Icons {
  icon: React.ReactNode;
  OnClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const IconComp: React.FC<Icons> = ({ icon, OnClick }) => {
  return (
    <div onClick={OnClick} className="pt-2 text-green-600 cursor-pointer">
      {icon}
    </div>
  );
};
