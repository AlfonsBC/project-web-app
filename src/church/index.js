import "./index.css";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";
import LoginComponent from "./login";
import ProfileComponent from "./profile";
import SearchComponent from "./search";
import DetailsComponent from "./details";
import RegisterComponent from "./register";
import NavigationSidebar from "./navegation-sidebar";
import WhoToFollowList from "./who-to-follow-list"


function Church() {
    return (
        <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar active=""/>
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
             style={{"position": "relative"}}>
            <Routes>
                <Route path="" element={<HomeComponent/>}/>
                <Route path="home" element={<HomeComponent/>}/>
                <Route path="login" element={<LoginComponent/>}/>
                <Route path="profile" element={<ProfileComponent/>}/>
                <Route path="search" element={<SearchComponent/>}/>
                <Route path="register" element={<RegisterComponent/>}/>
                <Route path="details" element={<DetailsComponent/>}/>
            </Routes>
        </div>
        <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        </div>
    </div>
    );

}
export default Church;

/*
<WhoToFollowList/>
*/