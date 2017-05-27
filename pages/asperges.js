// import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Ja,</h1><span>en bij de AH kosten ze momenteel {props.priceInfo.price}</span>
    </div>
  )
}

Post.getInitialProps = async function (context) {
//   const { id } = context.query
  const res = await fetch(`https://albert-heijn.now.sh/ah/price?productId=wi99045&productUrl=https://www.ah.nl/producten/product/wi99045/ah-asperges-wit`)
//   console.log(res)
  const priceInfo = await res.json()
  console.log(`Fetched price info: ${priceInfo}`)
  return { priceInfo }
}

export default Post
