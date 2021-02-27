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

## 4 - Attribute Binding

Checkout 4-attribute-binding branch:  
`git fetch && git checkout -b 4-attribute-binding origin/4-attribute-binding`  

- Data can be bound to HTML attributes  
  `:src`  
  `:alt`  
  `:title`  
  `:class`  
  `:href`  
  `:style`  
  etc.  

- Syntax is `v-bind:` or use `:` shorthand  

- This is "one way" data flow  
  From instance data to template  

---

## 5 - Conditional Rendering

Checkout 5-conditional-rendering branch:  
`git fetch && git checkout -b 5-conditional-rendering origin/5-conditional-rendering`  

- Vue directives to conditionally render elements.  
  - `v-if`  
  - `v-else-if`  
  - `v-else`  
  - `v-show`  

- There is an expression inside directive's quote which evaluates to true/false.  
  Based on this element is rendered.  

- `v-show` only toggles visibility of an element instead of inserting/removing it from the DOM.  
  With `v-show` the element is always rendered with visibility on or off.  
  Use `v-show` if you need to toggle something very often.  

---

## 6 - List Rendering

Checkout 6-list-rendering branch:  
`git fetch && git checkout -b 6-list-rendering origin/6-list-rendering`  

- `v-for` directive is used to iterate over an array of items.
  For example, `v-for="item in items"`

- We can iterate over an array of objects as well.
  Using dot `.` notation we can access object properties/attributes.

- It is recommended to provide a key attribute with `v-for` whenever possible.
  This gives a unique key to each rendered element.

- Use string or numeric values for `v-for` keys.

- Using `v-if` and `v-for` together is not recommended.

---

## 7 - Event Handling

Checkout 7-event-handling branch:  
`git fetch && git checkout -b 7-event-handling origin/7-event-handling`  

- `v-on` directive is used to listen to DOM events and run JavaScript when they are triggered.  
  For example, `v-on:submit`, `v-on:click`, `v-on:mouseover` etc.  

- The shorthand for `v-on` is `@`  

- We can specify any type of DOM event to listen for:  
  - click  
  - submit  
  - mouseover  
  - keyup  
  etc.  

---

## 8 - Class and Style Binding

Checkout 8-class-and-style-binding branch:  
`git fetch && git checkout -b 8-class-and-style-binding origin/8-class-and-style-binding`  

- Data can be bound to an element's `style`/`class` attribute.  

- Expressions can be used to evaluate whether a class/CSS will be applied or not.  

- Examples  
  1. Style Binding  
    `:style="{ backgroundColor: variant.color }` evaluates to `style="{ background-color: grey }"`  

  2. Style Binding using an Object  
    `:style="someStyleObject"` where `someStyleObject` is set in the `data` as follows  
      ```
      data: {  
        someStyleObject: {  
          color: 'red',  
          font-size: '15px'  
        }  
      }  
      ```
      this evaluates to  
      `style="{color: red; font-size: '15px'}"`  

  3. Style Binding using an Array  
    We can bind an array of style objects, to do this we can write `:style=[styleObject1, styleObject2]`  

  4. Class Binding  
    `:class="{ disabledButton: !inStock }` evaluates to `class="disabledButton"` when `inStock` is `false`  
    `:class="{ active: activeClass, 'text-danger': errorClass }"`  with the following data
      ```
      data: {  
        activeClass: true,  
        errorClass: false  
      }  
      ```
      this evaluates to  
      `class="active"`  

  5. Class Binding using an Object  
    `:class="someClassObject"` where `someClassObject` is set in the `data` as follows  
      ```
      data: {  
        someClassObject: {  
          active: true,  
          'text-danger': false  
        }  
      }  
      ```
      this evaluates to  
      `class="active"`  

  6. Class Binding using an Array  
    We can bind an array of classes, to do this we can write `:class="[ activeClass, errorClass ]"`  
    with the following data  
      ```
      data: {  
        activeClass: 'active',  
        errorClass: 'text-danger'  
      }  
      ```
      this evaluates to  
      `class="active text-danger"`  

---

## License
[MIT](https://opensource.org/licenses/MIT)  
