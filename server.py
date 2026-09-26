"""
Development Server for TEJA Portfolio Website
Runs a local HTTP server on port 8000.
"""

import http.server
import socketserver
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    print(f"TEJA Portfolio local server starting on http://tejaai.dev:{PORT} (also http://localhost:{PORT})")
    print(f"Serving files from: {DIRECTORY}")
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        sys.exit(0)
