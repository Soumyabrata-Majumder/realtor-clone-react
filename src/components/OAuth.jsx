import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router";

const OAuth = () => {
  const navigate = useNavigate();
  const handleOAuth = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      //check if user already exists
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
        navigate("/");
      } else {
        toast.error("User is already registered with this email id");
      }
    } catch (error) {
      toast.error("Couldn't authorize with google");
    }
  };

  return (
    <button
      type="button"
      className="flex justify-center items-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
      onClick={handleOAuth}
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-4 " />
      Continue with Google
    </button>
  );
};

export default OAuth;
