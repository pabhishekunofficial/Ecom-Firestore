// import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";

// import { signInWithGoogleRedirect } from "../../../utils/firebase/firebase.utils";

// import { createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = ()=>{
  // const logGoogleUser = async ()=>{
  //   const {user} = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user)
  //  };

  //  const logGoogleRedirectUser = async ()=>{
  //   const {user} = await signInWithGoogleRedirect();
  //   console.log({user})
  //   const userDocRef = await createUserDocumentFromAuth(user)
  //  };

    return(
      <div className="authentication-container">
        {/* <button onClick={logGoogleUser}>
          Sign in with Google Popup
        </button> */}
        {/* <button onClick={logGoogleRedirectUser}>
          Sign in with Google Redirecct
        </button> */}
        <SignInForm />
        <SignUpForm />
      </div>
    )
}

export default Authentication;