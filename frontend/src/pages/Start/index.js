import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../../asset/image/LOGO.png";
import startBackImg from "../../asset/image/BG.png";
import useStore from "../../store/UserAuthStore";

function Start() {
  const navigate = useNavigate();
  const resetUser = useStore((state) => state.resetUser);

  useEffect(() => {
    resetUser();
    const timer = setTimeout(() => {
      navigate("/auth/login"); // '/login'은 로그인 페이지의 경로
    }, 2500); // 5000ms(5초) 후에 페이지 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);
  return (
    <>
      <div
        className="w-full h-screen bg-black
      text-9xl text-white
      flex justify-center items-center"
        onClick={() => navigate("/auth/login")}
      >
        <img
          className="w-4/5 max-w-2xl
      animate-jump-in animate-duration-[1500ms] z-10"
          alt="Logo"
          src={logoImg}
        />

        <img
          className="animate-fade  
        absolute h-screen w-full"
          alt="Background"
          src={startBackImg}
        />
        {/* <div className='z-10 absolute w-3/4 h-3/4
      bg-gradient-to-r from-spaceP via-amber-300 via-white via-cyan-100 to-spaceB
      animate-fade-right animate-once animate-delay-[2000ms]'>
        Login
      </div> */}
      </div>
    </>
  );
}

export default Start;
