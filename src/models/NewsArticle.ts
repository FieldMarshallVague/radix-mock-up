export default interface NewsArticle {
  id: number,
  category?: String,
  title: String,
  subTitle?: String,
  description?: String,
  imageName?: String,
  imageAltText?: String,
  linkUrl: String,
  dateTime: Date
}