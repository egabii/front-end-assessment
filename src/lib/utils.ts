import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function shuffleArray<T>(arr: T[]): T[] {
  // Start from the last element and swap
  // one by one. We don't need to run for
  // the first element that's why i > 0
  for (let i = arr.length - 1; i > 0; i--) {
    // pick a random index from 0 to i inclusive
    const j = Math.floor(Math.random() * (i + 1)); // at random index
    // Swap arr[i] with the element
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

/* 3x2 | 4x3 | 4x4 */
export function generateCards() {
  return shuffleArray([
    {
      value: "1",
      flip: false,
      label: "1",
      cover: "",
      matched: false,
    },
    {
      value: "2",
      label: "3",
      flip: false,
      cover: "",
      matched: false,
    },
    {
      value: "3",
      label: "2",
      flip: false,
      cover: "",
      matched: false,
    },
    {
      value: "4",
      label: "3",
      flip: false,
      cover: "",
      matched: false,
    },
    {
      value: "5",
      label: "1",
      flip: false,
      cover: "",
      matched: false,
    },
    {
      value: "6",
      label: "2",
      flip: false,
      cover: "",
      matched: false,
    },
  ]);
}
