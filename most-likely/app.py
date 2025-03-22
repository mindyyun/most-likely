from flask import Flask, jsonify, render_template, request, redirect, url_for
from flask_pymongo import PyMongo

# Create a Flask application
app = Flask(__name__)

# MongoDB configuration - change the URI to your MongoDB setup (local or Atlas)
app.config['MONGO_URI'] = 'mongodb+srv://mindyyun:Lorenthia99<db_password>@cluster0.jev31.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0'
# For MongoDB Atlas, use the connection string provided by Atlas:
# app.config["MONGO_URI"] = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority"

# Initialize PyMongo
mongo = PyMongo(app)

# Home route to display
@app.route('/')
def home():
    return render_template('main.html')

@app.route('/join')
def join():
    return render_template('join.html')

@app.route('/create')
def create():
    return render_template('create.html')

@app.route('/game')
def game():
    return render_template('game.html')

# Example: Insert data into MongoDB
@app.route('/add', methods=['POST'])
def add_document():
    name = request.json.get('name')
    age = request.json.get('age')

    if not name or not age:
        return jsonify({"error": "Name and Age are required!"}), 400

    # Insert document into the collection
    document = {"name": name, "age": age}
    mongo.db.users.insert_one(document)

    return jsonify({"message": "User added successfully!"}), 201

# Example: Retrieve all users from MongoDB
@app.route('/users', methods=['GET'])
def get_users():
    users = mongo.db.users.find()
    user_list = [{"name": user["name"], "age": user["age"]} for user in users]
    return jsonify(user_list)

# Example: Query user by name
@app.route('/user/<name>', methods=['GET'])
def get_user(name):
    user = mongo.db.users.find_one({"name": name})
    if user:
        return jsonify({"name": user["name"], "age": user["age"]})
    return jsonify({"error": "User not found!"}), 404

# Run the application
if __name__ == '__main__':
    app.run(debug=True)
