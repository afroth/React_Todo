import {Component} from "react";
import moment from "moment";
import {ErrorMessage, Field, Form, Formik} from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component{


    constructor(props) {
        super(props);

        this.state = {
            // setting initial values
            id: this.props.params.id,
            description: "",
            completed: false,
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        // binding methods to the constructor
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }// end constructor

    componentDidMount(){
        // how we are getting the username of logged in user
        let username = AuthenticationService.getLoggedInUserName()
        // function call to retrieve to do by username and id
        TodoDataService.retrieveTodo(username, this.state.id)
            .then(
                response =>{
                    this.setState({
                        //  setting state for description of incoming description
                        description: response.data.description,
                        // format incoming date to match the date format on font end
                        targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                    })
                }
            )
    }// end comp mount

    // function is called when the submit button is clicked
    onSubmit(values){
       console.log(values)
    }// end onSubmit

    // validate the values in the description and date box
    validate(values){
        // empty object errors
        let errors = {}

        // description needs to be at least 2 character
         if (values.description.length < 2) {
            // add error message to error object to be returned for description
            errors.description = 'Enter at least 2 Characters in Description'
        }
        // targetDate is not a valid date.
        if (!moment(values.targetDate).isValid()) {
            // add error message to error object to be returned for targetDate
            errors.targetDate = 'Enter a valid Target Date'
        }

        return errors
    }

//---------------------------------------------------------------------------------------
    render(){
        let description = this.state.description
        let targetDate = this.state.targetDate
        return(
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{description,targetDate }}
                        validate={this.validate}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) =>(
                                <Form>

                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type ="text" name ="description"/>
                                    </fieldset>

                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name = "targetDate"/>
                                    </fieldset>

                                    <button className="btn btn-success" type = "submit">Save</button>

                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )

    }// end render
}// end class
export default TodoComponent