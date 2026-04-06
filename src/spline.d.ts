import React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url?: string
          'loading-anim'?: boolean
          'mouse-target'?: string
          background?: string
          style?: React.CSSProperties
        },
        HTMLElement
      >
    }
  }
}
