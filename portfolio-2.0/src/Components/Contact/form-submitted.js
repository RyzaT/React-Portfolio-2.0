handleSubmit = req => {
    const template = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    const userId = process.env.REACT_APP_EMAILJS_USERID;
    const params = req;

    window.emailjs.send('default_service', template, params, userId)
        .then(res => {
            this.setState({...this.state, isLoading: false})
            console.log(res);
        }).catch(e => {
            this.setState({...this.state, isLoading: false})
            console.log(e)
        });

    
}