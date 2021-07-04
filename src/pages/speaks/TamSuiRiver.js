import Avatar from '../../components/Avatar'

function TamSuiRiver() {
  return ({
    title : `淡水河今昔變遷二十年`,
    subtitle : `盼河川串起國土計畫寬廣可能`,
    content : content,
    speakers : speakers,
    imgsrc : 'img/speaks/tamsui-river.jpg',
  })
}

const speakers = (<div>
  <Avatar name="陳建志" avatarUrl="img/avatar/s3_chen.jpg"/>
  <Avatar name="張岱屏" avatarUrl="img/avatar/s3_chang.jpg"/>
  <Avatar name="李永展" avatarUrl="img/avatar/s3_lee.jpg"/>
</div>)

const content = `
「每個人心裡都有個淡水河的故事。」為雙北都會
帶來一份綠意與清涼的淡水河流域，20年前曾
是又黑又臭、岸邊垃圾山「峰峰相連」令人不忍
卒賭的慘狀。綠色公民行動聯盟20週年講座中，
由淡水河守護聯盟發起人、綠盟前秘書長陳建志、
資深環境記者張岱屏，與中華經濟研究院研究員
李永展回顧與淡水河一起流過的歲月。
`

export default TamSuiRiver
