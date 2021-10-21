import React from "react";
import { userCredentials } from "../userSlice";
import styles from "./Account.module.css";

export function Account() {
  return (
    <div className={styles.card}>
      <h1>{userCredentials.login}</h1>
    </div>
  );
}
