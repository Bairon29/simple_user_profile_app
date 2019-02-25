import React, { Component } from 'react';
import tempIMG from './images/username.png';
import linked from './images/linkedIn.png';
import LoaderButton from "./LoaderButton";
import LocationSelection from './LocationSelection';

class MeBox extends Component {
    constructor(){
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            address: '',
            gender: '',
            state: '',
            city: '',
            zipcode: 0,
            bio: '',
            linkedIn: '',
            job_title: '',
            image: '',
            message: '',
            isLoading: false
          }

        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
  render() {
    return (
        <div className="mebox-container">
            <div className="mebox-title">
                <h1>User Profile</h1>
            </div>
            <div className="main-mebox">
                <div className="just-mebox">
                    <div className="img-mebox">
                        <img src={tempIMG}/>
                    </div>
                    <div className="names-mebox">
                        <h1>Name</h1>
                        <h4>Title</h4>
                        <a className="social-mebox" href={"#"}>
                            <img src={linked} />
                            LinkedIn Profile
                        </a>
                    </div>
                    <div className="desc-mebox">
                        <div className="desc-title">
                            <h4>Biography</h4>
                        </div>
                        <p>Whether a medieval typesetter chose to garble a well-known (but non-Biblical—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, it's admittedly an odd way for Cicero to sail into the 21st century.</p>
                    </div>
                </div>

                <div className="general-mebox">
                    <h1 className="title-genaral">Account Details</h1>
                    <div className="form-general">
                        <form>
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
                                    <label htmlFor="linkedin">LinkedIn</label>
                                    <div className="input-box-general">
                                        <input type="text" name="linkedin"
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

export default MeBox;
