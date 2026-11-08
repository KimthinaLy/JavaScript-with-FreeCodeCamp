const markdownInput = document.querySelector("#markdown-input");
const htmlOutput= document.querySelector("#html-output"); 
const htmlPreview = document.querySelector("#preview"); 

markdownInput.addEventListener("input", () => {
  const htmlEL = convertMarkdown();
  htmlOutput.innerText = htmlEL;
  htmlPreview.innerHTML = htmlEL;
})

const h1Regex = /\s*#\s(?<content>.+)/
const h2Regex = /\s*##\s(?<content>.+)/
const h3Regex = /\s*###\s(?<content>.+)/
const boldRegex = /(?:^|\s)\*\*(?<content>.+)\*\*(?:$|\s)/

const regexList = [h1Regex, h2Regex, h3Regex]


const convertMarkdown = () => {
  htmlOutput.innerText = "";
  htmlPreview.innerHTML = "";
  const input = markdownInput.value

  if (h3Regex.test(input)){
    return input.replace(h3Regex, "<h3>$<content></h3>\n") 
  }
 
  if (h2Regex.test(input)){
    return input.replace(h2Regex, "<h2>$<content></h2>\n") 
  }
 
  if (h1Regex.test(input)){
    return input.replace(h1Regex, "<h1>$<content></h1>\n") 
  }

  if (boldRegex.test(input)){
    return input.replace(boldRegex, "<strong>$<content></strong>\n") 
  }
  

  return input;
}