// creating an footer for my  profile
const Footer = () => (
  //namining my footer and also styling it using jsx
  <div className="footer">
    © Copyright Simphiwe Gumbi 2023
    <style jsx>{`
      .footer {
        background-color: #013220;
        padding: 1rem;
        border-top: 1px solid #eee8aa;
        color: white;

        text-align: center;
        position: relative;
        bottom: 0;
        width: 100%;
      }
    `}</style>
  </div>
);
//exporting the footer
export default Footer;
