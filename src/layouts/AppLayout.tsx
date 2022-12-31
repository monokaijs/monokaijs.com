import {PropsWithChildren} from "react";
import {BlogHeader} from "../components/layout/Header";
import {Footer} from "../components/layout/Footer";

interface AppLayoutProps extends PropsWithChildren {

}

const AppLayout = (props: AppLayoutProps) => {
  return (
    <div className={'app-layout'}>
      <BlogHeader/>
      <div className={'app-content'}>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
};

export default AppLayout;
