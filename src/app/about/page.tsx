import "animate.css";

export default function About() {
  return (
    <div>
      <div className="uk-section" style={{ background: "#faeaeb" }}>
        <div
          className="uk-container uk-container-small"
          uk-scrollspy="cls: animate__animated animate__slideInUp; repeat: true; target: h1, h4, h5; delay: 100"
        >
          <h1 className="uk-text-center uk-heading-medium">About Us</h1>
          <h4 className="uk-text-center uk-text-justify">
            Established in 2022, Stratos Mail Pvt Ltd set out with a vision of
            delivering zero failure service across India and beyond, offering
            excellent services in key cities such as Bangalore, Mumbai, Chennai,
            Coimbatore, Tiruppur, Karur, Surat, Thane, Delhi, and more. Our
            mission was to revolutionize the logistics industry through
            innovation and an unwavering commitment to customer satisfaction.
            Utilizing our proprietary logistics operating system, we ensure the
            highest level of security and efficiency, providing our customers
            with peace of mind knowing their shipments are always safe and
            secure.
          </h4>
          <h5 className="uk-text-center" style={{ color: "#c8102e" }}>
            ✽✽✽✽✽
          </h5>
        </div>
      </div>
      <div className="uk-section">
        <div className="uk-container">
          <h1
            className="uk-text-center uk-text-bold"
            uk-scrollspy="cls: animate__animated animate__flipInX; repeat: true"
          >
            <span style={{ color: "#c8102e" }}>Why</span> Choose Us?
          </h1>
          <div className="uk-margin-large-top">
            <div
              className="uk-grid-small uk-child-width-expand@s uk-margin"
              uk-grid="true"
            >
              <div className="">
                <ul
                  className="uk-list"
                  uk-scrollspy="cls: animate__animated animate__slideInLeft; repeat: true; delay: 100; target: li"
                >
                  <li className="uk-text-justify">
                    <span style={{ color: "#c8102e" }}>✸ </span>
                    <b>User-Friendly Platform:</b> Registered customers can
                    easily generate airway bills and manage their shipments
                    through our intuitive online portal.
                  </li>
                  <li className="uk-text-justify">
                    <span style={{ color: "#c8102e" }}>✸ </span>
                    <b>Free Security Measures:</b> We provide complimentary
                    security envelope covers, packing boxes, and tapes for every
                    shipment, ensuring the safety of your goods throughout the
                    journey.
                  </li>
                  <li className="uk-text-justify">
                    <span style={{ color: "#c8102e" }}>✸ </span>
                    <b>Reliable Service:</b> With on-time pickups, real-time
                    tracking, and status updates via SMS and email, we keep you
                    informed every step of the way.
                  </li>
                  <li className="uk-text-justify">
                    <span style={{ color: "#c8102e" }}>✸ </span>
                    <b>Dedicated Support:</b> Our customer support team is
                    always available to assist you with any queries or concerns,
                    providing personalized assistance to ensure a smooth
                    shipping experience.
                  </li>
                </ul>
              </div>
              <div
                className=""
                uk-scrollspy="cls: animate__animated animate__slideInRight; repeat: true;"
              >
                <img
                  src="./WHY US.png"
                  width={500}
                  height={500}
                  alt="aboutus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section">
        <div className="uk-container">
          <h1
            className="uk-text-center uk-text-bold"
            uk-scrollspy="cls: animate__animated animate__flipInX; repeat: true"
          >
            <span style={{ color: "#c8102e" }}>How </span>Do We Work?
          </h1>
          <video
            className="uk-align-center uk-margin-top"
            src="./Final Stratos Explainer Video.mp4"
            width={800}
            height={800}
            controls
            playsInline
            uk-video="autoplay: inview"
          />
        </div>
      </div>
    </div>
  );
}
