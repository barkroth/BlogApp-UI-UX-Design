import { NextResponse } from "next/server";

const photos = [
  {
    img: "/images/Japonya01.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya1.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya36.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya02.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya2.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya09.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya3.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya04.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya05.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya86.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya87.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya06.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya07.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya08.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya03.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya11.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya13.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya14.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya15.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya16.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya17.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya18.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya20.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya21.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya23.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya24.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya25.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya26.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya27.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya28.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya29.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya30.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya31.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya34.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya35.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya1.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya37.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya38.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya43.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya45.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya46.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya49.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya50.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya51.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya52.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya53.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya54.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya55.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya57.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya58.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya59.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya60.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya62.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya63.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya64.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya65.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya66.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya67.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya68.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya69.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya70.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya72.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya75.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya77.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya78.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya79.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya80.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya81.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya82.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya83.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/Japonya85.jpeg",
    country: "Japonya",
  },
  {
    img: "/images/sırbistan1.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan2.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan3.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan6.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan7.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan8.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan10.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan11.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan112.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan113.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan115.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan119.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan117.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan118.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan120.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/sırbistan121.jpeg",
    country: "Sırbistan",
  },
  {
    img: "/images/barcelona1.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/barcelona9.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/barcelona10.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/barcelona11.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/barcelona12.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/barcelona13.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/barcelona14.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/barcelona15.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/barcelona16.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/barcelona17.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/barcelona19.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/barcelona20.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/barcelona21.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/barcelona22.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/sevilla1.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/sevilla2.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/sevilla3.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/sevilla4.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/sevilla5.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/sevilla6.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/sevilla7.jpeg",
    country: "İspanya",
  },
  {
    img: "/images/floransa1.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/floransa2.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/floransa3.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/floransa4.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/floransa5.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/floransa6.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/floransa7.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/floransa8.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/milano2.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/milano3.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/milano4.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/milano5.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/milano7.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/milano8.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/milano9.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/milano10.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/milano11.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/milano12.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma1.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma2.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma3.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma4.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma5.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma6.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma7.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma8.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma9.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya1.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya2.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya3.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya7.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya10.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya11.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya12.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya13.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya18.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya19.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya20.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya21.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya22.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya23.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya26.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya28.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya30.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya31.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/roma-italya33.jpeg",
    country: "İtalya",
  },
  {
    img: "/images/rusya1.jpeg",
    country: "Rusya",
  },
  {
    img: "/images/rusya3.jpeg",
    country: "Rusya",
  },
  {
    img: "/images/rusya4.jpeg",
    country: "Rusya",
  },
  {
    img: "/images/rusya5.jpeg",
    country: "Rusya",
  },
  {
    img: "/images/rusya7.jpeg",
    country: "Rusya",
  },
  {
    img: "/images/rusya8.jpeg",
    country: "Rusya",
  },
  {
    img: "/images/rusya9.jpeg",
    country: "Rusya",
  },
  {
    img: "/images/rusya10.jpeg",
    country: "Rusya",
  },
  {
    img: "/images/rusya11.jpeg",
    country: "Rusya",
  },
  {
    img: "/images/rusya12.jpeg",
    country: "Rusya",
  },
  {
    img: "/images/rusya13.jpeg",
    country: "Rusya",
  },
  {
    img: "/images/rusya14.jpeg",
    country: "Rusya",
  },
  {
    img: "/images/karadağ1.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ2.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ3.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ4.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ6.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ8.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ11.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ12.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ13.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ15.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ16.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ19.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ20.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ21.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ24.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ30.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ31.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ32.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ33.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ34.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ35.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ37.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ39.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ40.jpeg",
    country: "Karadağ",
  },
  {
    img: "/images/karadağ41.jpeg",
    country: "Karadağ",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const country = searchParams.get("country");

  const filteredPhotos = country
    ? photos.filter((photo) => photo.country === country)
    : photos;

  return NextResponse.json(filteredPhotos);
}
