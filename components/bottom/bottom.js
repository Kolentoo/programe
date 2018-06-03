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
    change(event) {
      var num = event.currentTarget.dataset.type;
      let oldbottom = this.properties.bottomdata
      let newbottom = oldbottom.map((current,index,arr)=>{
        if(num===index){
          current.active=true
        }else{
          current.active=false
        }
      })
      this.setData({
        oldbottom:newbottom
      })
      console.log(oldbottom)
    }
  }
})
