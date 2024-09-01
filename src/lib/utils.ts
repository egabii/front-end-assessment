import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* 3x2 | 4x3 | 4x4 */
export function generateCards() {
  // armar una logica que arme cards de manera random
  return [
    {
      value: "1-2",
      flip: false,
      label: "1",
      cover: "cover",
      matched: false,
    },
    {
      value: "3-2",
      label: "3",
      flip: false,
      cover: "cover",
      matched: false,
    },
    {
      value: "2-2",
      label: "2",
      flip: false,
      cover: "cover",
      matched: false,
    },
    {
      value: "3",
      label: "3",
      flip: false,
      cover: "cover",
      matched: false,
    },
    {
      value: "1",
      label: "1",
      flip: false,
      cover: "cover",
      matched: false,
    },
    {
      value: "2",
      label: "2",
      flip: false,
      cover: "cover",
      matched: false,
    },
  ];
}
