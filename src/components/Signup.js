import React, {Component} from 'react';
// import MainBody from '../Nav-bar/MainBody'
import { GoogleLogin } from 'react-google-login';



class Signup extends Component{
    constructor(props){
        super(props)
        this.state={
            instructhead: 'Become an instructor today',
            instructpara: "Join the World's Largest online learning marketplace",
            userType: ""

        }
        this.signUp = this.signUp.bind(this);

    }
    signUp(userType){
        if(userType === "instructor"){
            this.props.history.push('/InstructorPage');
        }else if(userType === "student"){
            this.props.history.push('/StudentPage');
        }


    }

    render(){
        // const inStyle = { background: "black"};
        const responseGoogleForInstructor = (response) => {
            console.log(response);
            var res = response.profileObj;
            console.log(res);
            this.setState({
                userType: "instructor"
            },()=>{
                this.signUp(response, this.state.userType)
            })
        }

        // const responseGoogleForStudent = (response) => {
        //     console.log(response);
        //     var res = response.profileObj;
        //     console.log(res);
        //     this.setState({
        //         userType: "student"
        //     },()=>{
        //         this.signUp(response, this.state.userType)
        //     })
        // }
        return(
            <div className="grace">
                {/* <MainBody/> */}

                <GoogleLogin
                    className="your-custom-class"
                    clientId="1005724972216-28tn8uc5blq1mbaea1f31shdb8mba7g9.apps.googleusercontent.com"
                    render={renderProps => (
                    <button className="btne" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogleForInstructor}
                    onFailure={responseGoogleForInstructor}
                    isSignedIn={true}
                    />

            </div>

        )

}

}

export default Signup


