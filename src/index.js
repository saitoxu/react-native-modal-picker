import React from 'react'
import { View } from 'react-native'

export default class extends React.Component {
  render() {
    const { containerStyle } = this.props
    return <View style={[{ flex: 1, backgroundColor: 'red' }, containerStyle]} />
  }
}
