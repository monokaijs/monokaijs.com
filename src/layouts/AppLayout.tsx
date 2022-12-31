import {PropsWithChildren} from "react";
import {BlogHeader} from "../components/layout/Header";
import {Footer} from "../components/layout/Footer";
import styles from "./AppLayout.module.css";

interface AppLayoutProps extends PropsWithChildren {

}

const AppLayout = (props: AppLayoutProps) => {
  return (
    <div className={styles.appLayout}>
      <BlogHeader/>
      <div className={styles.appContent}>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
};

export default AppLayout;
