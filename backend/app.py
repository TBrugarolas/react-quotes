from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

quotes = [
    "Talk is cheap. Show me the code.",
    "Programs must be written for people to read.",
    "Simplicity is the soul of efficiency.",
    "Before software can be reusable it must be usable."
]

@app.route("/api/quote")
def get_quote():
    return jsonify({
        "quote": random.choice(quotes)
    })

if __name__ == "__main__":
    app.run(debug=True)