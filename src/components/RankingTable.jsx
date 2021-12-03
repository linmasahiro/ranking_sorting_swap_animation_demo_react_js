import { useEffect, useState, createRef } from "react";
import SwapAnime from "./SwapAnime";
import Streamer from "./Streamer";
import { bubbleSort } from "../helper";

/**
 * ランキング表示テーブルコンポーネント
 * Ranking table component
 *
 * Author: k80092@hotmail.com
 */
const RankingTable = ({ rankingData, refreshTime }) => {
  /**
   * 仮ランキングデータを作成する（Indexがある場合、ランダム点数を増加する）
   * Create Ranking Data
   * (if has index, update streamer's scores)
   *
   * @param Number|null index
   */
  const createRankingData = (index) => {
    if (index !== undefined) {
      // Change Random Liver's Score
      rankingData[index].score += Math.floor(Math.random() * 1000);
    }
    return rankingData;
  };

  /**
   * ランダム点数を増加し、順位を並び替える
   * Change Scores of every streamer (Random)
   */
  const changeRandomScore = () => {
    let randNo = Math.floor(Math.random() * rankingData.length);
    let newData = createRankingData(randNo);
    bubbleSort(newData).then((sortedData) => {
      setState({
        rankingData: sortedData
      });
    });
  };

  const [state, setState] = useState({
    rankingData: createRankingData()
  });

  /**
   * 指定の更新時間でランダム点数を増加する
   * Random change score
   */
  useEffect(() => {
    setTimeout(() => {
      changeRandomScore();
    }, refreshTime);
  });

  return (
    <div>
      <SwapAnime>
        {state.rankingData.map((row, index) => (
          <Streamer
            ref={createRef()}
            key={row.userID}
            refreshTime={refreshTime}
            ranking={index + 1}
            picture={row.picture}
            displayName={row.displayName}
            score={row.score}
          />
        ))}
      </SwapAnime>
    </div>
  );
};

export default RankingTable;

