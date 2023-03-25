import Link from "next/link";
//import Layout from "../../nextExample/components/MyLayout";
//import Header from "../componets/Header";
import Layout2 from "../componets/Layout";
export default () => (
  <Layout2>
    <div>
      <div>
        <h1>Projects</h1>
      </div>
      <div className="projects">
        <h2>Shoping cart</h2>
        <p>
          i created a online store for selling apple products using
          html,css,javascript
        </p>

        <Link href="https://github.com/SimphiweGumbi/OnlineStore">
          <button>Github Link</button>
        </Link>
      </div>
      <div className="projects">
        <h2>Minesweeper</h2>
        <p>a Minesweeper game using react js</p>
        <Link href="https://github.com/SimphiweGumbi/react-minesweeper">
          <button>Github Link</button>
        </Link>
      </div>
      <div className="projects">
        <h2>Itunes search</h2>
        <p>
          search your media from books music movies using react node js and
          express
        </p>
        <Link href="https://github.com/SimphiweGumbi/ITUNES">
          <button>Github Link</button>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .projects {
        border: 1px solid #013220;
        border-radius: 8px;
      }
      h1 {
        text-align: center;
      }
      button {
        background-color: green;
      }
    `}</style>
  </Layout2>
);
//border: 1px solid #f0e68c;
// border-radius: 8px;
