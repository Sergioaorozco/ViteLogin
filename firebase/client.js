import firebase from 'firebase/compat/app'
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
const provider = new GithubAuthProvider()

const firebaseConfig = {
  apiKey: 'AIzaSyDVkwDplSu8sXq_rIa-Wl9HVGni5-QK6l0',
  authDomain: 'sekretuadev.firebaseapp.com',
  projectId: 'sekretuadev',
  storageBucket: 'sekretuadev.appspot.com',
  messagingSenderId: '980788870728',
  appId: '1:980788870728:web:dd7b40108b27dae4d7a27d',
  measurementId: 'G-JCHDVPC1LF'
}

// Initialize Firebase

firebase.initializeApp(firebaseConfig)

// export const loginWithGithub = () => {
//   const githubProvider = new firebase.auth.GithubAuthProvider()
//   return firebase.auth().signInWithPopup(githubProvider)
// }

export const loginWithGithub = () => {
  const auth = getAuth()
  signInWithPopup(auth, provider)
    .then((user) => {
      console.log(user)
    }).catch((error) => {
      console.log(error)
    })
}
