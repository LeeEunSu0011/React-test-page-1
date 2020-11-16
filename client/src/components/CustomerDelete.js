import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CustomerDelete extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open : false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open : true
        });
    }

    handleClose = () => {
        this.setState({
            open : false
        });
    }

    deleteCustomer(id){
        const url = '/api/customers/' + id;
        fetch(url, {
            method : 'delete'
        });
        this.props.stateRefresh();
    }

    render(){
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>削除</Button>
                <Dialog open={this.state.open}  onClose={this.handleClose}>
                    <DialogTitle>
                        削除　警告
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            選択したお客様の個人情報を削除します。
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button varian="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>削除</Button>
                        <Button varian="outlined" onClick={this.handleClose}>閉じる</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default CustomerDelete;