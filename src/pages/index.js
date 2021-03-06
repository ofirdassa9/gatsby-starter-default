import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  { text: "יצירת קשר", url: "using-typescript" },
  { text: "פסקי דין", url: "using-ssr" },
]

const moreLinks = [
  { text: "Facebook", url: "https://facebook.com" },
  {
    text: "Instagram",
    url: "https://instagram.com",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div dir="rtl" className={styles.textCenter}>
      <h1>
        <b>רועי רותם, משרד עו"ד</b>
      </h1>
      <h1>אודות</h1>
      <div>ספורט וכמקובל רבה אם. אל עוד עיצוב מיותר למחיקה, אם היא העזרה בקלות מיוחדים. על קישורים ומהימנה עוד, ערבית לציין בידור על שער. היום דפים חרטומים את שתי. אם שער ליום פיסול מאמרשיחהצפה. זכר על הספרות מדריכים אקטואליה, והוא סטטיסטיקה פסיכולוגיה מתן על, מה עוד יוני בחירות רב־לשוני. כימיה והנדסה פסיכולוגיה כדי מה, תנך על החלה ויקי ובמתן, ריקוד ספורט או מדע.</div>
    </div>
    <br />
    <br />
    <br />
    <div dir="rtl" className={styles.textCenter}>
      <h1>פסקי דין</h1>
      <div>ספורט וכמקובל רבה אם. אל עוד עיצוב מיותר למחיקה, אם היא העזרה בקלות מיוחדים. על קישורים ומהימנה עוד, ערבית לציין בידור על שער. היום דפים חרטומים את שתי. אם שער ליום פיסול מאמרשיחהצפה. זכר על הספרות מדריכים אקטואליה, והוא סטטיסטיקה פסיכולוגיה מתן על, מה עוד יוני בחירות רב־לשוני. כימיה והנדסה פסיכולוגיה כדי מה, תנך על החלה ויקי ובמתן, ריקוד ספורט או מדע.</div>
    </div>
    <br />
    <br />
    <br />
    <div dir="rtl" className={styles.textCenter}>
      <h1>צור קשר</h1>
      <table className={styles.table}>
        <tr>
          <th>מייל:</th>
          <td>office@rotemadv.com</td>
        </tr>
        <tr>
          <th>טלפון:</th>
          <td>0523456789</td>
        </tr>
        <tr>
          <th>כתובת:</th>
          <td>כתובת כלשהי רשומה פה</td>
        </tr>
    </table>
    </div>  
    <div className={styles.textCenter}>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`} className={styles.intro}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </div>
  </Layout>
)

export default IndexPage
