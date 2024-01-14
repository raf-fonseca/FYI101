import os
from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS
import psycopg2
from psycopg2 import IntegrityError, sql, pool
import os
import getpass
import logging
from waitress import serve

HOST = "localhost"
PORT = "5000"

INFO_TABLE = "waitlist"
DATABASE_NAME = "FYI101"
DATABASE_USER = "FYI101"
MAIN_DB_NAME = "postgres"


# Column names
ID_COLUMN = "id"
EMAIL_COLUMN = "email"
FIRST_NAME_COLUMN = "first_name"
LAST_NAME_COLUMN = "last_name"
DATE_OF_BIRTH_COLUMN = "date_of_birth"

app = Flask(__name__, static_folder='../dist')

# def getPassword():
#     DATABASE_PASSWORD_ENV_VAR = "DATABASE_PASSWORD"
    
#     # Check if exists in environment variables and returns if it does
#     if (DATABASE_PASSWORD_ENV_VAR in os.environ):
#         return os.environ[DATABASE_PASSWORD_ENV_VAR]
#     # Set an environment variable if it doesn't exist
#     input_password = getpass.getpass("Enter " + DATABASE_USER + " user's password: ")
#     try:
#         conn = psycopg2.connect(
#             dbname=DATABASE_NAME,  # Connect to the default database
#             user=DATABASE_USER,
#             password=input_password,
#             host=HOST
#         )
#     except psycopg2.OperationalError as e:
#         print("Invalid password.")
#         return getPassword()
    
#     os.environ[DATABASE_PASSWORD_ENV_VAR] = input_password
#     return os.environ[DATABASE_PASSWORD_ENV_VAR]

# # Create a connection pool to the database so that we don't have to open and close a connection every time we need to interact with the database
# db_pool = None

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')
    
# @app.route('/api/data/waitlist', methods=['POST'])
# def get_data():
#     print("Received a POST request")  # This will print when the server receives a POST request at '/api/data'
#     print(request.form)  # This will print the form data
#     # This will not raise a KeyError if field is not present
#     firstname = request.form.get('firstName')
#     lastname = request.form.get('lastName')
#     email = request.form.get('email')
#     if firstname and lastname and email:
#         print(f"Received message: {firstname} {lastname} {email}")

#         # Get a connection from the pool
#         conn = db_pool.getconn()

#         try:
#             # Create a cursor
#             cur = conn.cursor()

#             # Insert the message into the messages table
#             cur.execute(sql.SQL("INSERT INTO {} ({}, {}, {}, {}) VALUES (%s, %s, %s, %s)").format(
#                 sql.Identifier(INFO_TABLE),
#                 sql.Identifier(EMAIL_COLUMN),
#                 sql.Identifier(FIRST_NAME_COLUMN),
#                 sql.Identifier(LAST_NAME_COLUMN),
#                 sql.Identifier(DATE_OF_BIRTH_COLUMN)
#             ), (email, firstname, lastname, "1/2/2023"))

#             # Commit the transaction
#             conn.commit()

#             # Close the cursor
#             cur.close()
#             print ("Successfully added to database")
#             return jsonify({"message": "Success!"})
#         except IntegrityError as e:
            
#             conn.rollback()
#             print("Error: Email already exists in database.")
#             return jsonify({"message": "Error: Email already exists in database."})
#         finally:
#             # Put the connection back to the pool
#             db_pool.putconn(conn)
#     else:
#         print("No message received")

CORS(app)

# def initDbPool():
#     global db_pool
#     db_pool = psycopg2.pool.SimpleConnectionPool(
#         minconn=1,
#         maxconn=10,
#         dbname=DATABASE_NAME,
#         user=DATABASE_USER,
#         password=getPassword(),
#         host=HOST
#     )

if __name__ == '__main__':
    serve(app, port=PORT)
