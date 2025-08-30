import TopBar from "./components/Header.jsx";
import Body from "./components/Body.jsx";

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
      <Body />
      <h1>Footer</h1>
    </div>
  );
};

export default AppLayout;
