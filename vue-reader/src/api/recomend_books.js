// 测试推荐页面的书籍内容传递

const _tuijianTypes = [
  {
    name: '本周强推',
    books: [
      {
        id: "000001",
        title: "元尊",
        image: "https://easyreadfs.nosdn.127.net/OzxWHpOo570v4K3YhxC-xA==/8796093023794341611?param=200x0&type=1.jpg",
        author: "天蚕土豆",
      },{
        id: "000002",
        title: "美女总裁的贴身保镖",
        image: "https://easyreadfs.nosdn.127.net/BmadJuo77KjsCY4dsaSrnQ==/8796093022757381116",
        author: "松海听涛",
      },{
        id: "000003",
        title: "夜行者:平妖二十年",
        image: "https://easyreadfs.nosdn.127.net/z5V2IxawI2_VQ_JJ3XQuTA==/8796093023793847094",
        author: "南无袈裟理科佛",
      },{
        id: "000004",
        title: "官梯",
        image: "https://easyreadfs.nosdn.127.net/GVSwtiA_2mYDKq7q9lg8-A==/8796093023888876261",
        author: "钓人的鱼",
        tag: "官场职场",
        inShelf: false
      },{
        id: "000005",
        title: "绝世高手",
        image: "https://easyreadfs.nosdn.127.net/xD6vzAYs8n3BxwcBASBjfQ==/8796093023888881290",
        author: "我自对天笑",
        tag: "都市生活",
        inShelf: false
      },{
        id: "000006",
        title: "大汉光武",
        image: "https://easyreadfs.nosdn.127.net/ZpTVzHpHvC4KIYuo-NgESg==/8796093023638045025",
        author: "酒徒",
        inShelf: true
      }
    ]
  },
  {
    name: '新书抢鲜',
    books: []
  },
  {
    name: '火热连载',
    books: []
  }
]

export default {
  getBooks (cb) {
    setTimeout(() => {
      cb(_tuijianTypes)
    }, 1000); 
  }
} 

