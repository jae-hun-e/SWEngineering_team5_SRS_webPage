import {AnimatePresence, motion} from "framer-motion";
import {AppProps} from "next/app";
import Layout from "@components/Layout";
import "../styles/tailwind.css";
import Head from "next/head";

function MyApp({Component, pageProps, router}: AppProps) {
  return (
    <div>
      <Head>
        <title>SRS-teemo</title>
        <meta name="viewport" content="user-scalable=no" />
      </Head>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          transition={{duration: 1}}
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
