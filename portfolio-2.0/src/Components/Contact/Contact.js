import { Component } from "react";

export default class Contact extends Component {
    constructor() {
        super();
        this.state={
            formSubmitted: false,
            isLoading: false,
        }
    }
}