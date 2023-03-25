//importing the componets
import Link from "next/link";
import Layout from "../componets/Layout";
import Image from "next/image";
//creating the front page and inserting the image and styling using jsx
export default () => (
  <Layout>
    <div>
      <h1>Simphiwe Gumbi</h1>
    </div>
    <div className="images">
      <Image
        src="/static/images/simphiwe.jpg"
        alt="my favorite quote"
        width="300"
        height="300"
      />
    </div>

    <style jsx>{`
      .images {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        boader-radius: 50px;
      }
      h1 {
        text-align: center;
      }
    `}</style>
  </Layout>
);
