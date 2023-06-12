import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styled'

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>

  return (
    <Container>
      <div />
      <span><div class="lds-ring"><div></div><div></div><div></div><div></div></div></span>
    </Container>
  )
}

Loading.defaultProps = {
  isLoading: false
}

Loading.propTypes = {
  isLoading: PropTypes.bool
}