from flask import Flask , request
import numpy as np
from flask_cors import CORS, cross_origin
from flask import jsonify
from flask import request
import joblib


app = Flask(__name__)
CORS(app)
model = joblib.load("churn-customer-model.sav ")

@app.route("/predict" , methods = ['POST'])
def predict():
    formData = request.json
    data2 = [float(val) for val in formData.values()]
    data2 = np.array(data2).reshape(1,-1)
    y = model.predict(data2)

    types = {"No":"No" , "Yes": "Yes"}
    response  = jsonify({
        "statusCode" : 200,
        "status" : "Prediction made" , 
        "result" : y[0]
    })
    response.headers.add('Access-Control-Allow-Origin' , '*')
    return response


# @app.route("/members")
# def members():
#     return {"members":['Member1','Member2','Member3']}


# @app

# @app.route("/members")
# def members():
#     return {"members":['Member1','Member2','Member3']}



if __name__ == "__main__":
    app.debug = True
    app.run(debug=True)