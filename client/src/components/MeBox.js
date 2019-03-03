import React, { Component } from 'react';
import tempIMG from './images/username.png';
import linked from './images/linkedIn.png';
import edit from './images/edit.png';
import LoaderButton from "./LoaderButton";
import LocationSelection from './LocationSelection';
import { connect } from 'react-redux';
import { profileInfo, updateUserInfo, uploadPhoto } from '../actions/userActions';
import { url } from '../utils/AuthTypes'

class MeBox extends Component {
    constructor(){
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            address: '',
            gender: '',
            state: 'State',
            city: 'City',
            zipcode: 0,
            bio: '',
            linkedIn: '',
            job_title: '',
            image: '',
            message: '',
            m: '',
            isLoading: false
          }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.imgLoaded = this.imgLoaded.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(e){
        // e.preventDefault();
        // console.log(e.target, 'submmitteeeedd');
        // var button = document.getElementById('btn');
        // button.click();
        this.refs["conform-handler"].classList.add("custom-file-handler");
        this.refs["upload-handler"].classList.remove("custom-file-handler");
    }
    imgLoaded(e){
        // this.setState({
        //     m: e.target.files[0]
        // })
        // console.log(this.refs)
        // this.refs["conform-handler"].classList.remove("custom-file-handler");
        // this.refs["upload-handler"].classList.add("custom-file-handler");
        this.props.uploadPhoto(e.target.files[0])
    }
    async onSubmit(e){
        e.preventDefault();
    
        const user = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          address: this.state.address,
          gender: this.state.gender,
          state: this.state.state,
          city: this.state.city,
          zipcode: this.state.zipcode,
          bio: this.state.bio,
          linkedIn: this.state.linkedIn,
          job_title: this.state.job_title,
          image: this.state.image,
        }
        // this.setState({
        //   first_name: '',
        //   last_name: '',
        //   email: '',
        //   password: '',
        //   conform_password: '',
        //   address: '',
        //   gender: '',
        //   state: '',
        //   city: '',
        //   zipcode: 0,
        //   isLoading: true
        // })
        try {
            console.log('submiting form')
          await this.props.updateUserInfo(user);
        } catch (e) {
          alert(e.message);
          this.setState({ isLoading: false });
        }
        // this.props.SignInUser(user);
      }
      
      UNSAFE_componentWillReceiveProps(nextProps, nextState){
        console.log('next props', nextState)
        this.setState({
            first_name: nextProps.first_name,
            last_name: nextProps.last_name,
            email: nextProps.email,
            address: nextProps.address,
            gender: nextProps.gender,
            state: nextProps.state,
            city: nextProps.city,
            zipcode: nextProps.zipcode,
            bio: nextProps.bio,
            linkedIn: nextProps.linkedIn || "",
            job_title: nextProps.job_title || "",
            image: nextProps.image || "",
            message: nextProps.message,
            isLoading: false
        })
      }
    // getSnapshotBeforeUpdate(props, state) {
    //     props.profileInfo();
    //     return {
    //         ...state
    //       };
    // }
    // componentDidUpdate
    
    UNSAFE_componentWillMount(){
        this.props.profileInfo();
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
  render() {
      let link = this.state.linkedIn || "#";
      let img = "";
      if(!(this.state.image === "" 
        || this.state.image === undefined 
        || this.state.image === null
        || this.state.image.length < 1)){
            img = url + this.state.image;
        } else{
            img = tempIMG;
        }
    return (
        <div className="mebox-container">
            <div className="mebox-title">
                <h1>User Profile</h1>
            </div>
            <div className="main-mebox">
                <div className="just-mebox">
                    <div className="img-mebox">
                        <label htmlFor="image" 
                            ref="upload-handler"
                            className="custom-file-upload">
                            {/* <i className="fa fa-cloud-upload"></i> Custom Upload */}
                            <img src={edit} />
                        </label>
                        <label htmlFor="btn" 
                            ref="conform-handler"
                            className="custom-file-conform custom-file-handler">
                            {/* <i className="fa fa-cloud-upload"></i> Custom Upload */}
                            Conform
                        </label>
                        <form id="frmUploader" 
                            encType="multipart/form-data"
                            ref="form" 
                            action="users/uploadPhoto" method="POST" 
                            >
                            <input id="image" name="image" 
                                className="img-change-mebox" 
                                type="file" 
                                onChange={this.imgLoaded} 
                                />
                            <input type="submit" id="btn"
                                className="img-change-mebox"
                                onClick={this.formSubmit}  />
                        </form>
                        <img src={img}/>
                    </div>
                    <div className="names-mebox">
                        <h1>{this.state.first_name + " " + this.state.last_name}</h1>
                        <h4>{this.state.job_title}</h4>
                        <a className="social-mebox" href={link} target="_blank" >
                            <img src={linked} />
                            LinkedIn Profile
                        </a>
                    </div>
                    <div className="desc-mebox">
                        <div className="desc-title">
                            <h4>Biography</h4>
                        </div>
                        <p>{this.state.bio}</p>
                    </div>
                </div>

                <div className="general-mebox">
                    <h1 className="title-genaral">Account Details</h1>
                    <div className="form-general">
                        <form onSubmit={this.onSubmit}>
                            <div className="field-general">
                                <div className="label-input-general">
                                    <label htmlFor="first_name">First Name</label>
                                    <div className="input-box-general">
                                        <input type="text" name="first_name"
                                            placeholder="First Name"
                                            value={this.state.first_name}
                                            onChange={this.onChange}
                                            required />
                                        </div>
                                </div>
                                <div className="label-input-general">
                                    <label htmlFor="last_name">Last Name</label>
                                    <div className="input-box-general">
                                        <input type="text" name="last_name"
                                            placeholder="Last Name"
                                            value={this.state.last_name}
                                            onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="field-general">
                                <div className="label-input-general">
                                    <label htmlFor="email">Email</label>
                                    <div className="input-box-general">
                                        <input type="email" name="email"
                                            placeholder="Sample@sample.com"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                                <div className="label-input-general">
                                    <label htmlFor="job_title">Job Title</label>
                                    <div className="input-box-general">
                                        <input type="text" name="job_title"
                                            placeholder="Web Developer"
                                            value={this.state.job_title}
                                            onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="field-general">
                                <div className="label-input-general">
                                    <label htmlFor="linkedIn">LinkedIn</label>
                                    <div className="input-box-general">
                                        <input type="text" name="linkedIn"
                                            placeholder="LinkedIn Address"
                                            value={this.state.linkedIn}
                                            onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="field-general">
                                <div className="label-input-general">
                                    <label htmlFor="bio">Bio</label>
                                    <div className="text-box-general">
                                        <textarea type="text" name="bio"
                                            value={this.state.bio}
                                            onChange={this.onChange}
                                            required > </textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="field-general">
                                <div className="label-input-general">
                                    <label htmlFor="address">Address</label>
                                    <div className="input-box-general">
                                        <input type="text" name="address"
                                            placeholder="123 West 12 St."
                                            value={this.state.address}
                                            onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="field-general">
                                <div className="label-input-general">
                                    <label htmlFor="state">State</label>
                                    <div className="input-box-general">
                                        <LocationSelection 
                                            selected={this.state.state}
                                            val={this.state.state}
                                            loc="state" 
                                            state_for_city=""
                                            onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="label-input-general">
                                    <label htmlFor="city">City</label>
                                    <div className="input-box-general">
                                        <LocationSelection 
                                            selected={this.state.city}
                                            val={this.state.city}
                                            loc="city" 
                                            state_for_city={this.state.state}
                                            onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="label-input-general">
                                    <label htmlFor="zipcode">Zipcode</label>
                                    <div className="input-box-general">
                                        <input type="number" name="zipcode"
                                            placeholder="12121"
                                            value={this.state.zipcode}
                                            onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="btn-general">
                                <LoaderButton
                                    className="button"
                                    type="submit"
                                    isLoading={this.state.isLoading}
                                    text="Register"
                                    loadingText="Validating…"
                                    />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
    console.log('user info entirely',state.user.user)
    return {
        first_name: state.user.user.first_name,
        last_name: state.user.user.last_name,
        email: state.user.user.email,
        address: state.user.user.address,
        gender: state.user.user.gender,
        state: state.user.user.state,
        city: state.user.user.city,
        zipcode: state.user.user.zipcode,
        bio: state.user.user.bio,
        linkedIn: state.user.user.linkedIn,
        job_title: state.user.user.job_title,
        image: state.user.image || state.user.user.image,
        message: state.user.user.message
    }
  }
  
export default connect(mapStateToProps, {uploadPhoto, profileInfo, updateUserInfo})(MeBox);
