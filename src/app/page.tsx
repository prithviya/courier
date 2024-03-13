import "animate.css";
import Contact from "./contact/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="uk-section"
        style={{
          background: "#faeaeb",
          backgroundImage: `url("./heroSectionDelivery.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw 800px",
        }}
      >
        <div className="uk-container uk-container-large">
          <div className="uk-grid-small uk-child-width-expand@s" uk-grid="true">
            <div
              className="uk-padding-large"
              uk-scrollspy="cls: animate__animated animate__slideInLeft; repeat: true"
            >
              <h2 className="uk-margin-remove" style={{ color: "#c8102e" }}>
                THE FASTER THE BETTER
              </h2>
              <h1 className="uk-heading-medium uk-margin-small uk-text-bold">
                SECURE, FAST, AND RELIABLE
              </h1>
              <h4 className="uk-text-justify">
                Choose faster deliveries with our team – where velocity combines
                with safety and security. Trust our experienced courier
                professionals with over a decade of expertise in the delivery
                service industry, serving Coimbatore, Chennai, Karur, Tiruppur,
                Bangalore, Mumbai, Surat, and more.
              </h4>
              <Link href={"/contact"}>
                <button
                  className="uk-button uk-button-default uk-border-pill"
                  style={{
                    backgroundColor: "#c8102e",
                    textTransform: "none",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Enquiry Now
                </button>
              </Link>
            </div>
            <div>
              <div uk-scrollspy="cls: animate__animated animate__slideInRight; repeat: true">
                {/* <img
                  src="./heroSectionDelivery.png"
                  style={{ width: "1000px", height: "400px" }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section ">
        <div className="uk-container">
          <div style={{ textAlign: "center" }}>
            <h1
              uk-scrollspy="cls: animate__animated animate__flipInX; repeat: true"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              <span style={{ color: "#c8102e" }}>Follow </span>
              Simple Steps
            </h1>
            <div style={{ paddingTop: 8 }}>
              <div
                className="uk-grid-small uk-child-width-expand@s uk-text-center"
                uk-grid="true"
              >
                <div className="uk-padding">
                  <div>
                    <img
                      uk-scrollspy="cls: animate__animated animate__bounce; repeat: true"
                      src="./FILL THE FORM.gif"
                      width={220}
                      height={220}
                    />
                    <h4
                      className="uk-text-bold"
                      uk-scrollspy="cls: animate__animated animate__slideInUp; repeat: true"
                    >
                      Booking Convenience
                    </h4>
                    <p
                      className="uk-text-justify"
                      uk-scrollspy="cls: animate__animated animate__slideInUp; repeat: true"
                      style={{ marginTop: 2 }}
                    >
                      Easily schedule pickups for your shipments using NET KYC-
                      BOOKING. Rest assured, it ensures on-time arrival for
                      every shipment.
                    </p>
                  </div>
                </div>
                <div className="uk-padding">
                  <div>
                    <img
                      uk-scrollspy="cls: animate__animated animate__bounce; repeat: true"
                      src="./WE COLLECT.gif"
                      width={220}
                      height={220}
                    />
                    <h4
                      className="uk-text-bold"
                      uk-scrollspy="cls: animate__animated animate__slideInUp; repeat: true"
                    >
                      Automated Pickup Collection
                    </h4>
                    <p
                      className="uk-text-justify"
                      uk-scrollspy="cls: animate__animated animate__slideInUp; repeat: true"
                      style={{ marginTop: 2 }}
                    >
                      Experience streamlined pickup processes with automated
                      procedures. Our staff diligently follows protocols to
                      ensure the efficient collection of your shipments.
                    </p>
                  </div>
                </div>

                <div className="uk-padding">
                  <div>
                    <img
                      uk-scrollspy="cls: animate__animated animate__bounce; repeat: true"
                      src="./WE DELIVER.gif"
                      width={220}
                      height={220}
                    />
                    <h4
                      className="uk-text-bold"
                      uk-scrollspy="cls: animate__animated animate__slideInUp; repeat: true"
                    >
                      Secure Deliveries
                    </h4>
                    <p
                      className="uk-text-justify"
                      uk-scrollspy="cls: animate__animated animate__slideInUp; repeat: true"
                      style={{ marginTop: 2 }}
                    >
                      Benefit from secured deliveries with insurance coverage.
                      Each shipment is carefully handled, scanned, and sealed
                      for maximum protection during transit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section" style={{ background: "#faeaeb" }}>
        <div className="uk-container">
          <div style={{ textAlign: "center" }}>
            <h1
              uk-scrollspy="cls: animate__animated animate__flipInX; repeat: true"
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              <span style={{ color: "#c8102e" }}>S</span>
              ervices
            </h1>
            <div style={{ paddingTop: 8 }}>
              <div
                className="uk-grid-small uk-grid-match uk-child-width-expand@s uk-text-center"
                uk-grid="true"
              >
                <div uk-scrollspy="cls: animate__animated animate__fadeIn; repeat: true">
                  <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
                    <div>
                      <div style={{ width: 200, height: 100 }}>
                        <img
                          src="./COURIER.gif"
                          width={140}
                          height={140}
                          alt="expressDelivery"
                        />
                      </div>
                      <h4 className="uk-text-bold">Domestic Courier</h4>
                      <p className="uk-text-justify" style={{ marginTop: 2 }}>
                        From small parcels to large shipments, our domestic
                        courier service ensures swift and reliable delivery to
                        any destination across India.
                      </p>
                      <Link href={"/contact"}>
                        <button
                          className="uk-button uk-button-default uk-border-pill"
                          style={{
                            backgroundColor: "#c8102e",
                            textTransform: "none",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Enquiry Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div uk-scrollspy="cls: animate__animated animate__fadeIn; repeat: true">
                  <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
                    <div>
                      <div style={{ width: 200, height: 100 }}>
                        <img
                          src="./CARGO.gif"
                          width={140}
                          height={140}
                          alt="animation3"
                        />
                      </div>
                      <h4 className="uk-text-bold">B2B Air Cargo</h4>
                      <p className="uk-text-justify" style={{ marginTop: 2 }}>
                        Need to transport goods quickly? Our B2B air cargo
                        services guarantee efficient delivery, providing
                        businesses with the speed and reliability they require.
                      </p>
                      <Link href={"/contact"}>
                        <button
                          className="uk-button uk-button-default uk-border-pill"
                          style={{
                            backgroundColor: "#c8102e",
                            textTransform: "none",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Enquiry Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div uk-scrollspy="cls: animate__animated animate__fadeIn; repeat: true">
                  <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
                    <div>
                      <div style={{ width: 200, height: 100 }}>
                        <img
                          src="./PORT TO PORT.gif"
                          width={130}
                          height={80}
                          alt="animation2"
                        />
                      </div>
                      <h4 className="uk-text-bold">Port to port</h4>
                      <p className="uk-text-justify" style={{ marginTop: 2 }}>
                        Streamline your logistics with our airport-to-airport
                        service, ensuring seamless transportation of goods from
                        one airport to another.
                      </p>
                      <Link href={"/contact"}>
                        <button
                          className="uk-button uk-button-default uk-border-pill"
                          style={{
                            backgroundColor: "#c8102e",
                            textTransform: "none",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Enquiry Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div uk-scrollspy="cls: animate__animated animate__fadeIn; repeat: true">
                  <div className="uk-card uk-card-default uk-card-body uk-border-rounded">
                    <div>
                      <div style={{ width: 200, height: 100 }}>
                        <img
                          src="./CHARTER FLIGHT.gif"
                          alt="bulkDelivery"
                          width={150}
                          height={150}
                        />
                      </div>
                      <h4 className="uk-text-bold">Cargo Charter Flights</h4>
                      <p className="uk-text-justify" style={{ marginTop: 2 }}>
                        For larger shipments or time-sensitive deliveries, our
                        Agreed charter flights offer a flexible and efficient
                        solution tailored to your specific needs with Insurance
                        Climbs for Ton ranged Goods.
                      </p>
                      <Link href={"/contact"}>
                        <button
                          className="uk-button uk-button-default uk-border-pill"
                          style={{
                            backgroundColor: "#c8102e",
                            textTransform: "none",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Enquiry Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section-default">
        <div className="uk-container">
          {/* <h1
            style={{
              color: "black",
              fontWeight: "bold",
            }}
            className="uk-text-center"
            uk-scrollspy="cls: animate__animated animate__flipInX; repeat: true"
          >
            <span style={{ color: "#c8102e" }}>V</span>
            ideos
          </h1> */}
          <video
            className="uk-align-center"
            src="./Final Stratos Explainer Video.mp4"
            width={800}
            height={800}
            controls
            playsInline
            uk-video="autoplay: inview"
          />
        </div>
      </div>
      <div className="uk-section" style={{ background: "#faeaeb" }}>
        <div className="uk-container">
          <div>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
              }}
              className="uk-text-center"
              uk-scrollspy="cls: animate__animated animate__flipInX; repeat: true"
            >
              <span style={{ color: "#c8102e" }}>About </span>
              Us
            </h1>
            <div
              className="uk-grid-small uk-grid-match uk-child-width-expand@s"
              uk-grid="true"
            >
              <div uk-scrollspy="cls: animate__animated animate__fadeInLeft; repeat: true">
                <h4 className="uk-margin-large-top">
                  Stratos Mail Pvt Ltd was founded in 2022 to revolutionize the
                  logistics industry through innovation and a dedication to
                  customer satisfaction. Our proprietary logistics operating
                  system ensures the highest level of security and efficiency,
                  providing our customers with peace of mind knowing their
                  shipments are safe.
                </h4>
                <Link href={"/about"}>
                  <button
                    className="uk-button uk-button-default uk-border-pill uk-width-1-2"
                    style={{
                      backgroundColor: "#c8102e",
                      textTransform: "none",
                      fontWeight: "bold",
                      color: "white",
                      height: 50,
                    }}
                  >
                    Know More
                  </button>
                </Link>
              </div>
              <div uk-scrollspy="cls: animate__animated animate__fadeInRight; repeat: true">
                <img
                  src="./aboutuspage.png"
                  alt="about us"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
