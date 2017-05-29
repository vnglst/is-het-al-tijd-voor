import Link from 'next/link'
import ah from '../utils/ah.js'

const Yes = ({ price, unit }) => {
  if (price <= 3.0) {
    return (
      <div>
        <h1>Ja,</h1><span>en bji de AH zijn ze ook nog wel te betalen: € {price} per {unit}</span>
      </div>
    )
  }
  return (
    <div>
      <h1>Ja,</h1><span>maar ze zijn wel behoorlijk duur bij de AH: € {price} per {unit}</span>
    </div>
  )
}

const No = () => (
  <div>
    <h1>Nee</h1>
    <span> - ze liggen in ieder geval niet in de schappen van de AH</span>
  </div>
)

const Post = ({ priceInfo }) => {
  console.log(priceInfo)
  return (
    <div>
      <ul>
        <li><Link href='/' as='/'><a>home</a></Link></li>
        {priceInfo.availability
          ? <Yes price={priceInfo.price} unit={priceInfo.unit} />
          : <No />}
      </ul>
      <a href='https://www.ah.nl/producten/product/wi99045/ah-asperges-wit'>Klik hier voor meer informatie</a>
    </div>
  )
}

Post.getInitialProps = async function (context) {
  const url = 'https://www.ah.nl/producten/product/wi99045/ah-asperges-wit'
  const productId = 'wi99045'
  const priceInfo = await ah.getPriceInfo(url, productId)
  console.log(`Fetched price info: ${priceInfo}`)
  return { priceInfo }
}

export default Post
