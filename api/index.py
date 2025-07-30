from http.server import BaseHTTPRequestHandler
import json

def handler(req, res):
    res.status_code = 200
    res.headers["Content-Type"] = "application/json"
    res.write(json.dumps({"message": "Hello from Python"}))
