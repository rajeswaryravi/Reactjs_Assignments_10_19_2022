import './css/ContentComponent.css';

import React from 'react';   
    
class ContentComponent extends React.Component { 
    render() {
        return (<form className="form"> 
            <input type="text" placeholder="Enter Username" className="uname" /><br/><br/>
            <input type="password" placeholder="Password" className="pwd" /> <br/><br/>
            <input type="submit" value="Sign in" className="btn"/>  
            <a href="_blank">Terms and Conditions</a>               
        </form>);
       
    }
}
export default ContentComponent;

 