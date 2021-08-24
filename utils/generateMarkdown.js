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
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `Copyright 2021 User

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    
    case 'Apache 2.0':
      return `   Copyright 2021 User

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
        ${renderLicenseLink(license)}
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`;
    
    case '3-clause BSD':
      return `Copyright 2021 User

      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
    
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}  <div>${renderLicenseBadge(response.license)}</div>
  
## Table of Contents
1. [Description](#desc) 
2. [Installation](#install)
3. [Usage](#usage)
4. [Contributing](#contrib)
5. [Testing](#testing)
6. [License](#license)
6. [Questions](#ques)

---

<a id="desc"></a> 
## Description 
${response.desc} 
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vero perferendis, sunt maiores aspernatur inventore minus accusamus facilis similique reprehenderit! Delectus, ducimus enim. Maxime, praesentium necessitatibus expedita molestiae suscipit alias?
Porro reprehenderit dolorem atque odit, architecto voluptatibus. Fugit atque doloremque sapiente rerum accusamus nihil adipisci dicta voluptates velit incidunt ex facere, minima aliquam quidem laudantium laborum vero quibusdam vitae asperiores?
Inventore, fuga. Odit possimus fuga obcaecati quia id numquam nostrum accusamus iusto, perferendis perspiciatis impedit labore et eveniet, quibusdam natus laudantium unde quae delectus blanditiis doloribus velit! Quos, eligendi voluptatem!
Quod explicabo, eveniet maiores praesentium nemo, neque et, aliquid quae voluptatem cumque asperiores? Accusamus culpa voluptate, reiciendis, itaque vel excepturi animi perferendis laborum facere odio quae temporibus, eum obcaecati. Veniam?
Soluta sunt quasi itaque eum mollitia. Iusto praesentium soluta explicabo eum nobis! Ducimus, obcaecati nostrum? Doloribus hic voluptatum earum laudantium quos, quidem expedita doloremque id maiores odio a voluptates dolore?
Excepturi mollitia dolorum inventore cupiditate neque sit distinctio enim ipsum natus qui nesciunt animi velit, quisquam sequi doloremque necessitatibus nulla corporis sed nam! Harum, sit. Nihil at ut aliquam facere.
Iste at laborum, velit ullam sapiente corrupti rerum. Consequatur eaque nihil maxime quaerat dicta nesciunt labore inventore quam nulla repudiandae ipsam molestias qui ex odit, dolorem quod quo sint commodi.
Repudiandae error dolor, vitae totam laborum accusamus, quo fugiat dolorum officia libero temporibus fuga sint cumque quibusdam nam. Amet iure dolor ad consectetur voluptate porro possimus quidem nisi quas dolores.
A rerum quasi placeat? Aperiam voluptatum, odio minus eius id aut consequuntur consequatur iusto non dignissimos ab doloremque dolore fugiat molestiae enim nihil maiores voluptates itaque cumque? Natus, blanditiis reprehenderit.
Voluptatum voluptate architecto accusamus aliquam dignissimos, quaerat odio natus necessitatibus vel sunt laboriosam fuga neque optio ut, eius praesentium? Explicabo corrupti dolorem exercitationem officia, deserunt voluptatibus laboriosam possimus dolores dolore.
Quo temporibus quaerat dolorum, blanditiis amet magnam, earum molestiae harum velit sequi voluptatum laudantium tempore ipsum nam accusamus sapiente, dolorem dolores distinctio non quidem. Nihil nobis dicta saepe eligendi sint!
Doloremque expedita laudantium laborum repellat cupiditate adipisci sequi voluptas labore aspernatur? Odio iste numquam harum ex. Modi saepe aliquam, amet culpa illum fugit. Iste error eius officiis recusandae itaque facere!
Velit rem quibusdam, saepe sint unde aut beatae maiores facere vitae quo delectus sequi impedit nobis illum dolores dolor ad aperiam voluptatibus debitis, voluptatum totam illo? Eaque autem blanditiis consequatur.
Nostrum veritatis sapiente quas corporis dolorem. Ipsa, in similique! Placeat animi, commodi harum iste odit perferendis quaerat magnam atque cum quisquam natus voluptas quis rerum iure suscipit illo ducimus praesentium.
Maxime molestias facilis amet maiores deleniti dignissimos aspernatur, sapiente vel officia odit ipsum, accusamus adipisci voluptatibus, assumenda obcaecati natus quaerat sequi? Aliquid, ullam. Architecto pariatur nobis, inventore nulla autem nostrum!
Molestiae doloribus, ipsa nam fugit nostrum ea iste dolor saepe pariatur facilis, repellat ab molestias fugiat eligendi culpa animi soluta illo corrupti, voluptatibus distinctio reprehenderit! Delectus numquam unde aut eum.
Beatae, omnis. Sed quia eligendi, perferendis asperiores qui voluptatem animi laudantium! Corrupti, accusamus. Quam, soluta quaerat nobis laborum nisi consequatur vero, dolorem distinctio aliquam temporibus non odit, atque debitis excepturi.
Ducimus numquam modi minima, voluptates, velit nobis animi quo similique quibusdam nemo veniam iste provident amet laudantium quia tempora! Nemo quis eligendi eaque maxime quidem optio consequatur culpa. Quas, itaque.
Aperiam voluptas facere vel eveniet ex quod eligendi incidunt non, molestiae, molestias numquam dicta dolores? Culpa et ab esse quos vel. Ea quos tempore unde dicta sed illo animi explicabo.
Cumque, quaerat dolorum, omnis, tempore quas error mollitia provident quod ab recusandae vero doloremque dolore obcaecati architecto molestias. Odio aperiam et rerum commodi natus maxime dolores, id necessitatibus repudiandae deleniti!

---

<a id="install"></a> 
## Installation 
${response.install}
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vero perferendis, sunt maiores aspernatur inventore minus accusamus facilis similique reprehenderit! Delectus, ducimus enim. Maxime, praesentium necessitatibus expedita molestiae suscipit alias?
Porro reprehenderit dolorem atque odit, architecto voluptatibus. Fugit atque doloremque sapiente rerum accusamus nihil adipisci dicta voluptates velit incidunt ex facere, minima aliquam quidem laudantium laborum vero quibusdam vitae asperiores?
Inventore, fuga. Odit possimus fuga obcaecati quia id numquam nostrum accusamus iusto, perferendis perspiciatis impedit labore et eveniet, quibusdam natus laudantium unde quae delectus blanditiis doloribus velit! Quos, eligendi voluptatem!
Quod explicabo, eveniet maiores praesentium nemo, neque et, aliquid quae voluptatem cumque asperiores? Accusamus culpa voluptate, reiciendis, itaque vel excepturi animi perferendis laborum facere odio quae temporibus, eum obcaecati. Veniam?
Soluta sunt quasi itaque eum mollitia. Iusto praesentium soluta explicabo eum nobis! Ducimus, obcaecati nostrum? Doloribus hic voluptatum earum laudantium quos, quidem expedita doloremque id maiores odio a voluptates dolore?
Excepturi mollitia dolorum inventore cupiditate neque sit distinctio enim ipsum natus qui nesciunt animi velit, quisquam sequi doloremque necessitatibus nulla corporis sed nam! Harum, sit. Nihil at ut aliquam facere.
Iste at laborum, velit ullam sapiente corrupti rerum. Consequatur eaque nihil maxime quaerat dicta nesciunt labore inventore quam nulla repudiandae ipsam molestias qui ex odit, dolorem quod quo sint commodi.
Repudiandae error dolor, vitae totam laborum accusamus, quo fugiat dolorum officia libero temporibus fuga sint cumque quibusdam nam. Amet iure dolor ad consectetur voluptate porro possimus quidem nisi quas dolores.
A rerum quasi placeat? Aperiam voluptatum, odio minus eius id aut consequuntur consequatur iusto non dignissimos ab doloremque dolore fugiat molestiae enim nihil maiores voluptates itaque cumque? Natus, blanditiis reprehenderit.
Voluptatum voluptate architecto accusamus aliquam dignissimos, quaerat odio natus necessitatibus vel sunt laboriosam fuga neque optio ut, eius praesentium? Explicabo corrupti dolorem exercitationem officia, deserunt voluptatibus laboriosam possimus dolores dolore.
Quo temporibus quaerat dolorum, blanditiis amet magnam, earum molestiae harum velit sequi voluptatum laudantium tempore ipsum nam accusamus sapiente, dolorem dolores distinctio non quidem. Nihil nobis dicta saepe eligendi sint!
Doloremque expedita laudantium laborum repellat cupiditate adipisci sequi voluptas labore aspernatur? Odio iste numquam harum ex. Modi saepe aliquam, amet culpa illum fugit. Iste error eius officiis recusandae itaque facere!
Velit rem quibusdam, saepe sint unde aut beatae maiores facere vitae quo delectus sequi impedit nobis illum dolores dolor ad aperiam voluptatibus debitis, voluptatum totam illo? Eaque autem blanditiis consequatur.
Nostrum veritatis sapiente quas corporis dolorem. Ipsa, in similique! Placeat animi, commodi harum iste odit perferendis quaerat magnam atque cum quisquam natus voluptas quis rerum iure suscipit illo ducimus praesentium.
Maxime molestias facilis amet maiores deleniti dignissimos aspernatur, sapiente vel officia odit ipsum, accusamus adipisci voluptatibus, assumenda obcaecati natus quaerat sequi? Aliquid, ullam. Architecto pariatur nobis, inventore nulla autem nostrum!
Molestiae doloribus, ipsa nam fugit nostrum ea iste dolor saepe pariatur facilis, repellat ab molestias fugiat eligendi culpa animi soluta illo corrupti, voluptatibus distinctio reprehenderit! Delectus numquam unde aut eum.
Beatae, omnis. Sed quia eligendi, perferendis asperiores qui voluptatem animi laudantium! Corrupti, accusamus. Quam, soluta quaerat nobis laborum nisi consequatur vero, dolorem distinctio aliquam temporibus non odit, atque debitis excepturi.
Ducimus numquam modi minima, voluptates, velit nobis animi quo similique quibusdam nemo veniam iste provident amet laudantium quia tempora! Nemo quis eligendi eaque maxime quidem optio consequatur culpa. Quas, itaque.
Aperiam voluptas facere vel eveniet ex quod eligendi incidunt non, molestiae, molestias numquam dicta dolores? Culpa et ab esse quos vel. Ea quos tempore unde dicta sed illo animi explicabo.
Cumque, quaerat dolorum, omnis, tempore quas error mollitia provident quod ab recusandae vero doloremque dolore obcaecati architecto molestias. Odio aperiam et rerum commodi natus maxime dolores, id necessitatibus repudiandae deleniti!

---

<a id="usage"></a> 
## Usage 
${response.usage}
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vero perferendis, sunt maiores aspernatur inventore minus accusamus facilis similique reprehenderit! Delectus, ducimus enim. Maxime, praesentium necessitatibus expedita molestiae suscipit alias?
Porro reprehenderit dolorem atque odit, architecto voluptatibus. Fugit atque doloremque sapiente rerum accusamus nihil adipisci dicta voluptates velit incidunt ex facere, minima aliquam quidem laudantium laborum vero quibusdam vitae asperiores?
Inventore, fuga. Odit possimus fuga obcaecati quia id numquam nostrum accusamus iusto, perferendis perspiciatis impedit labore et eveniet, quibusdam natus laudantium unde quae delectus blanditiis doloribus velit! Quos, eligendi voluptatem!
Quod explicabo, eveniet maiores praesentium nemo, neque et, aliquid quae voluptatem cumque asperiores? Accusamus culpa voluptate, reiciendis, itaque vel excepturi animi perferendis laborum facere odio quae temporibus, eum obcaecati. Veniam?
Soluta sunt quasi itaque eum mollitia. Iusto praesentium soluta explicabo eum nobis! Ducimus, obcaecati nostrum? Doloribus hic voluptatum earum laudantium quos, quidem expedita doloremque id maiores odio a voluptates dolore?
Excepturi mollitia dolorum inventore cupiditate neque sit distinctio enim ipsum natus qui nesciunt animi velit, quisquam sequi doloremque necessitatibus nulla corporis sed nam! Harum, sit. Nihil at ut aliquam facere.
Iste at laborum, velit ullam sapiente corrupti rerum. Consequatur eaque nihil maxime quaerat dicta nesciunt labore inventore quam nulla repudiandae ipsam molestias qui ex odit, dolorem quod quo sint commodi.
Repudiandae error dolor, vitae totam laborum accusamus, quo fugiat dolorum officia libero temporibus fuga sint cumque quibusdam nam. Amet iure dolor ad consectetur voluptate porro possimus quidem nisi quas dolores.
A rerum quasi placeat? Aperiam voluptatum, odio minus eius id aut consequuntur consequatur iusto non dignissimos ab doloremque dolore fugiat molestiae enim nihil maiores voluptates itaque cumque? Natus, blanditiis reprehenderit.
Voluptatum voluptate architecto accusamus aliquam dignissimos, quaerat odio natus necessitatibus vel sunt laboriosam fuga neque optio ut, eius praesentium? Explicabo corrupti dolorem exercitationem officia, deserunt voluptatibus laboriosam possimus dolores dolore.
Quo temporibus quaerat dolorum, blanditiis amet magnam, earum molestiae harum velit sequi voluptatum laudantium tempore ipsum nam accusamus sapiente, dolorem dolores distinctio non quidem. Nihil nobis dicta saepe eligendi sint!
Doloremque expedita laudantium laborum repellat cupiditate adipisci sequi voluptas labore aspernatur? Odio iste numquam harum ex. Modi saepe aliquam, amet culpa illum fugit. Iste error eius officiis recusandae itaque facere!
Velit rem quibusdam, saepe sint unde aut beatae maiores facere vitae quo delectus sequi impedit nobis illum dolores dolor ad aperiam voluptatibus debitis, voluptatum totam illo? Eaque autem blanditiis consequatur.
Nostrum veritatis sapiente quas corporis dolorem. Ipsa, in similique! Placeat animi, commodi harum iste odit perferendis quaerat magnam atque cum quisquam natus voluptas quis rerum iure suscipit illo ducimus praesentium.
Maxime molestias facilis amet maiores deleniti dignissimos aspernatur, sapiente vel officia odit ipsum, accusamus adipisci voluptatibus, assumenda obcaecati natus quaerat sequi? Aliquid, ullam. Architecto pariatur nobis, inventore nulla autem nostrum!
Molestiae doloribus, ipsa nam fugit nostrum ea iste dolor saepe pariatur facilis, repellat ab molestias fugiat eligendi culpa animi soluta illo corrupti, voluptatibus distinctio reprehenderit! Delectus numquam unde aut eum.
Beatae, omnis. Sed quia eligendi, perferendis asperiores qui voluptatem animi laudantium! Corrupti, accusamus. Quam, soluta quaerat nobis laborum nisi consequatur vero, dolorem distinctio aliquam temporibus non odit, atque debitis excepturi.
Ducimus numquam modi minima, voluptates, velit nobis animi quo similique quibusdam nemo veniam iste provident amet laudantium quia tempora! Nemo quis eligendi eaque maxime quidem optio consequatur culpa. Quas, itaque.
Aperiam voluptas facere vel eveniet ex quod eligendi incidunt non, molestiae, molestias numquam dicta dolores? Culpa et ab esse quos vel. Ea quos tempore unde dicta sed illo animi explicabo.
Cumque, quaerat dolorum, omnis, tempore quas error mollitia provident quod ab recusandae vero doloremque dolore obcaecati architecto molestias. Odio aperiam et rerum commodi natus maxime dolores, id necessitatibus repudiandae deleniti!

---

<a id="contrib"></a> 
## Contributing 
${response.contrib}
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vero perferendis, sunt maiores aspernatur inventore minus accusamus facilis similique reprehenderit! Delectus, ducimus enim. Maxime, praesentium necessitatibus expedita molestiae suscipit alias?
Porro reprehenderit dolorem atque odit, architecto voluptatibus. Fugit atque doloremque sapiente rerum accusamus nihil adipisci dicta voluptates velit incidunt ex facere, minima aliquam quidem laudantium laborum vero quibusdam vitae asperiores?
Inventore, fuga. Odit possimus fuga obcaecati quia id numquam nostrum accusamus iusto, perferendis perspiciatis impedit labore et eveniet, quibusdam natus laudantium unde quae delectus blanditiis doloribus velit! Quos, eligendi voluptatem!
Quod explicabo, eveniet maiores praesentium nemo, neque et, aliquid quae voluptatem cumque asperiores? Accusamus culpa voluptate, reiciendis, itaque vel excepturi animi perferendis laborum facere odio quae temporibus, eum obcaecati. Veniam?
Soluta sunt quasi itaque eum mollitia. Iusto praesentium soluta explicabo eum nobis! Ducimus, obcaecati nostrum? Doloribus hic voluptatum earum laudantium quos, quidem expedita doloremque id maiores odio a voluptates dolore?
Excepturi mollitia dolorum inventore cupiditate neque sit distinctio enim ipsum natus qui nesciunt animi velit, quisquam sequi doloremque necessitatibus nulla corporis sed nam! Harum, sit. Nihil at ut aliquam facere.
Iste at laborum, velit ullam sapiente corrupti rerum. Consequatur eaque nihil maxime quaerat dicta nesciunt labore inventore quam nulla repudiandae ipsam molestias qui ex odit, dolorem quod quo sint commodi.
Repudiandae error dolor, vitae totam laborum accusamus, quo fugiat dolorum officia libero temporibus fuga sint cumque quibusdam nam. Amet iure dolor ad consectetur voluptate porro possimus quidem nisi quas dolores.
A rerum quasi placeat? Aperiam voluptatum, odio minus eius id aut consequuntur consequatur iusto non dignissimos ab doloremque dolore fugiat molestiae enim nihil maiores voluptates itaque cumque? Natus, blanditiis reprehenderit.
Voluptatum voluptate architecto accusamus aliquam dignissimos, quaerat odio natus necessitatibus vel sunt laboriosam fuga neque optio ut, eius praesentium? Explicabo corrupti dolorem exercitationem officia, deserunt voluptatibus laboriosam possimus dolores dolore.
Quo temporibus quaerat dolorum, blanditiis amet magnam, earum molestiae harum velit sequi voluptatum laudantium tempore ipsum nam accusamus sapiente, dolorem dolores distinctio non quidem. Nihil nobis dicta saepe eligendi sint!
Doloremque expedita laudantium laborum repellat cupiditate adipisci sequi voluptas labore aspernatur? Odio iste numquam harum ex. Modi saepe aliquam, amet culpa illum fugit. Iste error eius officiis recusandae itaque facere!
Velit rem quibusdam, saepe sint unde aut beatae maiores facere vitae quo delectus sequi impedit nobis illum dolores dolor ad aperiam voluptatibus debitis, voluptatum totam illo? Eaque autem blanditiis consequatur.
Nostrum veritatis sapiente quas corporis dolorem. Ipsa, in similique! Placeat animi, commodi harum iste odit perferendis quaerat magnam atque cum quisquam natus voluptas quis rerum iure suscipit illo ducimus praesentium.
Maxime molestias facilis amet maiores deleniti dignissimos aspernatur, sapiente vel officia odit ipsum, accusamus adipisci voluptatibus, assumenda obcaecati natus quaerat sequi? Aliquid, ullam. Architecto pariatur nobis, inventore nulla autem nostrum!
Molestiae doloribus, ipsa nam fugit nostrum ea iste dolor saepe pariatur facilis, repellat ab molestias fugiat eligendi culpa animi soluta illo corrupti, voluptatibus distinctio reprehenderit! Delectus numquam unde aut eum.
Beatae, omnis. Sed quia eligendi, perferendis asperiores qui voluptatem animi laudantium! Corrupti, accusamus. Quam, soluta quaerat nobis laborum nisi consequatur vero, dolorem distinctio aliquam temporibus non odit, atque debitis excepturi.
Ducimus numquam modi minima, voluptates, velit nobis animi quo similique quibusdam nemo veniam iste provident amet laudantium quia tempora! Nemo quis eligendi eaque maxime quidem optio consequatur culpa. Quas, itaque.
Aperiam voluptas facere vel eveniet ex quod eligendi incidunt non, molestiae, molestias numquam dicta dolores? Culpa et ab esse quos vel. Ea quos tempore unde dicta sed illo animi explicabo.
Cumque, quaerat dolorum, omnis, tempore quas error mollitia provident quod ab recusandae vero doloremque dolore obcaecati architecto molestias. Odio aperiam et rerum commodi natus maxime dolores, id necessitatibus repudiandae deleniti!

---

<a id="testing"></a> 
## Testing 
${response.test}
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vero perferendis, sunt maiores aspernatur inventore minus accusamus facilis similique reprehenderit! Delectus, ducimus enim. Maxime, praesentium necessitatibus expedita molestiae suscipit alias?
Porro reprehenderit dolorem atque odit, architecto voluptatibus. Fugit atque doloremque sapiente rerum accusamus nihil adipisci dicta voluptates velit incidunt ex facere, minima aliquam quidem laudantium laborum vero quibusdam vitae asperiores?
Inventore, fuga. Odit possimus fuga obcaecati quia id numquam nostrum accusamus iusto, perferendis perspiciatis impedit labore et eveniet, quibusdam natus laudantium unde quae delectus blanditiis doloribus velit! Quos, eligendi voluptatem!
Quod explicabo, eveniet maiores praesentium nemo, neque et, aliquid quae voluptatem cumque asperiores? Accusamus culpa voluptate, reiciendis, itaque vel excepturi animi perferendis laborum facere odio quae temporibus, eum obcaecati. Veniam?
Soluta sunt quasi itaque eum mollitia. Iusto praesentium soluta explicabo eum nobis! Ducimus, obcaecati nostrum? Doloribus hic voluptatum earum laudantium quos, quidem expedita doloremque id maiores odio a voluptates dolore?
Excepturi mollitia dolorum inventore cupiditate neque sit distinctio enim ipsum natus qui nesciunt animi velit, quisquam sequi doloremque necessitatibus nulla corporis sed nam! Harum, sit. Nihil at ut aliquam facere.
Iste at laborum, velit ullam sapiente corrupti rerum. Consequatur eaque nihil maxime quaerat dicta nesciunt labore inventore quam nulla repudiandae ipsam molestias qui ex odit, dolorem quod quo sint commodi.
Repudiandae error dolor, vitae totam laborum accusamus, quo fugiat dolorum officia libero temporibus fuga sint cumque quibusdam nam. Amet iure dolor ad consectetur voluptate porro possimus quidem nisi quas dolores.
A rerum quasi placeat? Aperiam voluptatum, odio minus eius id aut consequuntur consequatur iusto non dignissimos ab doloremque dolore fugiat molestiae enim nihil maiores voluptates itaque cumque? Natus, blanditiis reprehenderit.
Voluptatum voluptate architecto accusamus aliquam dignissimos, quaerat odio natus necessitatibus vel sunt laboriosam fuga neque optio ut, eius praesentium? Explicabo corrupti dolorem exercitationem officia, deserunt voluptatibus laboriosam possimus dolores dolore.
Quo temporibus quaerat dolorum, blanditiis amet magnam, earum molestiae harum velit sequi voluptatum laudantium tempore ipsum nam accusamus sapiente, dolorem dolores distinctio non quidem. Nihil nobis dicta saepe eligendi sint!
Doloremque expedita laudantium laborum repellat cupiditate adipisci sequi voluptas labore aspernatur? Odio iste numquam harum ex. Modi saepe aliquam, amet culpa illum fugit. Iste error eius officiis recusandae itaque facere!
Velit rem quibusdam, saepe sint unde aut beatae maiores facere vitae quo delectus sequi impedit nobis illum dolores dolor ad aperiam voluptatibus debitis, voluptatum totam illo? Eaque autem blanditiis consequatur.
Nostrum veritatis sapiente quas corporis dolorem. Ipsa, in similique! Placeat animi, commodi harum iste odit perferendis quaerat magnam atque cum quisquam natus voluptas quis rerum iure suscipit illo ducimus praesentium.
Maxime molestias facilis amet maiores deleniti dignissimos aspernatur, sapiente vel officia odit ipsum, accusamus adipisci voluptatibus, assumenda obcaecati natus quaerat sequi? Aliquid, ullam. Architecto pariatur nobis, inventore nulla autem nostrum!
Molestiae doloribus, ipsa nam fugit nostrum ea iste dolor saepe pariatur facilis, repellat ab molestias fugiat eligendi culpa animi soluta illo corrupti, voluptatibus distinctio reprehenderit! Delectus numquam unde aut eum.
Beatae, omnis. Sed quia eligendi, perferendis asperiores qui voluptatem animi laudantium! Corrupti, accusamus. Quam, soluta quaerat nobis laborum nisi consequatur vero, dolorem distinctio aliquam temporibus non odit, atque debitis excepturi.
Ducimus numquam modi minima, voluptates, velit nobis animi quo similique quibusdam nemo veniam iste provident amet laudantium quia tempora! Nemo quis eligendi eaque maxime quidem optio consequatur culpa. Quas, itaque.
Aperiam voluptas facere vel eveniet ex quod eligendi incidunt non, molestiae, molestias numquam dicta dolores? Culpa et ab esse quos vel. Ea quos tempore unde dicta sed illo animi explicabo.
Cumque, quaerat dolorum, omnis, tempore quas error mollitia provident quod ab recusandae vero doloremque dolore obcaecati architecto molestias. Odio aperiam et rerum commodi natus maxime dolores, id necessitatibus repudiandae deleniti!

---

<a id="license"></a>
## License
${renderLicenseSection(response.license)}
${renderLicenseLink(response.license)}

---

<a id="ques"></a> 
## Questions 
If you have any questions I can be found on GitHub at github.com/${response.github} or you can reach out to me via email at ${response.email}.

`;
}

module.exports = generateMarkdown;
