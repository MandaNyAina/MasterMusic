from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Search engine</p>"