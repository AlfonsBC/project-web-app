import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => 
    {
        const {pathname} = useLocation();
        const paths = pathname.split('/')
        const active = paths[1];
    

    return (
        <div className="list-group">
                    <div className="row">
                        <div className="col d-none d-lg-block"><h5>Church Little Flock</h5></div>
                    </div>
                <Link to="/home" className={`list-group-item ${active === 'home' || active === ''? 'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="bi bi-house-fill"></i></div>
                        <div className="col d-none d-lg-block">Home</div>
                    </div>
                </Link>
                <Link to="/search" className={`list-group-item ${active === 'search'  ? 'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="bi bi-hash"></i></div>
                        <div className="col d-none d-lg-block">Search</div>
                    </div>
                </Link>
                <Link to="/profile" className={`list-group-item ${active === 'profile' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="bi bi-person-fill"></i></div>
                        <div className="col d-none d-lg-block">Profile</div>
                    </div>
                </Link>
                <Link to="/login" className={`list-group-item ${active === 'register' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-2"><i className="bi bi-envelope"></i></div>
                        <div className="col d-none d-lg-block">Sign In / Register</div>
                    </div>
                </Link>
            </div>
    )
};
export default NavigationSidebar;