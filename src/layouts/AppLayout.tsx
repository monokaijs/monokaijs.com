import React, {PropsWithChildren} from "react";
import styles from "./AppLayout.module.css";
import {BlogNavbar} from "../components/layout/Navbar";
import {Container} from "@nextui-org/react";

interface AppLayoutProps extends PropsWithChildren {

}

const AppLayout = (props: AppLayoutProps) => {
  return (
    <div className={styles.appLayout}>
      <BlogNavbar/>
      <Container sm>
        {props.children}
      </Container>
    </div>
  )
};

export default AppLayout;
