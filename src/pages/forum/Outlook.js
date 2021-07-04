import Avatar from '../../components/Avatar'

export default function Outlook() {
  return ({
    title : `2050臺灣想像：從環境正義到永續轉型`,
    subtitle : `共同前進－台灣環境運動的突圍與展望`,
    content : content,
    speakers : speakers,
    imgSrc : 'img/speaks/tamsui-river.jpg',
  })
}

const speakers = (<div>
  <Avatar name="賴偉傑" avatarUrl="img/avatar/person-circle.svg"/>
  <Avatar name="李根政" avatarUrl="img/avatar/person-circle.svg"/>
  <Avatar name="詹順貴" avatarUrl="img/avatar/person-circle.svg"/>
  <Avatar name="朱增宏" avatarUrl="img/avatar/person-circle.svg"/>
  <Avatar name="林聖崇" avatarUrl="img/avatar/person-circle.svg"/>
  <Avatar name="陳曼麗" avatarUrl="img/avatar/person-circle.svg"/>
</div>)

const content = `
論壇第一個場次邀請六位環境運動前輩，從自身
經歷出發，談談以2050年為目標的環境運動想像。

生態保育聯盟總召集人林聖崇指出，石化、鋼鐵
兩個產業要是繼續發展下去，台灣將瀕臨死亡，
但社會對於經濟發展仍有執念。中鋼在高雄的第
二代焦爐已經開工了，一開火就是四十年，一熄
火就崩潰，雖然鋼鐵產業已無優勢。

然而，因為「深層政府」（deep state）的連結很強、
思維牢固不可破，要挑戰難度很高。「但大家也不
要垂頭喪氣，是有方法打破的，只是用傳統的方
法很困難。」
`
