export const resetConfig = {
  margin: 0, 
  padding: 0,
	border: 0,
	fontSize: "100%",
	font: "inherit",
	verticalAlign: "baseline"
}
export const bookCover = {width : 160};

export default  {
  fonts:{
    mainFont: "Roboto",
  },
  colors:{
    blueGradientLight: "#4A9AFF",
    blueGradientDark: "#2E3E4F",
    white: "#FFFFFF",
    lightGrey: "#F0F0F0",
    darkGrey: "#646464"
  },
  layouts: {
    narrowCardSize: `${bookCover.width}px`,
    normalCardSize : `${bookCover.width * 2}px`,
    wideCardSize: `${bookCover.width * 4}px`
  }
}