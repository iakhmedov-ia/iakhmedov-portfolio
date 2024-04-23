import "../styles/Footer.css";
import "../styles/Container.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_inner container">
        <p> © iakhmedov 2024 </p>
        <div className="loader"></div>
        <div className="footer_arrow">
          <a className="arrow" href="#Header" title="Go Up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M213.66,202.34a8,8,0,0,1-11.32,11.32L128,139.31,53.66,213.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0Zm-160-68.68L128,59.31l74.34,74.35a8,8,0,0,0,11.32-11.32l-80-80a8,8,0,0,0-11.32,0l-80,80a8,8,0,0,0,11.32,11.32Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
