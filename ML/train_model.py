import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import joblib

train = pd.read_csv("dataset/Training.csv")
test = pd.read_csv("dataset/Testing.csv")

train = train.drop(["Unnamed: 133"], axis=1)
P = train["prognosis"]
X = train.drop(["prognosis"], axis=1)

xtrain, xtest, ytrain, ytest = train_test_split(X, P, test_size=0.2, random_state=42)

rf = RandomForestClassifier(random_state=42)
model_rf = rf.fit(xtrain, ytrain)

joblib.dump(model_rf, 'random_forest_model.joblib')
joblib.dump(X.columns.tolist(), 'model_columns.joblib')