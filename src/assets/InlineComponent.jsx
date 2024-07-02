export default function InlineComponent() {
  return (
    //outer curly sbraces are for javascript code execution ,inner curly races are for object defining.
    <div>
      <h1 style={{ color: "red", fontSize: "140px" }}>Inline CSS</h1>
    </div>
  );
}

// or
/*const Inline = { color: "red", fontSize: "140px" };
export default function InlineComponent() {
  return (
    <div>
      <h1 style={Inline}>Inline css</h1>
    </div>
  );
}*/
