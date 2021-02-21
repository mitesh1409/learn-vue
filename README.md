# Learn Vue.js

Vue.js learning guide with examples.  
Covers Vue.js 2.x  


![Vue.js Logo](images/vuejs-logo-small.png)


## 1 - Introduction

#### 1.1 What is Vue.js?
A JavaScript Framework for building front-end apps/user interfaces.  
The core library is focused on the "view layer" only.  

Vue.js is a “Progressive Framework”. It is incrementally adoptable.  

It means if you have an existing server side application, you can plug Vue.js into one part of your application and then gradually implement into other areas of your application as you go. You can start simple and then progressively add tools and features that you need to build a complex web application.  

It fits nicely with other libraries and existing projects.  

Yuxi (Evan) You is the creator and project lead of Vue.js.  

Reference Link: [Vue.js Guide](https://vuejs.org/v2/guide/)  

#### 1.2 Vue.js Ecosystem

| Project                                                                                              | Description                                                                                             |
|------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [Devtools](https://github.com/vuejs/vue-devtools)                                                    | Browser devtools extension for debugging Vue.js application                                             |
| [Vue CLI](https://cli.vuejs.org/)                                                                    | It provides a full system for rapid Vue.js development.                                                 |
| [Vue Loder](https://vue-loader.vuejs.org/#what-is-vue-loader)                                        | Loader for webpack that allows you to author Vue.js components in SFCs (Single File Components) format. |
| [Vue Router](https://router.vuejs.org/)                                                              | The official router for Vue.js.                                                                         |
| [Vuex](https://vuex.vuejs.org/)                                                                      | Vue.js’s own state management pattern + library.                                                        |
| [Vue Server Side Renderer](https://ssr.vuejs.org/)                                                   | It is possible to render components into HTML on server side and send them directly to the client.      |
| [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)                            | VS Code Extension                                                                                       |
| [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets) | VS Code Extension                                                                                       |

#### 1.3 Vue.js Prerequisites

Basic knowledge of HTML, CSS & JavaScript.  

---

## 2 - Installation

Checkout 2-installation branch:  
`git fetch && git checkout -b 2-installation origin/2-installation`

Vue.js can be installed in the following ways:

- Using direct `<script>` include  
  Simply download and include Vue.js with a script tag.  
  For example,  
  `<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>`  

  - Development Version (with full warnings + debug mode, suitable for development)  
  - Production Version (warnings stripped, optimized for production)  

- Using NPM  
  `npm install vue`  

- Using Vue CLI  
  `vue create <project-name>`  

**After installation Vue is available as global variable "Vue"**  

Reference Link: [Vue.js 2.x Installation](https://vuejs.org/v2/guide/installation.html)  

---

## 3 - Vue Instance

Checkout 3-vue-instance branch:  
`git fetch && git checkout -b 3-vue-instance origin/3-vue-instance`  

- Create Vue instance  
  `new Vue({})`  

- Vue instance is the “Root” of every Vue application  

- Plugging into an element in the DOM  
  Set "el" in the options  

- Set instance data  
  Set "data" in the options  

- Using “Mustache” `{{ }}` syntax to display data  
  We can use expressions inside `{{ }}`  

- One way data flow  
  From instance data to template  

- Vue is “Reactive”  
  Data is linked to every place in the template where it is referenced/used.  
  So whenever data changes, template is updated automatically.  

---

## License
[MIT](https://opensource.org/licenses/MIT)  
