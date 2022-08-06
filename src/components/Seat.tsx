import React, { useEffect } from "react"

export interface SeatProps {
  id:string,
  url:string,
}

export const Seat: React.FC<SeatProps> = (props) => {
  
  const {id, url} = props;

  const init = async () => {

    const root = document.getElementById("root");
    const elem = document.createElement("div");
    root?.appendChild(elem);
    
    elem.id = "FOO";

    const scriptElem = document.createElement("script");
    
    scriptElem.src = url;
    
    scriptElem.onerror = (err) => {
      console.error(err)
    }

    scriptElem.onload = () => {
      console.log("loaded", id, url)
    }

    elem?.appendChild(scriptElem);
    // const res = await fetch(url, {method: "GET"});
    // console.log({res: res});
  }

  useEffect(() => {
    console.log("mounting seat", {id, url});
    init();
  });

  return (
    <div key={id}>
      {url}
    </div>
  )
}