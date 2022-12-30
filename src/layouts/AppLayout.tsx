import {PropsWithChildren} from "react";
import {BlogHeader} from "../components/layout/Header";

interface AppLayoutProps extends PropsWithChildren {

}

const AppLayout = (props: AppLayoutProps) => {
  return (
    <div className={'app-layout'}>
      <BlogHeader/>
      <div className={'app-content'}>
        {props.children}
      </div>
    </div>
  )
};

export default AppLayout;
