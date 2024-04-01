const Space = ({direction , value} : {direction : string , value : string})=>{

        if (direction === "h") {
          return (
            <div style={{ display: "flex", flexDirection: "row"  , width : value}}></div>
          );
        } else {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: value,
              }}
            ></div>
          );
        }
}

export default Space;