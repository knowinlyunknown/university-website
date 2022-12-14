import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Registration.css";
import RegistrationFormPDF from "./RegistrationFormPDF";
import Loading from "../Common/Loading";
export default function () {
  const [studentDetails, setStudentDetails] = useState({});
  const [downloading, setDownloading] = useState(false);
  const [regId, setRegId] = useState("");

  const handleDownloadPDF = async (id) => {
    await setStudentDetails({
      name: "Borhan",
      studentID: "ASH2101008M",
      department: "CSTE",
      hall: "ASH",
      session: "2020-21",
      institute: "Eng.",
      year: "01",
      term: "01",
      course1Code: "CSTE1101",
      course1Title: "Computer Fundamentals",
      course1Credits: "4.00",
      course2Code: "CSTE1101",
      course2Title: "Computer Fundamentals",
      course2Credits: "4.00",

      course3Code: "CSTE1101",
      course3Title:
        "Computer Fundamentals Computer Fundamentals Computer FundamentalsComputer Fundamentals Computer Fundamentals Computer Fundamentals",
      course3Credits: "4.00",
    });
    const input = document.getElementById("makePDF");
    setDownloading(true);
    input.removeAttribute("hidden");
    var options = {
      quality: 1,
      scale: 5,
      dpi: 192,
      scrollX: 0,
      scrollY: -window.scrollY,
    };
    html2canvas(input, options).then((canvas) => {
      // var imgData = new Image();

      const imgData = canvas.toDataURL("image/png");

      // imgData.width = 500;
      const pdf = new jsPDF();
      input.setAttribute("hidden", "true");

      pdf.addImage(imgData, "PNG", 0, 0, 210, 300);

      // pdf.output('dataurlnewwindow');
      pdf.save(`dowload.pdf`);
      setDownloading(false);
    });
  };

  return (
    <>
      {downloading ? (
        <Loading data="Downloading"></Loading>
      ) : (
        <div className="pt-2 px-5 max-w-screen-lg mx-auto w-full mb-4">
          <h2 className="text-2xl  ">Registration Form</h2>
          <Link to="/registrationform" className="btn btn-ghost my-4">
            Register
          </Link>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Year</th>
                  <th>Term</th>
                  <th>Date</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>01</td>
                  <td>01</td>
                  <td>11-02-22</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleDownloadPDF(123)}
                    >
                      Download PDF
                    </button>
                  </td>
                  <td>
                    <label
                      htmlFor="my-modal-6"
                      onClick={() => setRegId("registration id")}
                      className="btn btn-ghost btn-xs"
                    >
                      View
                    </label>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              id="makePDF"
              hidden
              className="bg-blue-700  mx-auto"
              style={{ width: "100%", height: "100%" }}
            >
              <div
                className="px-10 py-10"
                style={{ width: "100%", height: "100%" }}
              >
                <RegistrationFormPDF
                  studentDetails={studentDetails}
                ></RegistrationFormPDF>
              </div>
            </div>
          </div>
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">
                  X
                </label>
              </div>

              <div className="py-4">
                <RegistrationFormPDF
                  studentDetails={{
                    name: "Borhan",
                    studentID: "ASH2101008M",
                    department: "CSTE",
                    hall: "ASH",
                    session: "2020-21",
                    institute: "Eng.",
                    year: "01",
                    term: "01",
                    course1Code: "CSTE1101",
                    course1Title: "Computer Fundamentals",
                    course1Credits: "4.00",
                    course2Code: "CSTE1101",
                    course2Title: "Computer Fundamentals",
                    course2Credits: "4.00",

                    course3Code: "CSTE1101",
                    course3Title:
                      "Computer Fundamentals Computer Fundamentals Computer FundamentalsComputer Fundamentals Computer Fundamentals Computer Fundamentals",
                    course3Credits: "4.00",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
