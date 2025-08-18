import { EventNews } from "../models/interfaces/EventNews"

export default function getImageUrl(item: EventNews) {
  if (
    Array.isArray(item.Zdjecie) &&
    item.Zdjecie.length > 0 &&
    item.Zdjecie[0]?.url
  ) {
  return item.Zdjecie[0].url;
  }
  else if (
    !Array.isArray(item.Zdjecie) &&
    item.Zdjecie &&
    item.Zdjecie.url
  ) {
    return item.Zdjecie.url;
  }
  return "/src/styles/images/logo.jpg";
}
