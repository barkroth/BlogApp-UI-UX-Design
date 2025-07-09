import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { addDoc } from "firebase/firestore";

// Firebase config bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyAi4b_ruPdPPDVqv-oI-527UJz3YNRe86M",
  authDomain: "mehmetblog-3cc5b.firebaseapp.com",
  projectId: "mehmetblog-3cc5b",
  storageBucket: "mehmetblog-3cc5b.firebasestorage.app",
  messagingSenderId: "156270534478",
  appId: "1:156270534478:web:b0aa68694ffdd44c3b881f",
  measurementId: "G-314CB270WW",
};

// Firebase'i başlatmak için fonks.
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Yorumları çekmek için fonks.
export const getYorumlar = async () => {
  try {
    const yorumlarRef = collection(firestore, "yorumlar");
    const q = query(yorumlarRef, orderBy("olusturulmaTarihi", "desc"));
    const yorumlarSnapshot = await getDocs(q);
    const yorumlarListesi = yorumlarSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return yorumlarListesi;
  } catch (error) {
    console.error("Yorumlar çekilirken hata:", error);
    return [];
  }
};

// Gerçek zamanlı yorum dinleyicisi
export const subscribeToYorumlar = (callback: (yorumlar: any[]) => void) => {
  try {
    const yorumlarRef = collection(firestore, "yorumlar");
    const q = query(yorumlarRef, orderBy("olusturulmaTarihi", "desc"));

    return onSnapshot(
      q,
      (snapshot) => {
        const yorumlarListesi = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        callback(yorumlarListesi);
      },
      (error) => {
        console.error("Yorumlar dinlenirken hata:", error);
      }
    );
  } catch (error) {
    console.error("Yorumlar dinleyicisi başlatılırken hata:", error);
    return () => {};
  }
};

// Yorum eklemeye Fonksi.
export const yorumEkle = async (
  adSoyad: string,
  yorumMetni: string,
  ulke: string = "Genel"
) => {
  try {
    await addDoc(collection(firestore, "yorumlar"), {
      adSoyad,
      yorumMetni,
      ulke,
      olusturulmaTarihi: new Date(),
    });
  } catch (error) {
    console.error("Yorum eklenirken hata:", error);
    throw error;
  }
};

// Yorum silme fonksiyonu
export const yorumSil = async (yorumId: string) => {
  try {
    await deleteDoc(doc(firestore, "yorumlar", yorumId));
  } catch (error) {
    console.error("Yorum silinirken hata:", error);
    throw error;
  }
};

// Yorum güncelleme fonksiyonu
export const yorumGuncelle = async (
  yorumId: string,
  yeniYorumMetni: string
) => {
  try {
    await updateDoc(doc(firestore, "yorumlar", yorumId), {
      yorumMetni: yeniYorumMetni,
      guncellenmeTarihi: new Date(),
    });
  } catch (error) {
    console.error("Yorum güncellenirken hata:", error);
    throw error;
  }
};

export { firestore };

// biryerde hata var bak buna

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAi4b_ruPdPPDVqv-oI-527UJz3YNRe86M",
//   authDomain: "mehmetblog-3cc5b.firebaseapp.com",
//   databaseURL: "https://mehmetblog-3cc5b-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "mehmetblog-3cc5b",
//   storageBucket: "mehmetblog-3cc5b.firebasestorage.app",
//   messagingSenderId: "156270534478",
//   appId: "1:156270534478:web:b0aa68694ffdd44c3b881f",
//   measurementId: "G-314CB270WW"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
