import NavBar from "./NavBar";
import React, { ReactNode } from "react";
import Seo from "./Seo";
import {useRouter} from "next/router";

interface Props {
  children?: ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  const title = useRouter().route.replaceAll("/", "");
  return (
    <>
      <Seo title={title.length > 0 ? title : "Home"} />
      <NavBar />
      <div>{children}</div>
    </>
  )
}

export default Layout;