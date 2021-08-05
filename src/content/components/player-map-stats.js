/** @jsx h */
import { h } from 'dom-chef'

const stat = (value, label, flex = 1) => (
  <div style={{ flex, padding: '5px 9px' }}>
    {value}
    <div className="text-sm">{label}</div>
  </div>
)

const statsVerticalDivider = () => (
  <div style={{ width: 1, background: '#333' }} />
)

export default ({
  dust2,
  nuke,
  mirage,
  overpass,
  train,
  inferno,
  vertigo,
  ancient,
  alignRight = false
}) => (
  <div
    className="text-muted"
    style={{
      display: 'flex',
      'border-top': '1px solid #333',
      'text-align': alignRight && 'right',
      'font-size': 12,
      'line-height': 12
    }}
  >
    <div style={{ display: 'flex' }}>
      <pre>{dust2}</pre>
      {stat(`${dust2} %`)}
      {statsVerticalDivider()}
      {stat(`${mirage}%`)}
      {statsVerticalDivider()}
      {stat(`${nuke}%`)}
      {statsVerticalDivider()}
      {stat(`${overpass}%`)}
      {statsVerticalDivider()}
      {stat(`${train}%`)}
      {statsVerticalDivider()}
      {stat(`${inferno}%`)}
      {statsVerticalDivider()}
      {stat(`${vertigo}%`)}
      {statsVerticalDivider()}
      {stat(`${ancient}%`)}
      {statsVerticalDivider()}
    </div>
  </div>
)
