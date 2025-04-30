import toast from "react-hot-toast";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import { useStateStore } from "../../zustand/useStateStore";

export const useSubmitDoctor = () => {
    // const host = "http://localhost:8000"
    const navigate = useNavigate(); 
  const {setLoading} = useStateStore();

    const handleInputErrors = (name, email, education, experience, specialization, phone, address, description) => {
        if (validator.isEmpty(name)) {
            toast.error("Enter your Name");
        }
        else if(validator.isEmpty(email)){
            toast.error("Enter your Email");
        }
        else if(!validator.isEmail(email)){
            toast.error("Please enter a valid email");
        }
        else if(validator.isEmpty(education)){
            toast.error("Enter your Education");
        }else if(validator.isEmpty(experience)){
            toast.error("Enter your Experience");
        }else if(validator.isEmpty(specialization)){
            toast.error("Enter your Specialization");
        }else if(validator.isEmpty(phone)){
            toast.error("Enter your Phone Number");
        }else if(validator.isEmpty(address)){
            toast.error("Enter your Address");
        }else if(validator.isEmpty(description)){
            toast.error("Enter your Description");
        }
    }

    const submitDoctor = async (name, email, education, experience, specialization, phone, address, description) => {
        handleInputErrors(name, email, education, experience, specialization, phone, address, description);

        try {
            setLoading(true);
            const response = await fetch(`/api/doctor/adddoctor`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({name, email, education, experience, specialization, phone, address, description}),
              });
              const data = await response.json();
              setLoading(false);
              if (response.ok) {
                toast.success("Docotor added successfully")
                navigate("/home");
              }
        
              if (data.error) {
                throw new Error(data.error);
              }
        }catch (error) {
            console.error(error);
            toast.error("Please try again");
            setLoading(false);
          }
    }

    return { submitDoctor };


}