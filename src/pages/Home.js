import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <header className="text-center py-20 bg-blue-600 text-white">
        <h2 className="text-4xl font-bold">🏆 منصة الأكاديميات الرياضية</h2>
        <p className="mt-4">تابع تقييمات اللاعبين ببيانات دقيقة واحترافية</p>
        <a href="/login" className="mt-6 bg-white text-blue-600 px-6 py-3 rounded text-lg font-bold">ابدأ الآن</a>
      </header>
      <Footer />
    </div>
  );
};

export default Home;