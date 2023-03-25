// Import link component from next
import Link from "next/link";

// Styling for logo
const logoStyle = {
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 10,
  width: 60,
};

//creating the navigation to different pages and also styling using jsx
const Header = () => (
  <div className="logoAndHeading">
    <div className="linksClass">
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Projects">Projects</Link>
      <Link href="/Contact">Contact</Link>
      <Link href="/skills">Skills</Link>
    </div>

    {/* Styling for header #dedede*/}
    <style jsx>{`
    a {
        margin-right: 1rem;
    }
    .logoAndHeading {
        background-color: #013220;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.2rem;
        border-bottom: 1px solid #bdb76b;
        box-shadow: 3px 0px 8px #bdb76b;
    }
    .linksClass {
        text-decoration: none;
        margin-left: auto;
        margin-right: 1rem;
        margin: 15px;
    }
    h1 {
        display: inline;
        margin-right: 1rem;
        font-size: 2rem;
    }


Link {
       padding: 45px;
       text-decoration: none;
    }


      }
    `}</style>
  </div>
);
//exporting the header
export default Header;
