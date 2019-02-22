import React, { Component } from 'react';
import tempIMG from './images/username.png';
import linked from './images/linkedIn.png';

class MeBox extends Component {
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
                                    <label for="first_name">First Name</label>
                                    <div className="input-box-general">
                                        <input type="text" name="first_name"
                                            placeholder="First Name"
                                            // onChange={this.onChange}
                                            required />
                                        </div>
                                </div>
                                <div className="label-input-general">
                                    <label for="last_name">Last Name</label>
                                    <div className="input-box-general">
                                        <input type="text" name="last_name"
                                            placeholder="Last Name"
                                            // onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="field-general">
                                <div className="label-input-general">
                                    <label for="email">Email</label>
                                    <div className="input-box-general">
                                        <input type="email" name="email"
                                            placeholder="Sample@sample.com"
                                            // onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                                <div className="label-input-general">
                                    <label for="job_title">Job Title</label>
                                    <div className="input-box-general">
                                        <input type="text" name="job_title"
                                            placeholder="Web Developer"
                                            // onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="field-general">
                                <div className="label-input-general">
                                    <label for="linkedin">LinkedIn</label>
                                    <div className="input-box-general">
                                        <input type="text" name="linkedin"
                                            placeholder="LinkedIn Address"
                                            // onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="field-general">
                                <div className="label-input-general">
                                    <label for="bio">Bio</label>
                                    <div className="text-box-general">
                                        <textarea type="text" name="bio"
                                            placeholder="BIO"
                                            // onChange={this.onChange}
                                            required > </textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="field-general">
                                <div className="label-input-general">
                                    <label for="address">Address</label>
                                    <div className="input-box-general">
                                        <input type="text" name="address"
                                            placeholder="123 West 12 St."
                                            // onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="field-general">
                                <div className="label-input-general">
                                    <label for="first_name">State</label>
                                    <div className="input-box-general">
                                        <input type="text" name="first_name"
                                            placeholder="First Name"
                                            // onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                                <div className="label-input-general">
                                    <label for="first_name">City</label>
                                    <div className="input-box-general">
                                        <input type="text" name="first_name"
                                            placeholder="First Name"
                                            // onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                                <div className="label-input-general">
                                    <label for="zipcode">Zipcode</label>
                                    <div className="input-box-general">
                                        <input type="number" name="zipcode"
                                            placeholder="12121"
                                            // onChange={this.onChange}
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="btn-general">
                                <button type="submit">Confirm Changes</button>
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
