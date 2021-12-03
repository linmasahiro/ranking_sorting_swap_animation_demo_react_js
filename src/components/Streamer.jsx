import React, { forwardRef } from "react";
import Score from "./Score";

/**
 * ライバー情報コンポーネント
 * Streamer Component
 *
 * Author: k80092@hotmail.com
 */
const Streamer = forwardRef(({ ranking, displayName, picture, score }, ref) => (
  <div ref={ref} className={"streamer"}>
    <div className={"ranking-no"}>{ranking}</div>
    <div className={"picture"}>
      <img alt={displayName} src={picture} />
    </div>
    <div className={"display-name"}>{displayName}</div>
    <div className={"score"}>
      <Score score={score}>{score}</Score>
    </div>
  </div>
));

export default Streamer;

