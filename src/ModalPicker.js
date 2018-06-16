import React from 'react'
import { Picker, Modal } from 'react-native'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { language: 'js' }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent
        visible={this.props.visible}
        onRequestClose={() => null}
      >
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, _itemIndex) => {
            this.setState({ language: itemValue })
          }}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </Modal>
    )
  }
}
