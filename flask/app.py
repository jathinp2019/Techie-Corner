from flask import Flask, request, jsonify

from flask_cors import CORS

from pymongo import MongoClient
def get_database():
    CONNECTION_STRING = 'mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/?retryWrites=true&w=majority'
    client = MongoClient(CONNECTION_STRING)
    return client['stud_info']
  
def get_update_database():
    CONNECTION_STRING = 'mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/exp?retryWrites=true&w=majority'
    client = MongoClient(CONNECTION_STRING)
    return client['exp']
  
app = Flask(__name__)
CORS(app)

@app.route('/data', methods=['GET', 'POST'])
def get_questions():
    course_id = request.args.get('course_id')
    dbname = get_database()
    collection_name = dbname["quiz"]
    questions = collection_name.find({"course_id" : course_id}, {'_id': 0 })
    res = []
    for question in questions:
        print(question)
        res.append(question)
    return jsonify(res)   

@app.route('/addItem', methods=['GET', 'POST'])
def addItem():
    course_id = request.args.get('course_id')
    question = request.args.get('question')
    answer1 = request.args.get('answer1')
    answer2 = request.args.get('answer2')
    answer3 = request.args.get('answer3')
    answer4 = request.args.get('answer4')
    correct = request.args.get('correct')
    dbname = get_database()
    collection_name = dbname["quiz"]
    item = {
        "course_id" : course_id,
        "question" : question,
        'answers': [
            {'text': answer1, 'correct': correct == '1'},
            {'text': answer2, 'correct': correct == '2'},
            {'text': answer3, 'correct': correct == '3'},
            {'text': answer4, 'correct': correct == '4'},
        ]
    }
    collection_name.insert_one(item)
    return "success"

@app.route('/course_ids', methods=['GET', 'POST'])
def get_course_ids():
    dbname = get_database()
    collection_name = dbname["quiz"]
    course_ids = collection_name.distinct("course_id")
    return jsonify(course_ids)

@app.route('/updateMarks', methods=['GET', 'POST'])
def update_marks():
    name = request.args.get('name')
    marks = request.args.get('marks')
    cid = request.args.get('cid')
    dbname = get_update_database()
    collection_name = dbname["users"]
    collection_name.update_one({'email': name}, {'$set': {f'marks_{cid}': marks}}, upsert=True)
    print("Marks updated successfully")
    return "Marks updated successfully"

@app.route('/create', methods=['GET', 'POST'])
def create_db():
    dbname = get_database()
    collection_name = dbname["quiz"]
    item_1 = {
        "course_id" : "19CSE305",
        "question" : "What is the capital of France?",
        'answers': [
            {'text': 'Paris', 'correct': True},
            {'text': 'Berlin', 'correct': False},
            {'text': 'London', 'correct': False},
            {'text': 'Madrid', 'correct': False},
        ]
    }
   
    item_2 = {
        "course_id" : "19CSE305",
        "question" : "What is the largest planet in our solar system?",
        'answers': [
            {'text': 'Saturn', 'correct': False},
            {'text': 'Jupiter', 'correct': True},
            {'text': 'Neptune', 'correct': False},
            {'text': 'Uranus', 'correct': False},
        ]
    }
    
    item_3 = {
        "course_id" : "19CSE305",
        "question" : "What is the smallest planet in our solar system?",
        'answers': [
            {'text': 'Earth', 'correct': False},
            {'text': 'Mars', 'correct': False},
            {'text': 'Mercury', 'correct': True},
            {'text': 'Pluto', 'correct': False},
        ]
    }
    
    item_4 = {
        "course_id" : "19CSE305",
        "question" : "What is the hottest planet in our solar system?",
        'answers': [
            {'text': 'Venus', 'correct': True},
            {'text': 'Saturn', 'correct': False},
            {'text': 'Mercury', 'correct': False},
            {'text': 'Mars', 'correct': False},
        ]
    }
    
    item_5 = {
        "course_id" : "19CSE305",
        "question" : "What planet is famous for its big red spot on it?",
        'answers': [
            {'text': 'Jupiter', 'correct': True},
            {'text': 'Mars', 'correct': False},
            {'text': 'Mercury', 'correct': False},
            {'text': 'Venus', 'correct': False},
        ]
    }
    
    item_6 = {
        "course_id" : "19CSE304",
        "question" : "What is the coldest planet in our solar system?",
        'answers': [
            {'text': 'Venus', 'correct': False},
            {'text': 'Saturn', 'correct': False},
            {'text': 'Uranus', 'correct': True},
            {'text': 'Neptune', 'correct': False},
        ]
    }
    
    item_7 = {
        "course_id" : "19CSE304",
        "question" : "What planet is famous for its beautiful rings around it?",
        'answers': [
            {'text': 'Jupiter', 'correct': False},
            {'text': 'Mars', 'correct': False},
            {'text': 'Saturn', 'correct': True},
            {'text': 'Neptune', 'correct': False},
        ]
    }
    
    item_8 = {
        "course_id" : "19CSE304",
        "question" : "What is the brightest planet in the night sky?",
        'answers': [
            {'text': 'Venus', 'correct': True},
            {'text': 'Saturn', 'correct': False},
            {'text': 'Uranus', 'correct': False},
            {'text': 'Neptune', 'correct': False},
        ]
    }
    
    item_9 = {
        "course_id" : "19CSE304",
        "question" : "What is the fastest planet in our solar system?",
        'answers': [
            {'text': 'Venus', 'correct': False},
            {'text': 'Saturn', 'correct': False},
            {'text': 'Mercury', 'correct': True},
            {'text': 'Mars', 'correct': False},
        ]
    }
    
    item_10 = {
        "course_id" : "19CSE304",
        "question" : "What planet is famous for its big red spot on it?",
        'answers': [
            {'text': 'Jupiter', 'correct': True},
            {'text': 'Mars', 'correct': False},
            {'text': 'Mercury', 'correct': False},
            {'text': 'Venus', 'correct': False},
        ]
    }
    
    item_11 = {
        "course_id" : "19CSE303",
        "question" : "What is the coldest planet in our solar system?",
        'answers': [
            {'text': 'Venus', 'correct': False},
            {'text': 'Saturn', 'correct': False},
            {'text': 'Uranus', 'correct': True},
            {'text': 'Neptune', 'correct': False},
        ]
    }
    
    item_12 = {
        "course_id" : "19CSE303",
        "question" : "What planet is famous for its beautiful rings around it?",
        'answers': [
            {'text': 'Jupiter', 'correct': False},
            {'text': 'Mars', 'correct': False},
            {'text': 'Saturn', 'correct': True},
            {'text': 'Neptune', 'correct': False},
        ]
    }
    
    collection_name.insert_many([item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10, item_11, item_12])
    print("Created db")
    return 'Created DB'
 
if __name__ == '__main__':
    app.run(host="localhost", port=5000)