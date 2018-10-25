// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()




// 云函数入口函数
exports.main = async (event, context) => {
  let { userInfo, a, b } = event
  let { openId, appId } = userInfo // 这里获取到的 openId 和 appId 是可信的
  let sum = a + b



  return {
    openId,
    appId,
    sum,
    event,
    context
  }
}