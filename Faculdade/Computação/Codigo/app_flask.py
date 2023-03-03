from flask import Flask, render_template, request, redirect
from evento import Evento

eventos = [
    Evento(nome="Almoço", local="Lancheco", data="hoje")
]

app = Flask(__name__)

@app.route("/", methods=['GET'])
def hello():
    return render_template("index.html", nome_desenvolvedor="Emanuele Morais")

@app.route("/novo")
def cadastrar_evento():
    return render_template("cadastrar.html")

@app.route("/salvar", methods=['POST'])
def cria_evento():
    nome = request.form['nome']
    data = request.form['data']
    local = request.form['local']
    evento = Evento(nome=nome, data=data, local=local)
    global eventos
    eventos.append(evento)
    print(eventos)
    return redirect('/') #direciona para rota /
    

app.run(host="0.0.0.0", port=3000) #Indica para que o flask execute as conexões na rede local e na porta 3000.

