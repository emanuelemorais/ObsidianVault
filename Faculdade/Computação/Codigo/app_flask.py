from flask import Flask, render_template

app = Flask(__name__)

@app.route("/", methods=['GET'])
def hello():
    return render_template("index.html")

app.run(host="0.0.0.0", port=3000) #Indica para que o flask execute as conexões na rede local e na porta 3000.

