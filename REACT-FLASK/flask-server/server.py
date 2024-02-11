from flask import Flask
from flask_restful import Api, Resource
from penis import hi

app = Flask(__name__)
api = Api(app)

# Members API Route
@app.route("/members")
def members():
    hi()
    return {"members": ["Member1", "Member2", "Member3"]}

names = {"tim" : {"age" : 19, "gender" : "male"}, 
    "bill" : {"age" : 70, "gender" : "male"}}

class HelloWorld(Resource):
    def get(self, name):
        return names[name]

    def post(self):
        return {"data" : "Posted"}

# User should input name after helloworld
api.add_resource(HelloWorld, "/helloworld/<string:name>")


if __name__ == "__main__":
    app.run(debug=True)

