// pages/product/product.js
Page({
  checkForm:function(event){
    // 1.获取用户的参数
    var pno=event.detail.value.pno;
    var price=event.detail.value.price;
    // 2.创建正则表达式验证  pno固定长度6字母和数字，price整数或者两卫数字
    if (!(/^[0-9A-Za-z]{6}$/.test(pno))){
      wx.showToast({
        title: '商品编号错误',
        duration: 2000,
        icon: 'none'
      });
      return;
    }
    if (!(/([0-9]+\.[0-9]{2})[0-9]*/.test(price))){
      wx.showToast({
        title: '商品价格错误',
        duration: 2000,
        icon: 'none'
      });
      return;
    }
    // 3.出错显示提示消息

  

    // 5.获取返回的数据   提示success

  },

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})