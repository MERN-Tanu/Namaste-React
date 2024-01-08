import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
// import showGptSearch from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // An error happend
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: "https://avatars.githubusercontent.com/u/70361516?v=4",
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }

      // Unsubscribe when component unmounts
      return () => unsubscribe();
    });
  }, []);

  const handleSearchClick = () => {
    //  Toggle GPT search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <div className="flex  p-2 ">
        {showGptSearch && (
          <select
            className="bg-white m-2 p-2 rounded-lg "
            onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
            {/* <option value="en">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option> */}
          </select>
        )}
        <button
          className="py-2 my-2 px-4 mx-4 bg-slate-100 rounded-lg"
          onClick={handleSearchClick}>
          {showGptSearch ? "Homepage" : "GPT Search"}
        </button>
        <img
          alt="userImg"
          className="w-12 h-12 rounded-full"
          src={user?.photoURL}
        />
        <button
          onClick={handleSignOut}
          className="font-bold text-white h-12 bg-red-800 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out">
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default Header;
