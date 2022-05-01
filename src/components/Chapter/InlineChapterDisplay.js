import React from 'react';
import { View } from 'react-native';
import gematriya from 'gematriya';
import TouchableText from './TouchableText';
import BlockChapterText from './BlockChapterText';

class InlineChapterDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.selectText = this.selectText.bind(this);
    this.selectText(0);
    this.text = [];
    for (let i = 0; i < this.props.hebrewText.length * 2; i++) {
      if (i % 2 == 0) {
        this.text.push(this.props.hebrewText[Math.floor(i / 2)]);
      } else {
        this.text.push(this.props.englishText[Math.floor(i / 2)]);
      }
    }
  }

  render() {
    return (
      <View>
        {this.props.hebrewText.map((line, index) => {
            let lineNum = gematriya(index + 1, { punctuate: false });
            let isSelected = index === this.props.selectedIndex;
            return (
              <TouchableText
                index={index}
                lineNum={lineNum}
                text={line}
                showSmallText={this.props.showSmallText}
                selected={isSelected}
                onSelect={this.selectText}
                style={{ textAlign: 'right' }}
                key={index}
              />
            );
        })}
        {!this.props.hebrewOnly ? (<BlockChapterText
          isParagraph={this.props.isParagraph}
          isHebrew={false}
          text={this.props.englishText}
          showSmallText={this.props.showSmallText}
          selectedIndex={this.props.selectedIndex}
          onSelect={this.props.onSelect}
        />) : <View />}
          
      </View>
    );
  }

  selectText(index) {
    this.props.onSelect(index);
  }
}

export default InlineChapterDisplay;
