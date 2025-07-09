import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { firestore } from "./firebase";

export async function yorumEkle(adSoyad: string, yorumMetni: string, ulke: string = "Genel") {
  const yorumlarRef = collection(firestore, "yorumlar");
  await addDoc(yorumlarRef, {
    adSoyad,
    yorumMetni,
    ulke,
    olusturulmaTarihi: serverTimestamp()
  });
}
