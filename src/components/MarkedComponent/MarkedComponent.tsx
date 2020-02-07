import React from "react";
import marked from "marked";
function MarkedComponent({ rawString, className = "" }) {
  const createMarkup = () => {
    let HTML = marked(rawString, { sanitize: false });
    return { __html: HTML };
  };

  return (
    <span className={className} dangerouslySetInnerHTML={createMarkup()} />
  );
}

export default MarkedComponent;
