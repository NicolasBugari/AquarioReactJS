const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  };
  
  export const styles = {
    container: {
      display: viewport.width > 900 ? "flex" : "none",
      alignItems: "center",
      justifyContent: "space-between",
      height: 100,
      padding: "2rem",
      backgroundColor: "#8BC6EC",
      backgroundImage: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",

    },
    imagenes: {
      height: "90%",
      borderRadius: "3px",
    },
    AppStyle: { 
      background: "linear-gradient(0deg, rgba(13,8,94,1) 4%, rgba(9,121,33,1) 42%, rgba(0,212,255,1) 98%)",
      fontSize: "2rem",
      backgroundColor: "#80D0C7",
      backgroundImage: "linear-gradient(180deg, #80D0C7 10%, #0093E9 37%, #ffffff 100%)",
      border: "3px",
      borderRadius: "3px",
      borderColor: "primary",
      borderStyle: "double",
    },
  };
  