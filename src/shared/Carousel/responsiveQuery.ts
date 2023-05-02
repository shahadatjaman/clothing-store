

export const responsive = (props : any) =>  {
  const {respon} = props
  return {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: respon.device === "desktop" ? respon.items : 1,
      slidesToSlide: 1,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  }
  };