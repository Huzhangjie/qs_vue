const _books = [
  {
    id: "000001",
    title: "元尊",
    image: "https://easyreadfs.nosdn.127.net/OzxWHpOo570v4K3YhxC-xA==/8796093023794341611?param=200x0&type=1.jpg",
    author: "天蚕土豆",
    inShelf: true
  },{
    id: "000002",
    title: "美女总裁的贴身保镖",
    image: "https://easyreadfs.nosdn.127.net/BmadJuo77KjsCY4dsaSrnQ==/8796093022757381116",
    author: "松海听涛",
    inShelf: false
  },{
    id: "000003",
    title: "夜行者:平妖二十年",
    image: "https://easyreadfs.nosdn.127.net/z5V2IxawI2_VQ_JJ3XQuTA==/8796093023793847094",
    author: "南无袈裟理科佛",
    inShelf: true
  },{
    id: "000004",
    title: "元尊",
    image: "https://easyreadfs.nosdn.127.net/OzxWHpOo570v4K3YhxC-xA==/8796093023794341611?param=200x0&type=1.jpg",
    author: "天蚕土豆",
    inShelf: false
  },{
    id: "000005",
    title: "美女总裁的贴身保镖",
    image: "https://easyreadfs.nosdn.127.net/BmadJuo77KjsCY4dsaSrnQ==/8796093022757381116",
    author: "松海听涛",
    inShelf: false
  },{
    id: "000006",
    title: "夜行者:平妖二十年",
    image: "https://easyreadfs.nosdn.127.net/z5V2IxawI2_VQ_JJ3XQuTA==/8796093023793847094",
    author: "南无袈裟理科佛",
    inShelf: true
  }
]

export default {
  getBooks (cb) {
    return () => cd(_books)
  }
}