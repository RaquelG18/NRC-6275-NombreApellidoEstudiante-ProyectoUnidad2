#importamos las librerias necesarias 
import os
import os.path
import uuid
import logging
import numpy as np
import io
from flask import Flask, render_template, request
from flask_sessionstore import Session
from pymongo import MongoClient

# Inicializamos la aplicación y la carpeta template
app = Flask(__name__, template_folder="template/layouts")

'''Inicializamos la carpeta que contiene los
archivos est ́aticos'''
app._static_folder = os.path.abspath("template/static")

# configuracion de la base de datos
mongoClient = MongoClient('localhost', 27017)


# creamos el decorador para la ruta principal 
# y agregamos los metodos get y post 
@app.route('/', methods=['POST', 'GET'])
def ingreso():  # Creamos la función 
# Redirección a la pagina formulario.html
    return render_template("ingreso_niños.html")

@app.route('/index')
def index():  # Creamos la función
# Redirección a la pagina formulario.html
    return render_template("index.html")

 # Creamos el main para que la app se pueda ejecutar
if __name__ == "__main__":
    app.debug = True
    logging.getLogger().setLevel("DEBUG")
    app.run()

