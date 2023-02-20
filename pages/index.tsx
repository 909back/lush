import classNames from "classnames/bind";
import styles from "@/styles/Home.module.scss";
import { useEffect, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";

const cx = classNames.bind(styles)

export default function Home() {
  const [click, setClick] = useState(false)

  useEffect(()=>{
    window.scrollTo(0,1)
  },[])
  return (
    <PageLayout>
      
    </PageLayout>
  );
}
