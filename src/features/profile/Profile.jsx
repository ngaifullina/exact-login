import React from "react";
import { userCredentials } from "../userSlice";
import styles from "./Profile.module.css";

export function Profile() {
  return (
    <div className={styles.card}>
      <h1>{userCredentials.login}</h1>
    </div>
  );
}
