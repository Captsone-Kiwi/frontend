import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderContainer from "./container/headerContainer";
import {
  Home,
  Login,
  SignUp,
  Profile,
  InterviewList,
  InterviewReserve,
  Uploads,
  UploadEvaluation,
  UploadResume,
  UploadExam,
  Main,
} from "./pages";
import AuthContext from "./store";

function App() {
  const [, actions] = useContext(AuthContext);

  const initializeUserInfo = async () => {
    const token = window.sessionStorage.getItem("token");
    if (!token) return;
    actions.setLoginState(true);
    //const { UserActions } = this.props;
    //UserActions.setLoggedInfo(loggedInfo);
    try {
      //await UserActions.checkStatus();
      //여기에 토큰 유효성 체크 API 호출해야 함
    } catch (e) {
      console.log(e);
      //alert('세션이 만료되었습니다. 재로그인 해주세요')
      window.sessionStorage.clear();
      //window.location.href = '/auth/login?expired';
    }
  };
  useEffect(() => {
    initializeUserInfo();
  }, []);

  return (
    <Router>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/interviewlist" element={<InterviewList />} />
        <Route path="/interviewreserve" element={<InterviewReserve />} />
        <Route path="/upload" element={<Uploads />} />
        <Route path="/evaluation" element={<UploadEvaluation />} />
        <Route path="/resume" element={<UploadResume />} />
        <Route path="/exam" element={<UploadExam />} />
        <Route
          path="/main?username=:name?room=:interview_id"
          element={<Main />}
        />
      </Routes>
    </Router>
  );
}

export default App;
