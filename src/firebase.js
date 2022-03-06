import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1uMO89pnj28FNTIZpruwlBaEf2f218Nk",
  authDomain: "twitter-clone-udemy-abd56.firebaseapp.com",
  projectId: "twitter-clone-udemy-abd56",
  storageBucket: "twitter-clone-udemy-abd56.appspot.com",
  messagingSenderId: "1049998225223",
  appId: "1:1049998225223:web:651bab9141923f6c116662"
};

// 流れ
// 初期化→databaseaと接続→data取得

// Initialize Firebase(初期化。次は接続)
const app = initializeApp(firebaseConfig);

// どうやってcloud dbに入ったdataと接続するか＝getFirestore()をimport。(次はデータの取得=>該当のcomponentsファイル内でdata取得。なぜなら、どこでも使えるようにdbをexportしているから)
const db = getFirestore(app);

// どのファイルでも使えるようにexportする
export default db;