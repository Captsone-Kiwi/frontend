import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import authAPI from "../../api/authAPI";

function SignUp(props) {
  const navigator = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    memberType: "0",
  });
  console.log("회원가입 저장 정보들", values);

  //어떤 멤버타입이 선택되었는지 보여주는 함수
  const [member, setMember] = useState("");
  const selectMemberType = (e) => {
    e.preventDefault();
    if (e.target.tagName !== "DIV") {
      let target = e.target;
      while (e.target.tagName !== "BUTTON") {
        target = target.parentNode;
      }
      setMember(target.value);
    }
  };
  //멤버 타입 저장
  const changeMemberType = (e) => {
    console.log("eeeee", e.target);
    const setName = { ...values };
    const setValue = e.target.name;
    setName["memberType"] = setValue;
    setValues(setName);
    // const { name, value } = e.target;
    // if (value === "interviewer") {
    //   setValues({ ...values, [name]: 1 });
    // }
    // if (value === "interviewee") {
    //   setValues({ ...values, [name]: 2 });
    // }
  };

  //회원가입 정보들 저장
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  //회원가입
  const signup = async (event) => {
    event.preventDefault();
    await authAPI
      .createUser({
        name: values.name,
        email: values.email,
        password: values.password,
        memberType: values.memberType,
      })
      .then((result) => {
        console.log("signup result", result.data);
        navigator("/");
      })
      .catch((error) => {
        console.log("signup error", error.config);
      });
  };

  // privacy 모달 창 띄우기
  const [checked, setChecked] = useState(false);
  const [privacyInfo, setPrivacyInfo] = useState(false);
  const handlePrivacy = async (event) => {
    setChecked(!checked);
    setPrivacyInfo(!privacyInfo);
  };
  function DetailContent({ Title, Content }) {
    return (
      <style.ContentBox>
        <style.Content>{Title}</style.Content>
        <style.ContentText>{Content}</style.ContentText>
        <style.ConfirmButton onClick={handlePrivacy}>
          {"Accept"}
        </style.ConfirmButton>
      </style.ContentBox>
    );
  }

  return (
    <style.Container>
      <style.Title>Create an account</style.Title>
      <style.SignUpForm>
        <style.Span
          color="#7a7a7a"
          size="14px"
          margins="0px 0px 8px 0px"
          weight="bold"
          font="AppleSD"
        >
          Full legal name
        </style.Span>
        <style.TextInput
          placeholder="Enter your full name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          autoFocus
          InputProps={{ disableUnderline: true }}
        />
        <style.Span
          color="#7a7a7a"
          size="14px"
          margins="20px 0px 8px 0px"
          weight="bold"
          font="AppleSD"
        >
          Email address
        </style.Span>
        <style.TextInput
          placeholder="Enter your email address"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          autoFocus
          InputProps={{ disableUnderline: true }}
        />
        <style.Span
          color="#7a7a7a"
          size="14px"
          margins="20px 0px 8px 0px"
          weight="bold"
          font="AppleSD"
        >
          Password
        </style.Span>
        <style.TextInput
          required
          placeholder="Enter your password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={values.password.length > 7 ? false : true}
          helperText={
            values.password.length === 0 || values.password.length > 7
              ? ""
              : "비밀번호는 8자리 이상 적어주세요"
          }
          InputProps={{ disableUnderline: true }}
        />
        <style.Span
          color="#7a7a7a"
          size="14px"
          margins="20px 0px 8px 0px"
          weight="bold"
          font="AppleSD"
        >
          Confirm Password
        </style.Span>
        <style.TextInput
          required
          placeholder="Enter your password"
          name="repassword"
          type="password"
          value={values.repassword}
          onChange={handleChange}
          error={values.password === values.repassword ? false : true}
          helperText={
            values.password === values.repassword ||
            values.repassword.length === 0
              ? ""
              : "비밀번호가 서로 다릅니다."
          }
          InputProps={{ disableUnderline: true }}
        />
        <style.Span
          color="#7a7a7a"
          size="14px"
          margins="20px 0px 8px 0px"
          weight="bold"
          font="AppleSD"
        >
          Member Type
        </style.Span>
        <style.MemberContainer onClick={selectMemberType}>
          <style.MemberBtn
            onClick={changeMemberType}
            name="1"
            value="interviewer"
            current={member === "interviewer"}
          >
            면접관
          </style.MemberBtn>
          <style.MemberBtn
            onClick={changeMemberType}
            name="2"
            value="interviewee"
            current={member === "interviewee"}
          >
            면접자
          </style.MemberBtn>
        </style.MemberContainer>
        {/* <style.CheckForm>
          {privacyInfo && (
            <DetailContent
              Title={"Privacy Acknowledgement."}
              Content={
                "The DOCL team notifies the user of the contents of this Terms and Conditions by the application screen or homepage (hereinafter referred to as “application screen, etc.”) The DOCL Team takes steps to enable you to ask and answer questions regarding the contents of this Terms and Conditions. The DOCL team may revise this Terms and Conditions to the extent that it does not violate the relevant Acts, such as the 「Act on Promotion of Information and Communications Network Utilization and Information Protection」, etc. Agreement of this Terms and Conditions means that you agree to visit the Service regularly to check any changes made to this Terms and Conditions. The DOCL team is not responsible for any damage caused by users who do not know the changed Terms and Conditions. When the DOCL team revises this Terms and Conditions, the DOCL team clearly notifies the existing Terms of Conditions, revised Terms of Conditions, application date of the revised Terms and Conditions and the reason for revision for a considerable period from 7 days before the application date by the method referred to in Paragraph 1. And when the revised contents are important to the user, the DOCL team clearly notifies them for a considerable period from 30 days before the application date by the method referred to in Paragraph 1. If the user does not agree to the application of revised Terms and Conditions, the user may terminate the Service contract."
              }
            />
          )}
          <style.IdCheckBox type="checkbox" />
          <style.Span size="14px" color="#929292" weight="bold" font="AppleSD">
            I have read the
          </style.Span>
          <style.TextBtn checked={checked} onClick={handlePrivacy}>
            Privacy Acknowledgement.
          </style.TextBtn>
        </style.CheckForm> */}
        <style.Button type="submit" onClick={signup}>
          Create an account
        </style.Button>
      </style.SignUpForm>
    </style.Container>
  );
}

export default SignUp;
