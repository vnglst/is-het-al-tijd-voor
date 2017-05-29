import Link from 'next/link'
import ah from '../utils/ah.js'
import Head from 'next/head'

const answerStyle = `
  .answer {
    line-height: 24px;
    padding: 100px 0 20px 0;
    text-align: center;
  }

  .answer h1 {
    margin: 0;
    padding: 0;
    font-size: 140px;
    line-height: 180px;
  }

  .answer > .explanation {
    margin: 0;
    padding: 0;
  }
`

const footerStyle = `
  ul.footer {
    position: absolute;
    left: 20px;
    bottom: 20px;
    display: flex;
    justify-content: flex-start;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul.footer li {
    display: inline;
    padding: 0;
    margin: 0;
    margin-right: 10px;
  }
`

const Answer = ({ answer, explanation }) => (
  <div className='answer'>
    <style>{answerStyle}</style>
    <h1>{answer}</h1>
    <span className='explanation'>
      {explanation}
    </span>
  </div>
)

const Yes = ({ price, unit }) => {
  if (price <= 3.0) {
    return (
      <Answer
        answer='Ja'
        explanation={`en bij de AH zijn ze ook nog wel te betalen: €${price} per ${unit}`}
      />
    )
  }

  return (
    <Answer
      answer='Ja'
      explanation={`maar ze zijn wel behoorlijk duur bij de AH: €${price} per ${unit}`}
    />
  )
}

const No = () => (
  <Answer
    answer='Nee'
    explanation={`ze liggen in ieder geval niet in de schappen van de AH`}
  />
)

const Asperges = ({ priceInfo }) => {
  return (
    <div>
      <style jsx global>{`
          body {
            font: 14px Helvetica, Arial, sans-serif;
          }
      `}
      </style>
      <Head>
        <title>Is het al tijd voor asperges?</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='asperges'>
        {priceInfo.availability
          ? <Yes price={priceInfo.price} unit={priceInfo.unit} />
          : <No />}
        <ul className='footer'>
          <style>{footerStyle}</style>
          <li><Link href='/' as='/'><a>Home</a></Link></li>
          <li>
            <a href='https://www.ah.nl/producten/product/wi99045/ah-asperges-wit'>
              Asperges op AH.nl
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

Asperges.getInitialProps = async function (context) {
  const url = 'https://www.ah.nl/producten/product/wi99045/ah-asperges-wit'
  const productId = 'wi99045'
  const priceInfo = await ah.getPriceInfo(url, productId)
  console.log(`Fetched price info: ${JSON.stringify(priceInfo, null, 4)}`)
  return { priceInfo }
}

export default Asperges
