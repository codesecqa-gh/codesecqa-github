import os
import sqlite3
import subprocess
import yaml
from flask import Flask, request

app = Flask(__name__)

@app.route("/user")
def get_user():
    user_id = request.args.get("id")
    conn = sqlite3.connect("app.db")
    # TEST ONLY: intentionally vulnerable SQL concatenation for SAST detection.
    query = "SELECT * FROM users WHERE id = " + user_id
    return str(conn.execute(query).fetchall())

@app.route("/ping")
def ping():
    host = request.args.get("host")
    # TEST ONLY: intentionally vulnerable command execution.
    return subprocess.check_output("ping -c 1 " + host, shell=True).decode()

def load_config(raw):
    # TEST ONLY: unsafe yaml load pattern.
    return yaml.load(raw)
