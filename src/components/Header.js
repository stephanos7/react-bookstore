import React from "react";

import styles from "../styles/Header-styles";
import NotifyBar from "./NotifyBar";
import Search from "./Search";

const Header = () => {
  return (
    <div style={styles.root}>
     <NotifyBar />
     <Search />
    </div>
  )
}

export default Header;