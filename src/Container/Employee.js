import React from "react";

const employeeList = ['', '', '', '', '', '', '', '']

function Employee() {
    return (  
        <>
            <div class="card">
                <div class="card-header" style={{ backgroundColor: '#3944BC'}}>
                    <h3 class="card-title" style={{color: 'white'}}>Manage Employees</h3>

                    <div class="card-tools">
                        <a class="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#delete-employee-modal">
                            <i class="fas fa-minus-circle">
                            </i>&nbsp;
                            Delete
                        </a>&nbsp;&nbsp;
                        <a class="btn btn-success btn-sm" href="#" data-toggle="modal" data-target="#add-employee-modal">
                            <i class="fas fa-plus">
                            </i>&nbsp;
                            Add New Employee
                        </a>
                    </div>
                </div>
                <div class="card-body p-0">
                    <table class="table table-striped projects">
                        <thead>
                            <tr>
                                <th style={{width: '1%'}}>
                                    #
                                </th>
                                <th style={{width: '20%'}}>
                                    Name
                                </th>
                                <th style={{width: '20%'}}>
                                    Email
                                </th>
                                <th style={{width: '25%'}}>
                                    Address
                                </th>
                                <th style={{width: '15%'}}>
                                    Phone
                                </th>
                                <th style={{width: '19%'}} class="text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeList.map(item => {
                                return (
                                    <tr>
                                        <td>
                                            #
                                        </td>
                                        <td>
                                            <small>
                                                Dummy User
                                            </small>
                                        </td>
                                        <td>
                                            <small>
                                                dummyuser@gmail.com
                                            </small>
                                        </td>
                                        <td>
                                            <small>
                                                25, Lenin serani, Kolkata - 700001
                                            </small>
                                        </td>
                                        <td>
                                            <small>
                                                +91 9999955555
                                            </small>
                                        </td>
                                        <td class="text-center">
                                            <a class="btn btn-info btn-sm" href="#">
                                                <i class="fas fa-pencil-alt">
                                                </i>
                                            </a>&nbsp;&nbsp;
                                            <a class="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#delete-employee-modal">
                                                <i class="fas fa-trash">
                                                </i>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>     

            {/* ------- add model ------ start-------- */}
            <div class="modal fade" id="add-employee-modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h4 class="modal-title">Add Employee</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" id="name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" class="form-control" id="email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="address">Address</label>
                                        <textarea class="form-control" rows="2" ></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" class="form-control" id="phone" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success">Add</button>
                        </div>
                    </div>
                </div>
            </div>       

            {/* ----- delete model ----- start ------- */}
            <div class="modal fade" id="delete-employee-modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h4 class="modal-title">Delete Employee</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <span>Are you sure you want to delete these Records?</span>
                            <br />
                            <br />
                            <small style={{color: '#FFA500'}}>This action cannot be undone.</small>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    );
}

export default Employee;