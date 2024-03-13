import "animate.css";

export default function Footer() {
  return (
    <div
      className="uk-section uk-section-default"
      style={{ backgroundColor: "#c8102e" }}
    >
      <div className="uk-container">
        <div
          className="uk-grid-small uk-grid-match uk-child-width-expand@s"
          uk-grid="true"
        >
          <div uk-scrollspy="cls: animate__animated animate__fadeIn; repeat: true">
            <h1 style={{ color: "white" }}>Professional Courier</h1>
            <p style={{ color: "white" }}>Tag Line here</p>
          </div>
          <div uk-scrollspy="cls: animate__animated animate__slideInDown; repeat: true">
            <h2 style={{ color: "white" }}>Quick Links</h2>
            <ul style={{ color: "white" }} className="uk-list">
              <li>Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div uk-scrollspy="cls: animate__animated animate__slideInDown; repeat: true">
            <h2 style={{ color: "white" }}>Contact Us</h2>
            <ul style={{ color: "white" }} className="uk-list">
              <li>
                <p style={{ color: "white" }}>
                  Email: <span>Courier@gmail.com</span>
                </p>
              </li>
              <li>
                <p style={{ color: "white" }}>
                  Mobile: <span>9876543210</span>
                </p>
              </li>
              <li>Social Media: </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
