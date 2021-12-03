//////////////////////////////
//
// Ranking Test Helper
//
// Author: k80092@hotmail.com
//
///////////////////////////////
import { useEffect, useRef } from "react";

/**
 * Get RankingJSON Data
 *
 * @param String url
 */
export async function getRankingJsonFile(url) {
  return await new Promise((resolve, reject) => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        });
    } catch (error) {
      console.log("Fetch error", error);
      reject();
    }
  });
}

/**
 * Get previous state
 *
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 *
 * @param any value
 */
export function usePrevious(value) {
  const prev = useRef();
  useEffect(() => {
    prev.current = value;
  }, [value]);
  return prev.current;
}

/**
 * Bubble Sroting
 *
 * @param Array rankingData
 */
export async function bubbleSort(rankingData) {
  let tmp;
  return await new Promise((resolve) => {
    for (let i = rankingData.length - 1; i >= 0; i--) {
      for (let j = i - 1; j >= 0; j--) {
        if (rankingData[i].score > rankingData[j].score) {
          tmp = rankingData[j];
          rankingData[j] = rankingData[i];
          rankingData[i] = tmp;
        }
      }
    }
    resolve(rankingData);
  });
}

/**
 * Async Sorting
 *
 * @param Array rankingData
 */
export async function mySort(rankingData) {
  let tmp;
  return await new Promise((resolve) => {
    rankingData.sort((a, b) => (a - b));
    resolve(rankingData);
  });
}

/**
 * Swap animation
 *
 * @param Object target
 * @param Number swapHeight
 * @param Number duration
 */
export function swapElement(target, swapHeight, duration) {
  // if ranking has any changed, swap element.
  requestAnimationFrame(() => {
    // swap the streamerEl to old position
    target.style.transform = "translateY(" + swapHeight + "px)";
    target.style.transition = "transform 0s";
    requestAnimationFrame(() => {
      // swap the streamerEl back to now postion
      target.style.transform = "";
      target.style.transition = "transform " + duration + "ms";
    });
  });
}

