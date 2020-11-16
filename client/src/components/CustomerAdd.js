import React from 'react';
import { post } from 'axios';

class CustomerAdd extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            file : null,
            userName : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : ''
        }
    }

    handleFileChange = (e) => {
        this.setState({
            file : e.target.files[0],
            fileName : e.target.value
        });
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            });
        this.setState({
            file : null,
            userName : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : ''
        });
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        };
        return post(url, formData, config);
    };

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1>客情報追加</h1>
                イメージ : <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}></input><br/>
                名前 : <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}></input><br/>
                誕生日 : <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}></input><br/>
                性別 : <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}></input><br/>
                職業 : <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}></input><br/>
                <button type="submit">完了</button>
            </form>
        );
    }
}

export default CustomerAdd;