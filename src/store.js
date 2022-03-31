import React, { createContext, useState } from "react";

// Context에서 관리해줄 상태값과 메소드 정의
const AuthContext = createContext({
  state: {
    userInfo: {},
    logged: false,
  },
  actions: {
    setUserInfo: () => {},
    setLoginState: () => {},
  },
});

// Provider를 렌더링하면서 상태값과 메소드들 전달
const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [logged, setLoginState] = useState(false);
  const value = {
    state: { userInfo, logged },
    actions: { setUserInfo, setLoginState },
  };
  return (
    <AuthContext.Provider value={[value.state, value.actions]}>
      {children}
    </AuthContext.Provider>
  );
};
const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer };
export default AuthContext;
