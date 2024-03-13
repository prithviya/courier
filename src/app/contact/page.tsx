"use client";
import "animate.css";
import { FormEvent, useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Contact() {
  const [others, setOthers] = useState(false);
  const [experience, setExperience] = useState(false);
  const [awbNumber, setAwbNumber] = useState(false);
  const feedbackRef = useRef<HTMLFormElement>(null);
  const businessEnquiryRef = useRef<HTMLFormElement>(null);
  const franchiseeRef = useRef<HTMLFormElement>(null);

  const shipmentHandle = (value: string) => {
    if (value === "Others") {
      setOthers(true);
      return;
    }
    setOthers(false);
  };
  const experienceHandle = (value: string) => {
    if (value === "Yes") {
      setExperience(true);
      return;
    }
    setExperience(false);
  };
  const awbShipmentNumber = (value: string) => {
    if (value === "shipment") {
      setAwbNumber(true);
      return;
    }
    setAwbNumber(false);
  };
  const onSubmitFeedback = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        body: formData,
      });
      const res = await response.json();
      if (res.status === 200) {
        console.log("response from Feedback", res);
        feedbackRef?.current?.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onSubmitBusinessEnquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/businessEnquiry", {
        method: "POST",
        body: formData,
      });
      const res = await response.json();
      if (res.status === 200) {
        businessEnquiryRef?.current?.reset();
        console.log("response from Feedback", res);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onSubmitFranchisee = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/franchisee", {
        method: "POST",
        body: formData,
      });
      const res = await response.json();
      if (res.status === 200) {
        franchiseeRef?.current?.reset();
        console.log("response from Feedback", res);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-text-center">
            <h1
              className="uk-text-center uk-text-bold"
              uk-scrollspy="cls: animate__animated animate__flipInX; repeat: true"
            >
              <span style={{ color: "#c8102e" }}>Contact</span> Us
            </h1>
            <div className="">
              <div
                className="uk-grid-small uk-child-width-expand@s"
                uk-grid="true"
              >
                <div>
                  <video
                    src="office_address.mp4"
                    width="125"
                    height="125"
                    // alt="office_address"
                  />
                  <h3>Our Office Address</h3>
                  <p>
                    14A-5, Rayarpalayam, tiruppur road,<br/>
                    Palladam -641664
                  </p>
                </div>
                <div>
                  <video
                    src="office_address.mp4"
                    width="125"
                    height="125"
                    // alt="office_address"
                  />
                  <h3>General Enquiries</h3>
                  <p>
                    contactus@mystratos.co,in
                  </p>
                </div>
                <div>
                  <video
                    src="office_address.mp4"
                    width="125"
                    height="125"
                    // alt="office_address"
                  />
                  <h3>Call Us</h3>
                  <p>
                    73006 74006
                  </p>
                </div>
                <div>
                  <video
                    src="office_address.mp4"
                    width="125"
                    height="125"
                    // alt="office_address"
                  />
                  <h3>Our Timing</h3>
                  <p>Mor - Sat : 10.00 - 05.30</p>
                </div>
              </div>
            </div>
            {/* <h4 className="uk-text-bold">
              Please Contact Us through mail. You will get response within 2
              bussiness days. <br />
              MAIL: contactus@mystratos.co.in CC: udheyakumar@mystratos.co.in
            </h4> */}
            <p className="uk-margin-top" style={{ color: "#c8102e" }}>
              ✱✱✱✱✱
            </p>
          </div>

          <div className="">
            <Tabs>
              <TabList className="uk-flex uk-flex-center">
                <Tab>Business Enquiry</Tab>
                <Tab>Feedback</Tab>
                <Tab>Franchisee Enquiry</Tab>
              </TabList>
              <TabPanel>
                <div
                  className="uk-grid-small uk-child-width-expand@s"
                  uk-grid="true"
                >
                  <div className="uk-flex uk-flex-middle">
                    <img src="./BUSINESS QUERY.png" width={600} height={600} />
                  </div>
                  <div>
                    <form
                      ref={businessEnquiryRef}
                      onSubmit={onSubmitBusinessEnquiry}
                    >
                      <div className="uk-margin">
                        <label>Name</label>
                        <input
                          name="fullName"
                          className="uk-input"
                          type="text"
                          placeholder="Full Name"
                          aria-label="name"
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Mobile (10 Digit Number)</label>
                        <input
                          name="mobile"
                          className="uk-input"
                          type="tel"
                          pattern="[789][0-9]{9}"
                          maxLength={10}
                          placeholder="Mobile Number"
                          aria-label="mobile"
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Email</label>
                        <input
                          name="email"
                          className="uk-input"
                          type="email"
                          placeholder="Email"
                          aria-label="email"
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Address</label>
                        <textarea
                          name="address"
                          className="uk-textarea"
                          rows={2}
                          placeholder="Street Name, Area Name"
                          aria-label="address1"
                        ></textarea>
                      </div>
                      <div className="uk-margin">
                        <label>City</label>
                        <input
                          name="city"
                          className="uk-input"
                          type="text"
                          placeholder="City"
                          aria-label="City"
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Pincode</label>
                        <input
                          name="pincode"
                          className="uk-input"
                          type="number"
                          placeholder="Pincode"
                          aria-label="Pincode"
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Register Name of Your Company</label>
                        <input
                          name="companyName"
                          className="uk-input"
                          type="text"
                          placeholder="Company"
                          aria-label="Company"
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Business Type</label>
                        <select name="businessType" className="uk-select">
                          <option value={"Limited"}>Limited</option>
                          <option value={"Pvt Ltd"}>Pvt Ltd</option>
                          <option value={"Sole Proprietorship"}>
                            Sole Proprietorship
                          </option>
                          <option value={"LLP"}>LLP</option>
                          <option value={"General or limited partnership"}>
                            General or limited partnership
                          </option>
                          <option value={"Corporation"}>Corporation</option>
                          <option value={"Limited liability company (LLC)"}>
                            Limited liability company (LLC)
                          </option>
                        </select>
                      </div>
                      <div className="uk-margin">
                        <label>Estimated Pick Up Daily</label>
                        <select className="uk-select" name="pickUpDaily">
                          <option value={"0 to 5"}>0 to 5</option>
                          <option value={"5 to 10"}>5 to 10</option>
                          <option value={"10 to 15"}>10 to 15</option>
                          <option value={"15 to 20"}>15 to 20</option>
                          <option value={"20 to 25"}>20 to 25</option>
                          <option value={"25+"}>25+</option>
                          <option value={"50+"}>50+</option>
                          <option value={"100+"}>100+</option>
                        </select>
                      </div>
                      <div className="uk-margin">
                        <label>Content of the Shipment</label>
                        <select
                          name="shipment"
                          className="uk-select"
                          onChange={(event) =>
                            shipmentHandle(event.target.value)
                          }
                        >
                          <option value={"Finished Garments"}>
                            Finished Garments
                          </option>
                          <option value={"Textiles"}>Textiles</option>
                          <option value={"Other industrial orient to textiles"}>
                            Other industrial orient to textiles
                          </option>
                          <option value={"Machinery Industry"}>
                            Machinery Industry
                          </option>
                          <option value={"Others"}>Others</option>
                        </select>
                      </div>
                      {others ? (
                        <div className="uk-margin">
                          <textarea
                            name="others"
                            className="uk-textarea"
                            rows={2}
                          ></textarea>
                        </div>
                      ) : null}
                      <div className="uk-margin">
                        <label>Which Service Type Are You Interested In?</label>
                        <select name="serviceType" className="uk-select">
                          <option value={"Courier"}>Courier</option>
                          <option value={"Air Cargo"}>Air Cargo</option>
                          <option value={"Airport To Airport"}>
                            Airport To Airport
                          </option>
                          <option value={"Charter Flight"}>
                            Charter Flight
                          </option>
                        </select>
                      </div>
                      <div className="uk-margin">
                        <label>
                          <input
                            name="callMailAccepted"
                            className="uk-checkbox"
                            type="checkbox"
                            checked={true}
                          />{" "}
                          I agree and allow stratos mail private limited
                          representative to call or e-mail regarding the enquiry
                        </label>
                      </div>
                      <button
                        className="uk-button uk-button-primary uk-border-pill"
                        style={{ background: "#c8102e" }}
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div
                  className="uk-grid-small uk-child-width-expand@s"
                  uk-grid="true"
                >
                  <div className="uk-flex uk-flex-middle">
                    <img src="./FEEDBACK.png" width={600} height={600} />
                  </div>
                  <div className="">
                    <form ref={feedbackRef} onSubmit={onSubmitFeedback}>
                      <div className="uk-margin">
                        <label>Feedback related to?</label>
                        <select
                          className="uk-select"
                          onChange={(event) =>
                            awbShipmentNumber(event.target.value)
                          }
                          name="relatedTo"
                        >
                          <option value={"employee"}>Employee</option>
                          <option value={"shipment"}>Shipment</option>
                        </select>
                      </div>
                      {awbNumber ? (
                        <div className="uk-margin">
                          <label>AWB Number</label>
                          <input
                            name="awbNumber"
                            className="uk-input"
                            type="number"
                            maxLength={10}
                            placeholder="AWB"
                            aria-label="Awb"
                          />
                        </div>
                      ) : null}
                      <div className="uk-margin">
                        <label>Name</label>
                        <input
                          name="fullName"
                          className="uk-input"
                          type="text"
                          placeholder="Full Name"
                          aria-label="name"
                          required
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Mobile (10 Digit Number)</label>
                        <input
                          name="mobile"
                          className="uk-input"
                          type="number"
                          maxLength={10}
                          placeholder="Mobile Number"
                          aria-label="mobile"
                          required
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Email</label>
                        <input
                          name="email"
                          className="uk-input"
                          type="email"
                          placeholder="Email"
                          aria-label="email"
                          required
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Enter Feedback</label>
                        <textarea
                          name="feedback"
                          className="uk-textarea"
                          rows={5}
                          placeholder="Feedback"
                          aria-label="Feedback"
                        ></textarea>
                      </div>
                      <div className="uk-margin">
                        <label>
                          <input
                            className="uk-checkbox"
                            type="checkbox"
                            checked={true}
                            name="callMailAccepted"
                          />{" "}
                          I agree and allow stratos mail private limited
                          representative to call or e-mail regarding the enquiry
                        </label>
                      </div>
                      <button
                        className="uk-button uk-button-primary uk-border-pill"
                        style={{ background: "#c8102e" }}
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div
                  className="uk-grid-small uk-child-width-expand@s"
                  uk-grid="true"
                >
                  <div className="uk-flex uk-flex-middle">
                    <img src="./FRANCHISEE.png" width={600} height={600} />
                  </div>
                  <div>
                    <form ref={franchiseeRef} onSubmit={onSubmitFranchisee}>
                      <div className="uk-margin">
                        <label>Name</label>
                        <input
                          name="fullName"
                          className="uk-input"
                          type="text"
                          placeholder="Full Name"
                          aria-label="name"
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Mobile (10 Digit Number)</label>
                        <input
                          name="mobile"
                          className="uk-input"
                          type="number"
                          maxLength={10}
                          placeholder="Mobile Number"
                          aria-label="mobile"
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Email</label>
                        <input
                          name="email"
                          className="uk-input"
                          type="email"
                          placeholder="Email"
                          aria-label="email"
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Address</label>
                        <textarea
                          name="address"
                          className="uk-textarea"
                          rows={2}
                          placeholder="Street Name, Area Name"
                          aria-label="address1"
                        ></textarea>
                      </div>
                      <div className="uk-margin">
                        <label>City</label>
                        <input
                          name="city"
                          className="uk-input"
                          type="text"
                          placeholder="City"
                          aria-label="City"
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Pincode</label>
                        <input
                          name="pincode"
                          className="uk-input"
                          type="number"
                          placeholder="Pincode"
                          aria-label="Pincode"
                        />
                      </div>
                      <div className="uk-margin">
                        <label>Do you have experience in this industry?</label>
                        <select
                          name="experience"
                          className="uk-select"
                          onChange={(event) =>
                            experienceHandle(event.target.value)
                          }
                        >
                          <option value={"No"}>No</option>
                          <option value={"Yes"}>Yes</option>
                        </select>
                      </div>
                      {experience ? (
                        <div>
                          <textarea
                            name="experienceShared"
                            className="uk-textarea"
                            rows={3}
                            placeholder="Share your Experience"
                          ></textarea>
                        </div>
                      ) : null}
                      <div className="uk-margin">
                        <label>
                          <input
                            name="callMailAccepted"
                            className="uk-checkbox"
                            type="checkbox"
                            checked={true}
                          />{" "}
                          I agree and allow stratos mail private limited
                          representative to call or e-mail regarding the enquiry
                        </label>
                      </div>
                      <button
                        className="uk-button uk-button-primary uk-border-pill"
                        style={{ background: "#c8102e" }}
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
