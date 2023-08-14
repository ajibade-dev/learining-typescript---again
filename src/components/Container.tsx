import React from 'react'

type StyleProps = {
    styles: React.CSSProperties
}

const Container = ({styles}: StyleProps) => {
  return (
    <div style={styles}>Text Content goes here</div>
  )
}

export default Container