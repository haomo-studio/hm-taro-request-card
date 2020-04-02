'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';

import avator from './images/img_25260_0_0.png'
import statimg from './images/img_25260_0_1.png'
import largeIcon from './images/img_25260_0_2.png'

class HmRequestCard extends Component {
  constructor(props) {
    super(props);
    let defaultState = {
      avator,
      name: '马莉',
      address: '上海',
      statimg,
      largeIcon,
      agree: '同意',
      cancel: '取消'
    };
    this.state = Object.assign(defaultState, JSON.parse(JSON.stringify(props)));
  }

  render() {
    return (
      <View style={styles.hmRequestCard}>
        {true && (
          <View style={styles.box}>
            {true && (
              <View style={styles.head}>
                {true && (
                  <View style={styles.outer}>
                    <Image style={styles.avator} src={this.state.avator} />
                    {true && (
                      <View style={styles.wrap}>
                        {true && <Text style={styles.name}>{this.state.name}</Text>}
                        {true && <Text style={styles.address}>{this.state.address}</Text>}
                      </View>
                    )}
                  </View>
                )}
                {true && <Image style={styles.statimg} src={this.state.statimg} />}
              </View>
            )}
            {true && (
              <View style={styles.body}>
                <View style={styles.block}>
                  {true && <Image style={styles.largeIcon} src={this.state.largeIcon} />}
                  {true && <Text style={styles.agree}>{this.state.agree}</Text>}
                </View>
                {true && (
                  <View style={styles.tagWrap}>{true && <Text style={styles.cancel}>{this.state.cancel}</Text>}</View>
                )}
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}
export default HmRequestCard;
