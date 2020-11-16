import React from 'react';

class CustomerDelete extends React.Component {

    deleteCustomer(id){
        const url = '/api/customers/' + id;
        fetch(url, {
            method : 'delete'
        });
        this.props.stateRefresh();
    }

    render(){
        return (
            <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>削除</button>
        )
    }
}

export default CustomerDelete;