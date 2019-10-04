from flask import Flask, render_template, request, json

app = Flask(__name__)

'''
@app.route('/')
def hello():
    return render_template('hello.html')
'''

@app.route('/')
def welcome():
    return render_template('welcome.html')


@app.route('/signUp')
def signUp():
    return render_template('signUp.html')

@app.route('/signUpUser', methods=['POST'])
def signUpUser():
    fullname =  request.form['fullname'];
    zipcode = request.form['zipcode'];
    dob = request.form['dob'];
    email = request.form['email'];
    return json.dumps({'status':'OK','fullname':fullname,'zipcode':zipcode, 'dob':dob, 'email':email});


if __name__=="__main__":
    app.run()
