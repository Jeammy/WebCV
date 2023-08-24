// From : https://codepen.io/jh3y/pen/XWMobqx
// import React, { Fragment } from 'https://cdn.skypack.dev/react'
// import { render } from 'https://cdn.skypack.dev/react-dom'
// import styles from '../styles/animatedButton.module.css'


// const ROOT_NODE = document.querySelector('#app')

const animatedButton = ({ as, children, filled, secondary, ...rest }) => {
  const that = {
    as
  }
  return (
    <that.as className={`styles.dir-control ${secondary ? 'styles.dir-control--secondary' : ''} ${filled ? 'styles.dir-control--filled' : ''}`} {...rest} >
      {children}
      <span/>
      <span/>
      <span/>
      <span/>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
    </that.as>
  )
}
animatedButton.defaultProps = {
  as: 'button'
}
export default animatedButton;
// const App = () => (
//   <Fragment>
//     <Button role="button" >Click Me!</Button>
//     <Button as="a" href="#" >Link Me!</Button>
//     <Button role="button" secondary >Click Me!</Button>
//     <Button as="a" href="#" secondary >Link Me!</Button>
//     <Button role="button" filled >Click Me!</Button>
//     <Button as="a" href="#" filled >Link Me!</Button>
//   </Fragment>
// )

// render(<App />, ROOT_NODE)
