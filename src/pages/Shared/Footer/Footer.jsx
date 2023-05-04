/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="col">Contact Now <br/>
            <div className="text-secondary">
                <p className="pb-1">555 4th 5t NW, Washington <br/>
                    DC 20530, United States</p>
                    <p className="pb-1">+88 01750 000 000 <br />
                    +88 01750 000 000</p>
                    <p>info@gmail.com</p>
            </div>
        </div>
        <div className="input-group">
                <input type="mail" className="form-control rounded" placeholder="Your Email" aria-label="mail" aria-describedby="mail-addon" />
                <button type="button" className="btn btn-outline-secondary border-light-subtle">Subscribe</button>
              </div> 
             <p className='text-center'><small>@copyright of my recepies</small></p> 
        </div>
    );
};

export default Footer;