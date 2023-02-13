import { Sidebar } from "../components";

const Layout = ({ children }) => {
  return (
    <div className="bg-orange-50 ml-mainM px-10">
      <Sidebar />
      {children}
    </div>
  );
};
export default Layout;
