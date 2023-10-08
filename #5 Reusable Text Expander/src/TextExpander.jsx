import { useState } from "react";

function TextExpander({
  children = "To customize your text and style, you should pass your text through children props and another props that i already provide",
  collapsedNumWords = 8,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  defaultExpand = false,
  bgColor = "black",
  textColor = "white",
  className,
  borderRadius,
  border = "1px solid gray",
  padding = "10px",
  margin = "20px"
}) {
  const [isExpand, setIsExpand] = useState(defaultExpand);

  const container = {
    backgroundColor: bgColor,
    color: textColor,
    padding: padding,
    border,
    borderRadius,
    margin
  };

  const displayText = children.split(" ").slice(0, collapsedNumWords).join(" ");

  return (
    <div className={className} style={className ? null : container}>
      {isExpand ? children : displayText + "..."}
      <span
        type="button"
        style={{ cursor: "pointer", color: buttonColor }}
        onClick={() => setIsExpand(!isExpand)}
      >
        {isExpand ? " " + collapseButtonText : " " + expandButtonText}
      </span>
    </div>
  );
}

export default TextExpander;
