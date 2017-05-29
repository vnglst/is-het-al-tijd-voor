import Link from 'next/link'
import ah from '../utils/ah.js'

const Post = (props) => {
  return (
    <div>
      <ul>
        <li><Link href='/' as='/'><a>home</a></Link></li>
      </ul>
      <h1>Ja,</h1><span>en bij de AH kosten ze momenteel {props.priceInfo.price}</span>
    </div>
  )
}

Post.getInitialProps = async function (context) {
  const url = 'https://www.ah.nl/producten/product/wi99045/ah-asperges-wit'
  const productId = 'wi99045'
  const priceInfo = await ah.getPriceInfo(url, productId)
  console.log(`Fetched price info: ${priceInfo.price}`)
  return { priceInfo }
}

export default Post
