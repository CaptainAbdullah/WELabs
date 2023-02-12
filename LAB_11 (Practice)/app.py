from flask import Flask, render_template, request, jsonify
from flask_restful import Api, Resource
from resource import routes
from config import MONGODB_SETTINGS
from database import db

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {'host' : 'mongodb://localhost:27017/DB'}
db.initialize_db(app)
api = Api(app)
routes.initialize_api(api)

@app.route('/')
def start():
    return 'Hello World'

@app.route('/displayProd')
def renderProd():
    return render_template("allCollection.html")

@app.route('/addProd')
def addProd():
    return render_template('addProds.html')


app.run(debug=True)