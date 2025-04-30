from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

model = joblib.load('random_forest_model.joblib')
model_columns = joblib.load('model_columns.joblib')

@app.route('/predictdisease', methods=['POST'])
def predict():
    symptoms = request.json.get('features')
    print(symptoms)

    if not symptoms:
        return jsonify({'error': 'No symptoms provided'}), 400
    
    input_data = pd.DataFrame(0, index=[0], columns=model_columns)
    
    for symptom in symptoms:
        if symptom in input_data.columns:
            input_data[symptom] = 1
    
    prediction = model.predict(input_data)
    print(prediction)
    return jsonify({'predicted_disease': prediction[0]})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001, debug=True)
