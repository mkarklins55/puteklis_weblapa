import http.server
import ssl

server_address = ('0.0.0.0', 4443)
httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)

# Izveido SSL kontekstu
context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain(certfile='cert.pem', keyfile='key.pem')

# Tagad 'ietinam' socket ar SSL, bet izmantojam kontekstu
httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

print("Serveris darbojas uz https://localhost:4443")
httpd.serve_forever()

