import "animate.css";

export default function Service() {
  return (
    <div>
      <div className="uk-section" style={{ background: "#faeaeb" }}>
        <div
          className="uk-container uk-container-small"
          uk-scrollspy="cls: animate__animated animate__slideInUp; repeat: true; target: h1, h4, h5; delay: 100"
        >
          <h1 className="uk-text-center uk-heading-medium">Services</h1>
          <h4 className="uk-text-center">
            In Thane, Delhi, Salem, Tiruppur, Madurai, Surat, Bangalore, Mumbai,
            and more, Startos prioritizes the safety and security of your
            shipments. We ensure a seamless experience, from couriering and
            packaging to scanning and delivery. Once registered, your shipment
            is sealed, invoiced, and provided with an airway bill, all in one
            go. Additionally, we offer same-day delivery services for your
            convenience.
          </h4>
          <h5 className="uk-text-center" style={{ color: "#c8102e" }}>
            ✽✽✽✽✽
          </h5>
        </div>
      </div>
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-2@s uk-grid-small" uk-grid="true">
            <div>
              <h2 className="uk-text-bold">Special Services</h2>
              <div className="">
                <ul
                  className="uk-list"
                  uk-scrollspy="cls: animate__animated animate__slideInLeft; repeat: true; delay: 100; target: li"
                >
                  <li className="">
                    <span style={{ color: "#c8102e" }}>✸ </span>
                    Stratos provides same-day delivery for critical segments,
                    ensuring urgent shipments reach their destination promptly.
                  </li>
                  <li className="">
                    <span style={{ color: "#c8102e" }}>✸ </span>
                    Our efficient customer care service is always available to
                    address any inquiries or concerns.
                  </li>
                  <li className="">
                    <span style={{ color: "#c8102e" }}>✸ </span>
                    We offer high-quality packaging materials such as wires,
                    boxes, and tape for all your shipments.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="uk-text-bold">Customer Portal and Guarantees</h2>
              <div className="">
                <ul
                  className="uk-list"
                  uk-scrollspy="cls: animate__animated animate__slideInRight; repeat: true; delay: 100; target: li"
                >
                  <li className="">
                    <span style={{ color: "#c8102e" }}>✸ </span>
                    Registered customers gain access to their portal for airway
                    bills, shipment history, invoices, and payment gateway.
                  </li>
                  <li className="">
                    <span style={{ color: "#c8102e" }}>✸ </span>
                    Our guarantee of on-time, secured, fast, and reliable
                    delivery reflects our unwavering commitment to customer
                    satisfaction.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section">
        <div className="uk-container">
          <div
            className="uk-grid-small uk-child-width-expand@s uk-margin-large-top"
            uk-grid="true"
          >
            <div
              className=""
              uk-scrollspy="cls: animate__animated animate__slideInLeft;"
            >
              <h2 className="uk-text-bold">
                <span style={{ color: "#c8102e" }}>Domestic </span> Courier
              </h2>
              <h5 className="">
                From small parcels to large shipments, our domestic courier
                service ensures timely and reliable delivery to any destination
                across India. With our extensive network and dedicated team, you
                can trust us to handle your shipments with care and efficiency.
              </h5>
            </div>
            <div
              className=""
              uk-scrollspy="cls: animate__animated animate__slideInRight;"
            >
              <img src="./COURIER.gif" width={400} height={400} alt="aboutus" />
            </div>
          </div>
          <div
            className="uk-grid-small uk-child-width-expand@s uk-margin-large-top"
            uk-grid="true"
          >
            <div
              className=""
              uk-scrollspy="cls: animate__animated animate__slideInUp;"
            >
              <img src="./CARGO.gif" width={400} height={400} alt="aboutus" />
            </div>
            <div
              className=""
              uk-scrollspy="cls: animate__animated animate__slideInUp;"
            >
              <h2 className="uk-text-bold">
                <span style={{ color: "#c8102e" }}>B2B</span> Air Cargo
              </h2>
              <h5 className="">
                When you need to transport goods quickly, our B2B air cargo
                services are the ideal solution. Designed to meet the speed and
                reliability requirements of businesses, our air cargo services
                ensure efficient delivery of your shipments.
              </h5>
            </div>
          </div>
          <div
            className="uk-grid-small uk-child-width-expand@s uk-margin-large-top"
            uk-grid="true"
          >
            <div
              className=""
              uk-scrollspy="cls: animate__animated animate__slideInLeft;"
            >
              <h2 className="uk-text-bold">
                <span style={{ color: "#c8102e" }}>Port </span> to Port
              </h2>
              <h5 className="">
                Rest assured, we have got you covered with comprehensive
                insurance for your goods, providing peace of mind in case of any
                unforeseen events. Additionally, capitalize on our same-day
                delivery options to ensure swift and efficient transportation
                from port to port. Whether it is across the globe or just around
                the corner, we will ensure your cargo reaches its destination
                seamlessly and on time.
              </h5>
            </div>
            <div
              className=""
              uk-scrollspy="cls: animate__animated animate__slideInRight;"
            >
              <img
                src="./PORT TO PORT.gif"
                width={400}
                height={400}
                alt="aboutus"
              />
            </div>
          </div>
          <div
            className="uk-grid-small uk-child-width-expand@s uk-margin-large-top"
            uk-grid="true"
          >
            <div
              className=""
              uk-scrollspy="cls: animate__animated animate__slideInUp;"
            >
              <img
                src="./CHARTER FLIGHT.gif"
                width={400}
                height={400}
                alt="aboutus"
              />
            </div>
            <div
              className=""
              uk-scrollspy="cls: animate__animated animate__slideInUp;"
            >
              <h2 className="uk-text-bold">
                <span style={{ color: "#c8102e" }}>Cargo </span> Charter Flights
              </h2>
              <h5 className="">
                Our cargo charter flights offer a flexible and efficient
                solution for larger shipments or time-sensitive deliveries,
                tailored precisely to your needs. Whether you are transporting
                perishable goods or oversized cargo, our flights provide
                reliable transportation options. Through our partnerships with
                premium companies, we ensure that even ton-ranged goods are
                carried with assurance. Additionally, we offer insurance
                coverage to safeguard your goods against any unexpected
                situations, providing you with peace of mind throughout the
                journey.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
