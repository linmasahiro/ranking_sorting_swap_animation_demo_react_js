import React, { useEffect, useState } from "react";
import { usePrevious, swapElement } from "../helper";

/**
 * ライバーランキング変更された時の動画用コンポーネント
 * Move Streamer Component Animation Component
 *
 * Author: k80092@hotmail.com
 */
const SwapAnime = ({ children }) => {
  const [rows, setRows] = useState({});
  const [prevRows, setPrevRows] = useState({});
  const prevChildren = usePrevious(children);

  /**
   * 新しい位置情報を保存する
   * save new rows's potision infomation
   */
  useEffect(() => {
    const rows = {};
    React.Children.forEach(children, (child) => {
      rows[child.key] = child.ref.current.getBoundingClientRect();
    });
    setRows(rows);
  }, [children]);

  /**
   * 変更前の位置情報を保存する
   * save previous rows's potision infomation
   */
  useEffect(() => {
    const prevRows = {};
    React.Children.forEach(prevChildren, (child) => {
      prevRows[child.key] = child.ref.current.getBoundingClientRect();
    });
    setPrevRows(prevRows);
  }, [prevChildren]);

  /**
   * 各行の変化を監視、順位変更されたら動画を起動する
   * Watch any rows state. If changed, swap the row.
   */
  useEffect(() => {
    const hasPrevRows = Object.keys(prevRows).length;
    if (hasPrevRows) {
      React.Children.forEach(children, (streamerEl) => {
        // Diffrence between new and previous element position
        const target = streamerEl.ref.current;
        const oldElement = prevRows[streamerEl.key];
        const newElement = rows[streamerEl.key];
        const diffY = oldElement.top - newElement.top;
        if (diffY) {
          // If position was changed, swap the element.
          swapElement(target, diffY, streamerEl.props.refreshTime);
        }
      });
    }
  }, [rows, prevRows, children]);

  return children;
};

export default SwapAnime;

