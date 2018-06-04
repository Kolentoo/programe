// components/bottom/bottom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "bottomdata":{
      type:Array,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabchange: function(e) {
      let num = e.currentTarget.dataset.type;
      let active = e.currentTarget.dataset.item;
      if (active===false){
        this.triggerEvent('event', num);
      }
      
    }
  }
})
