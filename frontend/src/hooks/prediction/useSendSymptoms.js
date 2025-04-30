import toast from "react-hot-toast";
import validator from "validator";
import { useStateStore } from "../../zustand/useStateStore";

export const useSendSymptoms = () => {
    const host = "http://localhost:8000";
    const {setLoading, setShowPredictions, setDiseaseInfo, setDisease, setDoctor, doctor, setSpecialist} = useStateStore();

    const handleInputErrors = (symptoms) => {
      if (!Array.isArray(symptoms) || symptoms.length === 0) {
        toast.error("Enter your symptoms");
    }}

    const sendSymptoms = async (symptoms) => {
        handleInputErrors(symptoms);

        try {
            setLoading(true);
            const response = await fetch(`/api/prediction/predict`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: 'include', 
                body: JSON.stringify({ features: symptoms }),
              });

              const data = await response.json();
              setLoading(false);

              if (response.ok) {
                setShowPredictions(true);
                setDisease(data.disease);
                setDiseaseInfo(data.disease_info);
                setDoctor([...doctor, ...data.enrolledDoctor]);
                setSpecialist(data.doctor);
              }
        }catch (error) {
            console.error(error);
            toast.error("Please try again");
            setLoading(false);
          }
    }
    return {sendSymptoms};
}