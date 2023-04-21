import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [text, setText] = useState(`
  # This is heading
  ## This is sub-heading
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  console.log("Hello World")
  \`\`\`

  - First Item
  - Second Item
  - Third Item

  > blockquote
    
  ![alt text](image.jpg)

  **bold text**
  `);

    marked.setOptions({
      breaks: true
    })

  return (
    <div className="App" style={{padding: '50px'}}>
      <textarea
        id="editor"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        style={{width: '400px', height: '400px'}}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
         }}
      ></div>
    </div>
  );
}

export default App;
