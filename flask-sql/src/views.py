from flask import render_template, redirect
from . import app,db
from models import EmployeeModel

@app.route('/data/create', methods=['GET', 'POST'])
def create():
    if request.method == 'GET':
        return render_template('createpage.html')
    elif request.method == 'POST':
        employee_id = request.form['employee_id']
        name = request.form['name']
        age = request.form['age']
        position = request.form['position']
        employee = EmployeeModel(employee_id=employee_id, name=name, age=age, position=position)
        db.session.add(employee)
        db.session.commit()
        return redirect('/data')


@app.route('/data')
def retrieveAllEmployees():
    employees = EmployeeModel.query.all()
    return render_template('datalist.html', employees=employees)


@app.route('/data/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def retrieveSingleEmployee(id):
    employee = EmployeeModel.query.filter_by(employee_id=id).first()
    if not employee:
        return f'Employee with ID {id} doesn\'t exist'
    
    if request.method == 'GET':
        return render_template('data.html', employee=employee)
    elif request.method == 'PUT':
        employee.name = request.form.get('name', employee.name)
        employee.age = request.form.get('age', employee.age)
        employee.position = request.form.get('position', employee.position)
    elif request.method == 'DELETE':
        db.session.delete(employee)

    method_to_file = {
        'PUT': 'update',
        'DELETE': 'delete'
    }
    db.session.commit()
    return render_template(f"{method_to_file[method]}Employee.html", employee=employee)
