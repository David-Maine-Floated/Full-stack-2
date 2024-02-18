import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>This Website was created by David Maine</h1>
      <div className="icons">
        <a href="https://www.linkedin.com/in/david-maine-548886b2/">
          <img src="/LinkedIn.svg.png" alt="" />
        </a>
        <a href="https://github.com/David-Maine-Floated">
          <img className="git" src="/GitHub-Mark.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
