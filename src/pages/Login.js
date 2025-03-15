import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError("خطأ في تسجيل الدخول، تحقق من البريد وكلمة المرور.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="البريد الإلكتروني" className="w-full p-2 border rounded my-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="كلمة المرور" className="w-full p-2 border rounded my-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded mt-2">تسجيل الدخول</button>
        </form>
      </div>
    </div>
  );
};

export default Login;