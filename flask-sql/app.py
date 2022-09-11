from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from src.models import db

app = Flask(__name__)
# Use SQLie DB 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///basic_crud.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.before_first_request
def createTable():
    db.create_all()

app.run(host='localhost', debug=True, port=5000)
