import { useEffect, useState } from "react";
import { usePrevious } from "../helper";

/**
 * 点数表示コンポーネント
 * Score Component
 *
 * Author: k80092@hotmail.com
 */
const Score = ({ score }) => {
  let prevScore = usePrevious(score);
  if (!prevScore) {
    prevScore = score;
  }
  let [newScore, setNewScore] = useState(score);

  /**
   * 点数の変化を監視、変更が発生される場合、動画を起動する
   * Watch the score, if chenged, start countup animation
   */
  useEffect(() => {
    if (prevScore) {
      // 点数の増加量を算出する
      // calculate diff between new score and previous score
      let diff = score - prevScore;

      // 動画を開始する
      // countup animation start
      let frame = 0;
      const totalFrames = 60;
      const counter = setInterval(() => {
        frame++;
        // 線形関数で数字を増加するように
        // Calculate progress by linear function (t)
        const progress = frame / totalFrames;
        let newCountUp = diff * progress;
        setNewScore(prevScore + newCountUp);
        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  return Math.floor(newScore);
};

export default Score;

