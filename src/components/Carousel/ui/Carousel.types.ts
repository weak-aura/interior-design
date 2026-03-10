export interface CarouselProps {
  data: {
    name: string 
    isLink: boolean;
    propertyName?: string,
    images: {
      title?: string
      src?: string;
      preview: string;
    }[]
  },
}
