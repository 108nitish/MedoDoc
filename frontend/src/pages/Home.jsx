import React from "react";
import Header from "../components/utils/Header";
import Navbar from "../components/utils/Navbar";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex items-center mt-4 bg-purple-50">
        <div className=" mx-24 ">
          <div className=" font-thin text-2xl  p-4 flex justify-center ">
            Welcome to MedoDoc - Your Personal Medical Assistant!
          </div>
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-3 gap-x-14 gap-y-9 mx-20 my-9 ">
          <div className=" bg-slate-50 shadow-lg rounded-md flex flex-col justify-center items-center hover:bg-purple-50 text-justify">
            <div className="heading font-semibold mt-7 my-4 mx-4 text-xl text-purple-900 ">
              Prediction of disease
            </div>
            <hr className="mx-3" />
            <div className="mx-4 my-4">
              The disease prediction feature allows patients to enter their
              symptoms, which the system then analyzes to predict possible
              diseases. This process involves matching the symptoms against a
              comprehensive dataset, resulting in a likely diagnosis. The
              predicted disease is then shared with the patient, along with
              relevant information and recommended doctors.
            </div>
          </div>
          <div className=" bg-slate-50 shadow-lg rounded-md flex flex-col justify-center items-center hover:bg-purple-50 text-justify">
            <div className="heading font-semibold my-4 mx-4 text-xl text-purple-900 ">
              Doctor Suggestions
            </div>
            <hr className="mx-3" />
            <div className="mx-4 my-4">
              Discover healthcare professionals specializing in treating
              conditions similar to yours. View detailed profiles of suggested
              doctors, including their qualifications, specialties, and patient
              reviews. Choose the right doctor for your needs and schedule
              appointments directly through the app.
            </div>
          </div>
          <div className=" bg-slate-50 shadow-lg rounded-md flex flex-col justify-center items-center hover:bg-purple-50 text-justify">
            <div className="heading font-semibold my-4 mx-4 text-xl text-purple-900 ">
              Chat with Doctors
            </div>
            <hr className="mx-3" />
            <div className="mx-4 my-4">
              Connect with healthcare professionals in real-time through our
              secure messaging platform. Ask questions, seek advice, and receive
              personalized guidance from experienced doctors. Discuss your
              symptoms, treatment options, and any concerns you may have from
              the comfort of your home.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
