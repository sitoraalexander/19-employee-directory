import React from "react";


export function Container({ fluid, children }) {
  return <div 
            className={`container${fluid ? "-fluid main-container pt-3" : " main-container pt-3"}`} 
            >
               {children}
            </div>;
}

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")
        .concat(" p-0")}
    >
      {children}
    </div>
  );
}