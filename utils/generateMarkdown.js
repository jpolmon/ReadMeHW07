const moment = require('moment');
const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case '3-clause BSD':
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
    case 'Apache 2.0':
      return `http://www.apache.org/licenses/LICENSE-2.0`;
    case '3-clause BSD':
      return `https://opensource.org/licenses/BSD-3-Clause`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  switch (license) {
    case 'MIT':
      return `<a id="license"></a>
## License

Copyright ${moment().format('YYYY')} ${name}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

${renderLicenseLink(license)}

---`;
    
    case 'Apache 2.0':
      return `<a id="license"></a>
## License

Copyright ${moment().format('YYYY')} ${name}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

${renderLicenseLink(license)}

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

---`;
    
    case '3-clause BSD':
      return `<a id="license"></a>
## License

Copyright ${moment().format('YYYY')} ${name}

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

${renderLicenseLink(license)}

---`;
    
    default:
      return '';
  }
}

// Verifies that the image is saved correctly.
function imgCheck(img) {
  
  let check;
  
  try {
    fs.accessSync(img, fs.constants.F_OK);
    check = true;
  } catch (err) {
    check = false;
  }

  return check;
}

// Displays the image on the page.
function renderImg(confirm) {
    
  let path = './assets/images/WebPageImage.png';
  let verifyImg = imgCheck(path);

  if (confirm && verifyImg) {
    return `</br></br> ![Website image](.${path})`;
  }
  else {
    return ``;
  }
}

// Generates the table of contents based on user inputs.
function renderContents(response) {
  
  let tocOptions = ['Description', 'Installation', 'Usage', 'Contributing', 'Testing', 'Questions'];
  let toc = ``;
  let i = 1;

  Object.keys(response).forEach(key => {
    if (tocOptions.includes(key) && response[key]) {
      toc = toc + `
${i}. [${key}](#${key.toLowerCase()})`;
      i++;
    }
    else if (key === 'License' && response[key] != 'None') {
      toc = toc + `
${i}. [License](#license)`;
    }
    else if ((key === 'email' && response[key] && !toc.includes('Questions')) || (key === 'github' && response[key] && !toc.includes('Questions'))) {
      toc = toc + `
${i}. [Questions](#questions)`;
      i++;
    }    
  });

  return toc;
}

// Generates the description section.
function renderDesc(desc) {
  if (desc) {
    return `<a id="description"></a> 
## Description 
${desc}`
  }
  else { return ``;
  }
}

// Generates the installation section.
function renderInstall(install) {
  if (install) {
    return `<a id="installation"></a> 
## Installation 
${install}

---`
  }
  else { return ``;
  }
}

// Generates the usage section.
function renderUsage(usage) {
  if (usage) {
    return `<a id="usage"></a> 
## Usage 
${usage}

---`
  }
  else { return ``;
  }
}

// Generates the contribution section.
function renderContrib(contrib) {
  if (contrib) {
    return `<a id="contributing"></a> 
## Contributing
${contrib}

---`
  }
  else { return ``;
  }
}

// Generates the testing section.
function renderTest(test) {
  if (test) {
    return `<a id="testing"></a> 
## Testing 
${test}

---`
  }
  else { return ``;
  }
}

// Generates the question section based on user inputs.
function renderQues(github, email) {
  if (github && email) {
    return `<a id="questions"></a> 
## Questions
If you have any questions please reach out to me at github.com/${github} or via email at ${email}.

---`
  }
  else if (email) {
    return `<a id="ques"></a> 
## Questions
If you have any questions please reach out to me via email at ${email}.

---`
  }
  else if (github) {
    return `<a id="ques"></a> 
## Questions
If you have any questions please reach out to me via github at github.com/${github}.

---`
  }
  else { return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}  <div>${renderLicenseBadge(response.License)}</div>
 

## Table of Contents

${renderContents(response)}
---

${renderDesc(response.Description)} 
${renderImg(response.imgConfirm)}

---

${renderInstall(response.Installation)}

${renderUsage(response.Usage)}

${renderContrib(response.Contributing)}

${renderTest(response.Testing)}

${renderQues(response.github, response.email)}

${renderLicenseSection(response.License, response.name)}

`;
}

module.exports = generateMarkdown;
