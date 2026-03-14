import React, {type SetStateAction} from "react";

export interface IReviews {
  data: {
    name: string;
    description: string;
    area: string;
    comment: string;
    src: string;
    rating: number;
  };
  index: number;
  setOpenIndex: React.Dispatch<SetStateAction<number | null>>;
  openIndex: number | null;
}