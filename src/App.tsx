import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

// defaultMarkdown contains valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
const defaultMarkdown = `## Mehmet Fatih - Frontend Developer

Merhaba! Ben Mehmet Fatih, bir Frontend Developer'ım.

## Hakkımda

- Ad: Mehmet Fatih
- Meslek: Frontend Developer
- Hobiler: Kod yazmak, Müzik yapmak/üretmek, yeni teknolojileri öğrenmek, Futbol ve Kort Tenisi oynamak.

## Kod Örneği

İşte basit bir JavaScript fonksiyonu örneği:

\`\`\`javascript
function sayHello(name) {
  console.log("Merhaba, " + name + "!");
}
sayHello("Dünya");
\`\`\`

## Tecrübelerim

- 2 yıla yakın Frontend Development deneyimi(freelance+şirket).
- Güçlü HTML, CSS ve JavaScript, React, Three.js becerileri.
- React.js ve diğer popüler frontend kütüphaneleri/araçları kullanma yeteneği.

## İletişim

- [LinkedIn](https://www.linkedin.com/in/iammfatihnaziroglu)
- [GitHub](https://github.com/iammfatihnaziroglu)



`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea
            name="editor"
            id="editor"
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
          ></textarea>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;