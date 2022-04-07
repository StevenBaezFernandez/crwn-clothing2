import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdowm from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from "../../contexts/user.context";
import './navigation.style.scss';

const Navigation = ()=>{
    const { currentUser } = useContext(UserContext);
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <CrwnLogo className="logo"/>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                SHOP
            </Link>
            {
              currentUser ?( 
                <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>)
                : (
                  <Link className="nav-link" to="/auth">
                    SIGN IN
                  </Link>                  
                )
            }
            <CartIcon/>

          </div>
          <CartDropdowm/>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

export default Navigation;