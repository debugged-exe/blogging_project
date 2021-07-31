import React, { Component } from 'react';
import './Newsletter.css';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Newsletter extends Component {
    constructor() {
        super();
        this.state = {
            email: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email } = this.state;
        fetch('https://pure-crag-11432.herokuapp.com/subscribers', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email
            })
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp === 'successful') {
                    console.log(resp);
                    toast.success('You have been successfully subscribed.', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2500
                    });
                }
                if (resp === "duplicate") {
                    console.log(resp);
                    toast.warning('You have already subscribed.', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2500
                    });
                }
            })
            .catch(err => {
                console.log(err);
                toast.error('Error Occured.', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2500
                });
            })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (<section className={'pt6'}>
            <div className={' newsletter-container mt2'}>
                <p className={'tl b mb2 f6 silver'}>NEWSLETTER</p>
                <div className="line  mb2" ></div>
                <div className={'center'}>
                    <form className={'flex'} onSubmit={this.handleSubmit}>
                        <input
                            type={'email'}
                            name={'email'}
                            className={'w-100 email-input pa2 '}
                            placeholder={'Enter Your Email'}
                            onChange={this.handleChange}
                        />
                        <button className={'ba b--white-025 bg-blue white email-button br3'} type={'submit'}>➔</button>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </section>);
    }
}

export default Newsletter;