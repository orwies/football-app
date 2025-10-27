import type { FC } from "react";
import { HighlightsFilter } from "./highlights-filter";
import { HighlightsList } from "./highlights-list";
import styles from "./styles.module.css";

export const HighlightsScreen: FC = () => {
  return (
    <div className={styles.main}>
      <HighlightsFilter />
      <HighlightsList />
    </div>
  );
};
