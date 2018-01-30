const _books = [
  {
    id: "000001",
    title: "元尊",
    image: "https://easyreadfs.nosdn.127.net/OzxWHpOo570v4K3YhxC-xA==/8796093023794341611?param=200x0&type=1.jpg",
    author: "天蚕土豆",
    tag: "玄幻仙侠",
    inShelf: true
  },{
    id: "000002",
    title: "美女总裁的贴身保镖",
    image: "https://easyreadfs.nosdn.127.net/BmadJuo77KjsCY4dsaSrnQ==/8796093022757381116",
    author: "松海听涛",
    tag: "都市生活",
    inShelf: false
  },{
    id: "000003",
    title: "夜行者:平妖二十年",
    image: "https://easyreadfs.nosdn.127.net/z5V2IxawI2_VQ_JJ3XQuTA==/8796093023793847094",
    author: "南无袈裟理科佛",
    tag: "悬疑探险",
    inShelf: true
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
  },{
    id: "000007",
    title: "罪恶调查局",
    image: "https://easyreadfs.nosdn.127.net/lGZ2wQAWkMAPa0If1rKEiA==/8796093023472815286",
    author: "骁骑校",
    tag: "都市生活",
    inShelf: true
  },{
    id: "000008",
    title: "方外：消失的八门",
    image: "https://easyreadfs.nosdn.127.net/diu0COUUCbn3PM2dNIcRfg==/8796093023763385675",
    author: "徐公子胜治",
    tag: "都市生活",
    inShelf: false
  },{
    id: "000009",
    title: "官路风云",
    image: "https://easyreadfs.nosdn.127.net/-rCa-tx8E4qwHA-e3krTDw==/8796093023608876534",
    author: "风中的阳光",
    tag: "官场职场",
    inShelf: true
  },{
    id: "000010",
    title: "读尸女探",
    image: "https://easyreadfs.nosdn.127.net/o4G283su1b4DGHdXjXbxTA==/8796093022993333749",
    author: "轩弦",
    tag: "悬疑探险",
    inShelf: false
  },{
    id: "000011",
    title: "九阳神王",
    image: "https://easyreadfs.nosdn.127.net/xl5kJAdvS7VamU9JY0n2zQ==/8796093023584459318",
    author: "寂小贼",
    tag: "玄幻仙侠",
    inShelf: false
  },{
    id: "000012",
    title: "我的老千生涯",
    image: "https://easyreadfs.nosdn.127.net/xNNP3vCEHYU5sdgz-E0QvA==/8796093023187099637?param=200x0&type=1.jpg",
    author: "黑色枷锁",
    inShelf: true
  }
]

export default {
  getBooks (cb) {
    return () => cd(_books)
  }
}