const markdownInput = document.querySelector("#markdown-input");
const htmlOutput= document.querySelector("#html-output"); 
const htmlPreview = document.querySelector("#preview"); 

markdownInput.addEventListener("input", () => {
  const htmlEL = convertMarkdown();
  htmlOutput.innerText = htmlEL;
  htmlPreview.innerHTML = htmlEL;
})

const h1Regex = /^\s*#\s(?<content>.+)/g;
const h2Regex = /^\s*##\s(?<content>.+)/g;
const h3Regex = /^\s*###\s(?<content>.+)/g;
const boldRegex = /\s*(?:\*\*(?<content>.+)\*\*|__(?<content>.+)__)\s?/g;
const italicRegex = /(?:^|(?<textBefore>.+\s+))(\*(?<content>.+)\*|_(?<content>.+)_)(?<textAfter>.+\s*)?/g;
const imageRegex = /!\[(?<alt_text>.+?)\]\((?<imageSource>.+?)\)/g;
const linkRegex = /\[(?<link_text>.+?)\]\((?<URL>.+?)\)/g;
const quoteRegex = /^>\s(?<quote>.+)/g;

const regexList = [h1Regex, h2Regex, h3Regex, quoteRegex, boldRegex, italicRegex, imageRegex, linkRegex];

const h3Convert = "<h3>$<content></h3>";
const h2Convert = "<h2>$<content></h2>";
const h1Convert = "<h1>$<content></h1>";
const boldConvert = "<strong>$<content></strong>";
const italicConvert = "$<textBefore><em>$<content></em>$<textAfter>";
const linkConvert = `<a href="$<URL>">$<link_text></a>`;
const imageConvert = `<img alt="$<alt_text>" src="$<imageSource>">`;
const quoteConvert = `<blockquote>$<quote></blockquote>`;


const htmlConvertList = [h1Convert, h2Convert,  h3Convert, quoteConvert, boldConvert, italicConvert, imageConvert, linkConvert] 


const convertMarkdown = () => {
  htmlOutput.innerText = "";
  htmlPreview.innerHTML = "";
  const input = markdownInput.value
  let lineInput = input.split(/\r?\n/);

  regexList.forEach((regex, i) => {
    lineInput = lineInput.map((line) => line.replace(regex, htmlConvertList[i]));
  });

  return lineInput.join("\n");
}