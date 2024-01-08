import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //  Validate the form data

    // console.log("email", email.current.value);
    // console.log("password", password.current.value);
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    // console.log("mesage", message);
    seterrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Signup logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/70361516?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              seterrorMessage(errorMessage);
            });
          console.log(user);
          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
    }
    // Sign In logic
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log("user", user);
        // navigate("/browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode + "-" + errorMessage);
      });
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          alt="backgroundImg"
          className="bg-black bg-opacity-30 "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-4/12  absolute p-12 bg-opacity-70 bg-black  my-36 mx-auto left-0 right-0 ">
        <h1 className="text-white font-bold mb-7 text-2xl ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 m-2 w-full rounded-md bg-gray-700"
          />
        )}
        {/* {!isSignInForm && (
          <input
            type="text"
            placeholder="Contact no."
            className="p-3 m-2 w-full rounded-md bg-gray-700"
          />
        )} */}
        {!isSignInForm && (
          <input
            type="date"
            placeholder="Date of Birth"
            className="p-3 m-2 w-full rounded-md bg-gray-700 text-gray-400"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-3 m-2 w-full rounded-md bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 m-2 w-full rounded-md bg-gray-700"
        />
        {!isSignInForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 m-2 w-full rounded-md bg-gray-700"
          />
        )}
        <p className="text-red-500 ml-3 font-bold text-lg">{errorMessage}</p>
        <button
          className="h-10 mt-3 ml-2 w-full bg-red-700  text-center text-white border-2 border-rose-600 rounded-2xl"
          onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {/* <div>
          <h2 className="cursor-pointer hover:underline text-white text-lg font-bold ml-5 mt-4">
            Forget password?
          </h2>
        </div> */}
        <div className="text-white ml-4">
          {/* <p>Remember me</p> */}

          <p
            className=" text-gray-200 cursor-pointer mt-3"
            onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up now"
              : "Already registered ? Sign In now"}
          </p>

          {/* <span>
            <p className="text-sm text-gray-400">
              Sign in is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </span>

          <span>
            <p>
              <a href="<![CDATA[<b>Learn more.</b>]]>">
                ![CDATA[<b>Learn more.</b>]
              </a>
            </p>
          </span> */}
        </div>
        {/* <p>
            The information collected by Google reCAPTCHA is subject to the
            Google Privacy Policy and Terms of Service, and is used for
            providing, maintaining, and improving the reCAPTCHA service and for
            general security purposes (it is not used for personalised
            advertising by Google).
          </p> */}
      </form>

      {/* Footer Section */}
      {/* <div className="text-white">
        <p>Questions? Call 000-800-919-1694</p>
        <p>FAQ</p>
        <p>Cookie Preferences</p>
        <p>Help Centre</p>
        <p>Privacy</p>
        <p>Corporate Information</p>
      </div> */}
    </div>
  );
};

export default Login;
