import Head from 'next/head'
import '&/reset.css'

import '&/global/global_style.css'
import style from '&/global/global_style.css'
import '&/particles/particles.css'

import particlesConfig from '@/particlesConfig.json'
import Particles from 'react-particles-js'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        {/* LINKS  */}
        <link rel="shortcut icon" href="../static/assets/favicon.svg" type="image/x-icon" />

        {/* FONTS  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700&display=block"
          rel="stylesheet"
        />

        <title>UnzippingThoughts</title>

      </Head>
      <div id="container">
        <Particles className="particles" params={particlesConfig} />
        <div id="sub_container"> {/* NÃO ADICIONE NADA AQUI, A PÁGINA É EDITA EM index.js */}

          {/* PAGES */}
          <Component {...pageProps} />
        </div>

        {/* PARTICLES BACKGROUND */}

      </div>
    </>
  );
}

export default MyApp
