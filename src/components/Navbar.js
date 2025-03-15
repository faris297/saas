import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">🏆 منصة الأكاديميات الرياضية</h1>
      <div>
        <Link to="/" className="px-4">الرئيسية</Link>
        <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded">تسجيل الدخول</Link>
      </div>
    </nav>
  );
};

export default Navbar;