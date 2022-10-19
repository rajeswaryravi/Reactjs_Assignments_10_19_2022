import './css/HeaderComponent.css';
function HeaderComponent(props){
    return (
       <div className="header">
       <h1>{props.signup}</h1>
       <p>Get asscess to your orders and chat for support</p>
       </div>
    );
}

export default HeaderComponent;