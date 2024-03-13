"use client";
import "animate.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div
      className="uk-section uk-padding-small"
      style={{ background: "#faeaeb" }}
    >
      <nav className="uk-navbar-container" style={{ background: "#faeaeb" }}>
        <div className="uk-container">
          <div
            uk-navbar="true"
            uk-scrollspy="cls: animate__animated animate__slideInDown; repeat: true"
          >
            <div className="uk-navbar-left">
              <img src="./icon.png" alt="icon" width={65} height={65} />
            </div>
            <div className="uk-navbar-center">
              <ul className="uk-navbar-nav uk-text-bold">
                <li className={pathname === "/" ? "uk-active" : ""}>
                  <a href="/">Home</a>
                </li>
                <li className={pathname === "/service" ? "uk-active" : ""}>
                  <a href="/service">Services</a>
                </li>
                <li className={pathname === "/about" ? "uk-active" : ""}>
                  <a href="/about">About Us</a>
                </li>

                <li className={pathname === "/career" ? "uk-active" : ""}>
                  <a href="/contact">Career</a>
                </li>
                <li className={pathname === "/bookshipment" ? "uk-active" : ""}>
                  <a href="/contact">Book a Shipment</a>
                </li>
                <li>
                  <a
                    href="https://app.mystratos.co.in/BookingScanning/GetAWBillTracking"
                    target="_blank"
                  >
                    Track
                  </a>
                </li>
                <li className={pathname === "/contact" ? "uk-active" : ""}>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
