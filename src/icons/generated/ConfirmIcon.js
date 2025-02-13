import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M8.7 4.29a.965.965 0 00-.71-.3 1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l5-5a1.003 1.003 0 00-1.42-1.42l-4.29 4.3L8.7 4.29zm5.22 3.01c.03.23.07.45.07.69 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6c.81 0 1.59.17 2.3.46l1.5-1.5A7.998 7.998 0 00-.01 7.99c0 4.42 3.58 8 8 8s8-3.58 8-8c0-.83-.13-1.64-.36-2.39l-1.71 1.7z'
]
const svgPaths20 = [
  'M9.71 5.29a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l7-7a1.003 1.003 0 00-1.42-1.42L12 7.59l-2.29-2.3zm7.93 2.32c.23.75.36 1.56.36 2.39 0 4.42-3.58 8-8 8s-8-3.58-8-8a7.998 7.998 0 0111.8-7.04l1.46-1.46C13.73.56 11.93 0 10 0 4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10c0-1.4-.29-2.73-.81-3.95l-1.55 1.56z'
]

export const ConfirmIcon = memo(
  forwardRef((props, ref) => (
    <Icon
      svgPaths16={svgPaths16}
      svgPaths20={svgPaths20}
      ref={ref}
      name="confirm"
      {...props}
    />
  ))
)
