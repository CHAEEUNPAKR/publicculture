import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import PostPage from "./components/views/PostPage/PostPage";
import ShowEvent from "./components/views/ShowEvent/ShowEvent";
import MyPage from "./components/views/MyPage/Mypage";
import MyPageEdit from "./components/views/MyPage/MypageEdit";
import MyPageInfo from "./components/views/MyPage/MypageInfo";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/post/:postId" element={<PostPage />} />
        <Route exact path="/showevent/" element={<ShowEvent />} />
        <Route exact path="/showevent/:name" element={<ShowEvent />} />
        <Route exact path="/mypage" element={<MyPage />} />
        {/* <Route exact path='/mypageedit' element={<MyPageEdit />} />
        <Route exact path='/mypageinfo' element={<MyPageInfo />} /> */}
      </Routes>
    </div>
  );
}

export default App;
