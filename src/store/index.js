import { createStore } from 'vuex'

export default createStore({
  state: {
    categories: [{
        category: 'street',
        img: require('@/assets/images/street/Anna/1.jpg'),
        title: 'Индивидуальные съёмки на улице',
        photos: [{
          src: require('@/assets/images/street/Anna/1.jpg')
        }, {
          src: require('@/assets/images/street/Anna/2.jpg')
        }, {
          src: require('@/assets/images/street/Anna/5.jpg')
        },  {
          src: require('@/assets/images/street/Kristina/1.jpg')
        },  {
          src: require('@/assets/images/street/Violetta/2.jpg')
        },  {
          src: require('@/assets/images/street/Kristina/2.jpg')
        },  {
          src: require('@/assets/images/street/Kate/1.jpg')
        },  {
          src: require('@/assets/images/street/Violetta/4.jpg')
        },  {
          src: require('@/assets/images/street/Kate/2.jpg')
        },  {
          src: require('@/assets/images/street/Anna/6.jpg')
        },  {
          src: require('@/assets/images/street/Violetta/5.jpg')
        },  {
          src: require('@/assets/images/street/Anna/7.jpg')
        },  {
          src: require('@/assets/images/street/Tololommo/1.jpg')
        },  {
          src: require('@/assets/images/street/Tololommo/7.jpg')
        },  {
          src: require('@/assets/images/street/Tololommo/3.jpg')
        },  {
          src: require('@/assets/images/street/Tololommo/5.jpg')
        },  {
          src: require('@/assets/images/street/Tololommo/2.jpg')
        },  {
          src: require('@/assets/images/street/Tololommo/6.jpg')
        },  {
          src: require('@/assets/images/street/Kris/4.jpg')
        },  {
          src: require('@/assets/images/street/Kris/7.jpg')
        },  {
          src: require('@/assets/images/street/Kris/6.jpg')
        },  {
          src: require('@/assets/images/street/Lena/7.jpg')
        },  {
          src: require('@/assets/images/street/Lena/9.jpg')
        },  {
          src: require('@/assets/images/street/Lena/8.jpg')
        },  {
          src: require('@/assets/images/street/Anya/3.jpg')
        },  {
          src: require('@/assets/images/street/Anya/1.jpg')
        },  {
          src: require('@/assets/images/street/Anya/4.jpg')
        },  {
          src: require('@/assets/images/street/Ira/1.jpg')
        },  {
          src: require('@/assets/images/street/Ira/2.jpg')
        },  {
          src: require('@/assets/images/street/Ira/4.jpg')
        },  {
          src: require('@/assets/images/street/Lena/1.jpg')
        },  {
          src: require('@/assets/images/street/Kris/5.jpg')
        },  {
          src: require('@/assets/images/street/Lena/10.jpg')
        }]
      }, {
        category: 'city',
        title: 'Уличные фотографии',
        img: require('@/assets/images/city/1.jpg'),
        photos: [{
          src: require('@/assets/images/city/1.jpg')
        }, {
          src: require('@/assets/images/city/2.jpg')
        }, {
          src: require('@/assets/images/city/3.jpg')
        },  {
          src: require('@/assets/images/city/36.jpg')
        },  {
          src: require('@/assets/images/city/34.jpg')
        },  {
          src: require('@/assets/images/city/32.jpg')
        },  {
          src: require('@/assets/images/city/24.jpg')
        },  {
          src: require('@/assets/images/city/25.jpg')
        },  {
          src: require('@/assets/images/city/26.jpg')
        }, {
          src: require('@/assets/images/city/Venezia/6.jpg')
        }, {
          src: require('@/assets/images/city/41.jpg')
        }, {
          src: require('@/assets/images/city/Venezia/9.jpg')
        },  {
          src: require('@/assets/images/city/Venezia/8.jpg')
        },  {
          src: require('@/assets/images/city/Venezia/21.jpg')
        },  {
          src: require('@/assets/images/city/Venezia/7.jpg')
        },  {
          src: require('@/assets/images/city/Venezia/1.jpg')
        },  {
          src: require('@/assets/images/city/Venezia/4.jpg')
        },  {
          src: require('@/assets/images/city/Venezia/5.jpg')
        }, {
          src: require('@/assets/images/city/29.jpg')
        }, {
          src: require('@/assets/images/city/37.jpg')
        },  {
          src: require('@/assets/images/city/10.jpg')
        },  {
          src: require('@/assets/images/city/6.jpg')
        },  {
          src: require('@/assets/images/city/42.jpg')
        },  {
          src: require('@/assets/images/city/7.jpg')
        },  {
          src: require('@/assets/images/city/45.jpg')
        },  {
          src: require('@/assets/images/city/15.jpg')
        },  {
          src: require('@/assets/images/city/16.jpg')
        },  {
          src: require('@/assets/images/city/31.jpg')
        },  {
          src: require('@/assets/images/city/30.jpg')
        },  {
          src: require('@/assets/images/city/46.jpg')
        }]
      },{
        category: 'studio',
        title: 'Индивидуальные съёмки в студии',
        img: require('@/assets/images/studio/Kate/1.jpg'),
        photos: [
          { 
            src: require('@/assets/images/studio/Kate/12.jpg')
          },{ 
            src: require('@/assets/images/studio/Kate/13.jpg')
          },{  
            src: require('@/assets/images/studio/Kate/11.jpg')
          },{  
            src: require('@/assets/images/studio/Kate/15.jpg')
          },{  
            src: require('@/assets/images/studio/Kate/14.jpg')
          },{  
            src: require('@/assets/images/studio/Kate/16.jpg')
          },{  
            src: require('@/assets/images/studio/Varya/6.jpg')
          },{  
            src: require('@/assets/images/studio/Varya/3.jpg')
          },{
            src: require('@/assets/images/studio/Varya/7.jpg')
          },{ 
            src: require('@/assets/images/studio/Varya/2.jpg')
          },{ 
            src: require('@/assets/images/studio/Varya/4.jpg')
          },{  
            src: require('@/assets/images/studio/Varya/1.jpg')
          },{  
            src: require('@/assets/images/studio/Kate/1.jpg')
          },{
            src: require('@/assets/images/studio/Anya/1.jpg')
          },{ 
            src: require('@/assets/images/studio/Kate/2.jpg')
          },{  
            src: require('@/assets/images/studio/Lena/1.jpg')
          },{  
            src: require('@/assets/images/studio/1.jpg')
          },{  
            src: require('@/assets/images/studio/Lena/2.jpg')
          },{  
            src: require('@/assets/images/studio/Kris/1.jpg')
          },{  
            src: require('@/assets/images/studio/Kris/3.jpg')
          },{  
            src: require('@/assets/images/studio/Kris/4.jpg')
          },{  
            src: require('@/assets/images/studio/Kate/6.jpg')
          },{  
            src: require('@/assets/images/studio/Kate/10.jpg')
          },{  
            src: require('@/assets/images/studio/Kate/8.jpg')
          },{  
            src: require('@/assets/images/studio/byefreya/1.jpg')
          },{  
            src: require('@/assets/images/studio/byefreya/3.jpg')
          },{  
            src: require('@/assets/images/studio/byefreya/2.jpg')
          },{  
            src: require('@/assets/images/studio/Iribaby/4.jpg')
          },{  
            src: require('@/assets/images/studio/Iribaby/1.jpg')
          },{  
            src: require('@/assets/images/studio/Iribaby/11.jpg')
          },{  
            src: require('@/assets/images/studio/Iribaby/2.jpg')
          },{  
            src: require('@/assets/images/studio/Ira/1.jpg')
          },{  
            src: require('@/assets/images/studio/Iribaby/9.jpg')
          },{  
            src: require('@/assets/images/studio/Iribaby/10.jpg')
          },{  
            src: require('@/assets/images/studio/Iribaby/5.jpg')
          },{  
            src: require('@/assets/images/studio/Iribaby/8.jpg')
          },{  
            src: require('@/assets/images/studio/ForgetName/3.jpg')
          },{  
            src: require('@/assets/images/studio/Ira/2.jpg')
          },{  
            src: require('@/assets/images/studio/ForgetName/2.jpg')
          },
        ]
      }
    ]
  }
})
