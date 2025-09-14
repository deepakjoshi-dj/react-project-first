import TopBar from "./components/Header.jsx";
// import Body from "./components/Body.jsx";
import { Outlet } from "react-router";

/**
 * Header
 *   - logo
 *   - links
 * Body
 *   - search
 *   - Restaurant Container
 *       - Restaurant Card (img, name of res, star rating, cuisines)
 * Footer
 *   - copyrights
 *   - Links
 *   - Address
 *   - contact
 *
 */

const AppLayout = () => {
  return (
    <div>
      <TopBar />
      <Outlet />
      {/* <h1>Footer</h1> */}
    </div>
  );
};

export default AppLayout;
