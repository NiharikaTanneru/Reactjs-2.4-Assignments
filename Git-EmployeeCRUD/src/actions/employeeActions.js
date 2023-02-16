import store from "../store";


export const employeeGetAll = () => {
    console.log('get all');
    return {
        type: 'employee/getAll',
        data: {} 
    }
}

export const employeeAdd = (employee) => {
    console.log('add');
    return {
        type: 'employee/add',
        data: employee
    }
}

export const getEmp = (id) => {
   
    return {
        type: 'employee/getById',
        data: 1
    }
}

export const empUpdate = (employee) => {
    console.log('edit');
    return {
        type: 'employee/update',
        data: employee
    }
}

export const empDelete = (id) => {
    console.log('delete');
    return {
        type: 'employee/delete',
        data: id
    }
}

export const employee_action_creator = (employee) => {
    store.dispatch(employeeAdd(employee));
    return function(dispatch, getState) {
        return dispatch(employeeGetAll);
    }
}

