import React from "react";

interface Icons {
  icon: React.ReactNode;
  Onclick?: (e: React.MouseEvent<SVGAElement>) => void;
}

export const IconComp: React.FC<Icons> = ({ icon, Onclick }) => {
  return <div className="pt-2 text-green-600 cursor-pointer">{icon}</div>;
};
