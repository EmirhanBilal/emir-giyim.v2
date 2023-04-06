import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { ReactComponent as ShopBag } from "../../assets/shopbag.svg";
import { countAtom } from "../../recoil/recoil-states";
import { useRecoilValue } from "recoil";
const Navigation = ({ login, handleLogout }) => {
  const count = useRecoilValue(countAtom)
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-links" to="/">
            HOME
          </Link>
          <Link className="nav-links" to="/shop">
            SHOP
          </Link>
          {login ? (
            <Link className="nav-links" to="/" onClick={handleLogout}>
              LOGOUT
            </Link>
          ) : (
            <Link className="nav-links" to="/login">
              LOGIN
            </Link>
          )}
          <Link className="nav-links bag" to="/checkout">
            <ShopBag style={{ width: "45px", height: "45px" }} />
            <span>{count}</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
