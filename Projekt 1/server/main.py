from flask import Flask, request, render_template
import json

app = Flask(__name__)

def read_json(filename):
    with open(filename, "r") as file:
        return json.loads(file.read())

def write_json(filename, data):
    with open(filename, "w") as file:
        file.write(json.dumps(data))

@app.route("/contact", methods=["POST"])
def hello_world():
    contact = { "firstname": request.form["firstname"], "lastname": request.form["lastname"], "country_code": request.form["country"], "subject": request.form["subject"]  }
    data = read_json("data.json")
    data["contacts"].append(contact)
    write_json("data.json", data)
    
    return "" 

@app.route("/read")
def read_messages():
    data = read_json("data.json")["contacts"]
    print(data)
    return render_template("list.html.j2", rows=data)


app.run(debug=True)