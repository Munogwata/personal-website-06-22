import '../styles/globals.scss'

import Layout from '../components/structure/Layout'

function MyApp({ Component, pageProps }) { return (
  <Layout>
<Component {...pageProps} />
  </Layout>
)


}

export default MyApp
