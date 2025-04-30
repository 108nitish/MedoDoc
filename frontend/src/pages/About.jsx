import React from "react";

const About = () => {
  return (
    <>
      <div className="mt-24 ">
        <p className="w-full flex justify-center text-4xl font-black text-purple-950">About Us</p>
        <div className=" xl:flex px-3 xl:mx-60 bg-purple-50 items-center xl:rounded-r-full shadow-xl my-9 text-purple-950 font-medium">
          <p className="xl:float-left w-[90vw]  xl:w-[70vw] xl:px-16 my-5 text-justify">
            Welcome to MedoDoc, where we are dedicated to providing personalized
            medical advisory services to help individuals better understand
            their symptoms and make informed decisions about their health.At
            MedoDoc, we understand that navigating health concerns can be
            overwhelming. That's why we've created a platform where you can
            receive reliable guidance tailored to your specific symptoms. Our
            team of experienced medical professionals and technologists has
            developed an innovative system that analyzes the information you
            provide and generates accurate recommendations based on established
            medical guidelines.
          </p>
          <div className="hidden float-right w-[30vw]  xl:flex justify-center">
            <img
              src="/images/sthethoscope.png"
              alt="image"
              className="w-[20vw] h-[20vw] rounded-full"
            />
          </div>
        </div>

        <div className=" w-full flex justify-center flex-col items-center">
          <div className="my-9">
            <span className="text-3xl font-bold">Our Mission</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex">
            <div className="w-[22.5vw]  flex justify-end items-center pr-3">
              <div className="w-[20vw] h-[15vw]  bg-purple-100"></div>
            </div>
            <div className="w-[30vw]">
              <div className="flex">
                <div className="w-[25vw] mr-[1vw]">
                  <img src="/images/about1.jpg" alt="" />
                </div>
                <div className="w-[10vw] bg-gray-200"></div>
              </div>
              <div className="flex my-4">
                <div className="w-[10vw] mr-[1vw] bg-gray-200"></div>
                <div className="w-[25vw] ">
                  <img src="/images/about2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="w-[22.5vw] flex justify-start items-center pl-3">
            <div className="w-[20vw] h-[15vw]  bg-purple-100  "></div>
            </div>
          </div>
        <div className="w-[80vw] xl:w-[50vw] flex text-center my-2">
            <p>
            Our mission is to empower individuals to take control of their
            health by providing accessible and trustworthy medical advice. We
            believe that everyone deserves access to reliable healthcare
            information, and we are committed to bridging the gap between
            individuals and medical expertise.
            </p>
          </div>
        </div>


        <div className="w-full flex justify-center mt-9">
          <p className="w-[50vw] mb-3 flex justify-center font-bold text-2xl">How It Works</p>
        </div>
        <div className="w-full flex justify-center">
          <p className="w-[80vw] xl:w-[50vw] text-center">
            Using our user-friendly interface, you can input your symptoms and
            relevant medical history confidentially. Our advanced algorithm then
            processes this information to generate personalized recommendations.
            Whether you're seeking guidance on minor ailments or more complex
            health issues, we're here to assist you every step of the way.
          </p>
        </div>
        <div className="w-full flex justify-center mt-9">
          <p className="w-[60vw] xl:w-[50vw] my-5 mb-6 flex justify-center text-2xl font-bold">Why Choose Us?</p>
        </div>
        <div className="flex justify-center w-full items-center">
        <div className="grid md:grid-cols-2 w-[75vw] gap-x-9 gap-y-9 px-9 xl:px-24">
        <div className="flex flex-col items-center justify-center w-[60vw] md:w-[27vw] bg-purple-100 xl:px-9 rounded-md py-4 hover:bg-gray-50">
          <span className="mb-2 text-xl underline underline-offset-4">Accuracy</span>
          <p className="text-center">
            Our recommendations are based on evidence-based medicine
            and the latest medical research, ensuring reliable and up-to-date
            information.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[60vw] md:w-[27vw] bg-gray-200 px-4 xl:px-9 rounded-md py-4 hover:bg-purple-50">
        <span className="mb-2 text-xl underline underline-offset-4">Accessibility</span>
          <p className=" text-center">
            We provide convenient access to medical advice
            anytime, anywhere, eliminating the need for lengthy appointments or
            waiting times.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[60vw] md:w-[27vw] bg-gray-200 px-4 xl:px-9 rounded-md py-4 hover:bg-purple-50">
        <span className="mb-2 text-xl underline underline-offset-4">Confidentiality</span>
          <p className=" text-center">
            We prioritize your privacy and confidentiality,
            ensuring that your personal information remains secure at all times.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-[60vw] md:w-[27vw] bg-purple-100 px-4 xl:px-9 rounded-md py-4 hover:bg-gray-50">
        <span className="mb-2 text-xl underline underline-offset-4">Empowerment</span>
          <p className=" text-center">
            By arming you with knowledge and guidance, we empower
            you to make informed decisions about your health and well-being.
          </p>
        </div>
        </div>
        </div>
        
        
        

        <div className="w-full flex justify-center mt-9">
          <p className="w-[60vw] xl:w-[50vw] my-5 flex items-center justify-center text-2xl font-bold">Get Started Today</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center mb-9">
          <div className="w-[90vw] xl:w-[60vw] bg-purple-50 px-9 xl:px-24 py-9 rounded-xl">
            <p className="text-justify">
            Join the thousands of individuals who have benefited from our
            services and take the first step towards better health. Whether
            you're experiencing minor discomfort or seeking clarification on a
            specific health concern, MedoDoc is here to support you.
          </p>
          <br />
          <p className="text-justify">
            Thank you for choosing MedoDoc for your medical advisory needs. We
            look forward to being a trusted partner on your health journey.
          </p>
          </div>
          
      </div>
      </div>
    </>
  );
};

export default About;
