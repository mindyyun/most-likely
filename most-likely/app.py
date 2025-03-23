from flask import Flask, jsonify, render_template, request, redirect, url_for
from flask import PyMongo

# Create a Flask application
app = Flask(__name__)

# MongoDB configuration - change the URI to your MongoDB setup (local or Atlas)
app.config['MONGO_URI'] = 'mongodb+srv://mindyyun:most-likely@cluster0.jev31.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0'
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
    return render_template('step1.html')

@app.route('/game')
def game():
    return render_template('game.html')

# Adding names
@app.route('/add_name', methods=['POST'])
def add_name():
    if "person" in request.form:
        person_name = request.form["person"]
        print(person_name)
    else:
        return jsonify({"error": "Please enter a name"}), 400
    
    if "person2" in request.form:
        person_name2 = request.form["person2"]
        print(person_name2)
    else:
        return jsonify({"error": "Please enter a name"}), 400

    # Insert document into the collection
    document = {"p1_name": person_name, "p2_name": person_name2}
    mongo.db.users.insert_one(document)

    return render_template('step2.html')

@app.route('/add_question', methods=['POST'])
def add_question():
    if "q2" in request.form:
        question = request.form["q1"]
        print(question)
    else:
        return jsonify({"error": "Please enter a question"}), 400
    
    if "q2" in request.form:
        question2 = request.form["q2"]
        print(question2)
    else:
        return jsonify({"error": "Please enter a question"}), 400

    # Insert document into the collection
    document = {"q1": question, "q2": question2}
    mongo.db.questions.insert_one(document)

    return render_template('step3.html')

# Example: Insert data into MongoDB
# @app.route('/add', methods=['POST'])
# def add_document():
#     name = request.json.get('name')
#     age = request.json.get('age')

#     if not name or not age:
#         return jsonify({"error": "Name and Age are required!"}), 400

#     # Insert document into the collection
#     document = {"name": name, "age": age}
#     mongo.db.users.insert_one(document)

#     return jsonify({"message": "User added successfully!"}), 201

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
