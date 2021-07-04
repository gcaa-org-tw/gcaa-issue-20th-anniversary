import Avatar from '../../components/Avatar'

export default function ChangTseChou() {
  return ({
    title:  `如何從草根中學習？`,
    subtitle : `公益、生態、社會的漫長追尋`,
    content : content,
    speakers : speakers,
    imgSrc : 'img/speaks/chang-tc.jpg',
  })
}

const speakers = (<div>
  <Avatar name="張則周" avatarUrl="img/avatar/s2_chang.jpg"/>
</div>)

const content = `
「大家都希望台灣變成讓人尊重、值得驕傲的國家，
但經過這些年的努力，我們離目標還有多遠？」
現年91歲的台大農化系教授張則周在演講提問，
走過飢荒、戰亂、白色恐怖等苦難，卻從未失去
希望與熱情的張則周認為，現在的台灣需要再提
高國民素質，且有素質的人都願意關心公共事務、
願意團結，願意參與改革，這要靠著教育與終生
學習來達成。
`
