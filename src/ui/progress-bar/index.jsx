import React from 'react'
import { theme } from 'react-theme'

@theme('progressBar', {
  height: 20,
  color: React.PropTypes.string.isRequired,
  borderColor: React.PropTypes.string.isRequired,
})

export default class ProgressBar extends React.PureComponent {
  static propTypes = {
    progress: React.PropTypes.number.isRequired,
  }

  static defaultProps = {
    progress: 0,
  }

  render() {
    const { progress, theme } = this.props
    const { height, color, borderColor } = theme

    return (
      <div style={{ border: `1px solid ${borderColor}`, flex: 1, padding: 2, minWidth: 100, height, borderRadius: 3 }}>
        <div style={{ display: 'flex', width: `${progress * 100}%`, height: '100%', backgroundColor: color, borderRadius: 2, color: 'white' }} />
      </div>
    )
  }
}
