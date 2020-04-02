import Taro from '@tarojs/taro';
export default {
  hmRequestCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: Taro.pxTransform(750),
    height: Taro.pxTransform(448)
  },
  box: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: Taro.pxTransform(16),
    borderRadius: Taro.pxTransform(39),
    boxShadow: '0px 10px 30px rgba(209, 213, 223, 0.50)',
    backgroundColor: '#ffffff',
    width: Taro.pxTransform(721),
    height: Taro.pxTransform(370)
  },
  head: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Taro.pxTransform(58),
    width: Taro.pxTransform(598),
    height: Taro.pxTransform(117)
  },
  outer: { display: 'flex', alignItems: 'center', flexDirection: 'row', height: Taro.pxTransform(117) },
  avator: { marginRight: Taro.pxTransform(29), width: Taro.pxTransform(117), height: Taro.pxTransform(117) },
  wrap: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: Taro.pxTransform(62),
    height: Taro.pxTransform(84)
  },
  name: {
    position: 'relative',
    opacity: 1,
    lineHeight: Taro.pxTransform(39),
    whiteSpace: 'nowrap',
    color: '#141821',
    fontFamily: 'MicrosoftYaHei, Microsoft YaHei',
    fontSize: Taro.pxTransform(31),
    fontWeight: 'normal'
  },
  address: {
    position: 'relative',
    opacity: 1,
    marginTop: Taro.pxTransform(6),
    lineHeight: Taro.pxTransform(39),
    whiteSpace: 'nowrap',
    color: '#858997',
    fontFamily: 'MicrosoftYaHei, Microsoft YaHei',
    fontSize: Taro.pxTransform(27),
    fontWeight: 'normal'
  },
  statimg: { width: Taro.pxTransform(35), height: Taro.pxTransform(8) },
  body: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Taro.pxTransform(58),
    marginLeft: Taro.pxTransform(58),
    width: Taro.pxTransform(444),
    height: Taro.pxTransform(78)
  },
  block: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Taro.pxTransform(144),
    height: Taro.pxTransform(78)
  },
  largeIcon: {
    position: 'absolute',
    top: Taro.pxTransform(0),
    left: Taro.pxTransform(0),
    width: Taro.pxTransform(144),
    height: Taro.pxTransform(78)
  },
  agree: {
    position: 'relative',
    opacity: 1,
    maxWidth: Taro.pxTransform(95),
    height: Taro.pxTransform(39),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: Taro.pxTransform(39),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontFamily: 'MicrosoftYaHei, Microsoft YaHei',
    fontSize: Taro.pxTransform(31),
    fontWeight: 'normal'
  },
  tagWrap: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: Taro.pxTransform(19),
    backgroundColor: '#c3c6d1',
    paddingRight: Taro.pxTransform(58),
    paddingLeft: Taro.pxTransform(23),
    height: Taro.pxTransform(78)
  },
  cancel: {
    opacity: 1,
    lineHeight: Taro.pxTransform(39),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontSize: Taro.pxTransform(31),
    fontWeight: 400
  }
};
