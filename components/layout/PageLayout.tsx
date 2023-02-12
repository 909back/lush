import React, { CSSProperties } from "react"
import styles from "../../styles/PageLayout.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

interface PageLayoutprops {
  children?: React.ReactNode
  style?: CSSProperties
  className?: string
}
const PageLayout = ({style, className, children}:PageLayoutprops) => {
  return (
    <main style={style} className={cx('page-layout', className)}>
      {children}
    </main>
  )
} 

export default PageLayout