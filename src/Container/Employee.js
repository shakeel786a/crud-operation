import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomModal from "./CustomModal";

function Employee() {
    const [employeeList, setEmployeeList] = useState([]);
    const [formData, setFormData] = useState({name: '', email: '', address: '', phone: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);
    const [isUpdateVisible, setIsUpdateVisible] = useState(false);
    const [selectedData, setSelectedData] = useState({});

    useEffect(() => {
        fetchEmployee();
        resetForm();
    }, []);

    const fetchEmployee = () => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
            responseType: 'json'
        }).then(function (response) {
            if (response?.data) {
                setEmployeeList(response?.data);
                setIsLoading(false);
            }
        }).catch(err => {
            console.log('err======>', err)
            setIsLoading(false);
        });
    }

    const onClickAddOrUpdate = () => {
        if (Object.keys(formData))
        if (isUpdateVisible) {
            axios({
                method: 'put',
                url: 'http://dummy.restapiexample.com/api/v1/update/'+selectedData?.id,
                data: formData
            }).then(function (response) {
                console.log(response);
                fetchEmployee();
                setIsUpdateVisible(false);
            }).catch(function (error) {
                console.log(error);
                // setIsUpdateVisible(false);
                alert(error.message);
            });
        } else {
            axios({
                method: 'post',
                url: 'http://dummy.restapiexample.com/api/v1/create',
                data: formData
            }).then(function (response) {
                console.log(response);
                fetchEmployee();
                setIsAddModalVisible(false);
            }).catch(function (error) {
                console.log(error);
                // setIsAddModalVisible(false);
                alert(error.message);
            });
        }
    }

    const onClickDeleteSubmit = () => {
        axios({
            method: 'delete',
            url: '	http://dummy.restapiexample.com/api/v1/delete/'+selectedData?.id,
        }).then(function (response) {
            setIsDeleteVisible(false);
            alert(response?.data?.message)
        }).catch(function (error) {
            console.log(error);
        });
    }

    const onClickAddNew = () => {
        setIsAddModalVisible(true);
        resetForm();
    }

    const onClickAddNewClose = () => {
        setIsAddModalVisible(false);
        setIsUpdateVisible(false);
        resetForm();
    }

    const onClickDelete = () => setIsDeleteVisible(true);

    const onClickDeleteClose = () => setIsDeleteVisible(false);

    const onClickEdit = () => {
        const {name, email, phone, address: selectedAddress} = selectedData
        setFormData({name, email, phone, address: selectedAddress?.street+', '+selectedAddress?.city+', '+selectedAddress?.zipcode});
        setIsUpdateVisible(true);
    }

    const resetForm = () => setFormData({name: '', email: '', address: '', phone: ''});

    return (  
        <>
            <div class="card">
                <div class="card-header" style={{ backgroundColor: '#3944BC'}}>
                    <h3 class="card-title" style={{color: 'white'}}>Manage Employees</h3>

                    <div class="card-tools">
                        {/* <a class="btn btn-danger btn-sm" href="#" onClick={onClickDelete}>
                            <i class="fas fa-minus-circle">
                            </i>&nbsp;
                            Delete
                        </a>&nbsp;&nbsp; */}
                        <a class="btn btn-success btn-sm" href="#" onClick={onClickAddNew}>
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
                            {employeeList?.map(item => {
                                return (
                                    <tr>
                                        <td>
                                            #
                                        </td>
                                        <td>
                                            <small>
                                                {item?.name}
                                            </small>
                                        </td>
                                        <td>
                                            <small>
                                                {item?.email}
                                            </small>
                                        </td>
                                        <td>
                                            <small>
                                                {item?.address?.street+', '+item?.address?.city+', '+item?.address?.zipcode}
                                            </small>
                                        </td>
                                        <td>
                                            <small>
                                                {item?.phone}
                                            </small>
                                        </td>
                                        <td class="text-center">
                                            <a class="btn btn-info btn-sm" href="#" onClick={() => {
                                                // onClickDelete();
                                                onClickEdit();
                                                setSelectedData(item);
                                            }}>
                                                <i class="fas fa-pencil-alt">
                                                </i>
                                            </a>&nbsp;&nbsp;
                                            <a class="btn btn-danger btn-sm" href="#" onClick={() => {
                                                onClickDelete();
                                                setSelectedData(item);
                                            }}>
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

            <CustomModal isVisible={isAddModalVisible || isUpdateVisible} onClose={onClickAddNewClose}>
                <div class="modal-content">
                    <div class="modal-header">
                    <h4 class="modal-title">Add Employee</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={onClickAddNewClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" value={formData?.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" class="form-control" value={formData?.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                                </div>
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <textarea class="form-control" rows="2" value={formData?.address} onChange={e => setFormData({...formData, address: e.target.value})}></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" class="form-control" value={formData?.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" onClick={onClickAddNewClose}>Close</button>
                    <button type="button" class="btn btn-success" onClick={onClickAddOrUpdate}>{isUpdateVisible ? 'Update' : 'Add'}</button>
                    </div>
                </div>
            </CustomModal>

            <CustomModal isVisible={isDeleteVisible} onClose={onClickDeleteClose}>
                <div class="modal-content">
                    <div class="modal-header">
                    <h4 class="modal-title">Delete Employee</h4>
                    <button type="button" class="close" aria-label="Close" data-dismiss="modal" onClick={onClickDeleteClose}>
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
                    <button type="button" class="btn btn-default" data-dismiss="modal" onClick={onClickDeleteClose}>Close</button>
                    <button type="button" class="btn btn-danger" onClick={onClickDeleteSubmit}>Delete</button>
                    </div>
                </div>
            </CustomModal>
        </>
    );
}

export default Employee;