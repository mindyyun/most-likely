from flask import Flask
from .extensions import mongo

from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('main.html')

def create_app():
    app = Flask(__name__)
    app.config['MONGO_URI'] = 'mongodb+srv://mindyyun:Lorenthia99<db_password>@cluster0.jev31.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0'

    mongo.init_app(app)

    app.register_blueprint(main)

    return app