import { Sidebar } from "../components";

const Layout = ({ children }) => {
  return (
    <div className="bg-orange-50">
      <Sidebar />
      {children}
    </div>
  );
};
export default Layout;
