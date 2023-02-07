"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[300],{9378:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var o=n(2791),r=n(1523),a=n(6842),i=n(184),s=function(e){var t=e.data;return(0,i.jsx)("article",{className:"degree-container",children:(0,i.jsxs)("header",{children:[(0,i.jsx)("h4",{className:"degree",children:t.degree}),(0,i.jsxs)("p",{className:"school",children:[(0,i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"education",children:[(0,i.jsx)("div",{className:"link-to",id:"education"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,i.jsx)(s,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return(0,i.jsxs)("article",{className:"jobs-container",children:[(0,i.jsxs)("header",{children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,i.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,i.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,i.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"experience",children:[(0,i.jsx)("div",{className:"link-to",id:"experience"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,i.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;var m=n(9142);function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(0,m.Z)(o.key),o)}}var f=n(9611);function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var g=n(1002);function b(e,t){if(t&&("object"===(0,g.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return b(this,n)}}var j=n(4942),k=n(1413),x=function(e){var t=e.handleClick,n=e.active,o=e.label;return(0,i.jsx)("button",{className:"skillbutton ".concat(n[o]?"skillbutton-active":""),type:"button",onClick:function(){return t(o)},children:o})},w=function(e){var t=e.data,n=e.categories,o=t.category,r=t.competency,a=t.title,s={background:n.filter((function(e){return o.includes(e.name)})).map((function(e){return e.color}))[0]},c=(0,k.Z)((0,k.Z)({},s),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return(0,i.jsxs)("div",{className:"skillbar clearfix",children:[(0,i.jsx)("div",{className:"skillbar-title",style:s,children:(0,i.jsx)("span",{children:a})}),(0,i.jsx)("div",{className:"skillbar-bar",style:c}),(0,i.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};w.defaultProps={categories:[]};var S=w,N=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,k.Z)((0,k.Z)({},e),{},(0,j.Z)({},t,!1))}),{All:!0}),skills:n}},P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,f.Z)(e,t)}(a,e);var t,n,o,r=v(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=r.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,o){return(0,k.Z)((0,k.Z)({},n),{},(0,j.Z)({},o,e===o&&!t.buttons[o]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=N({categories:e.categories,skills:e.skills}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,i.jsx)(S,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,i.jsx)(x,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,i.jsxs)("div",{className:"skills",children:[(0,i.jsx)("div",{className:"link-to",id:"skills"}),(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h3",{children:"Skills"}),(0,i.jsx)("p",{children:"Here is a *mostly* honest overview of my skills ranked by how skilled I deem myself to be at them. A higher number generally means that more than just being knowledgable, I am comfortable using it in a professional setting as well as more adept at picking up new skills related to it. Sortable by common categories."})]}),(0,i.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,i.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&h(t.prototype,n),o&&h(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.Component);P.defaultProps={skills:[],categories:[]};var O=P,C=function(){return(0,i.jsxs)("div",{className:"references",children:[(0,i.jsx)("div",{className:"link-to",id:"references"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)(r.rU,{to:"/contact",children:(0,i.jsx)("h3",{children:"References are available upon request"})})})]})},T=function(e){var t=e.data;return(0,i.jsx)("article",{className:"degree-container",children:(0,i.jsxs)("header",{children:[(0,i.jsx)("h4",{className:"degree",children:(0,i.jsx)("b",{children:t.degree})}),(0,i.jsxs)("p",{className:"school",children:[(0,i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},L=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"education",children:[(0,i.jsx)("div",{className:"link-to",id:"awards"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Awards & Scholarships"})}),t.map((function(e){return(0,i.jsx)(T,{data:e},e.school)}))]})};L.defaultProps={data:[]};var A=L,D=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"experience",children:[(0,i.jsx)("div",{className:"link-to",id:"leadership"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Leadership Experience"})}),t.map((function(e){return(0,i.jsx)(u,{data:e},e.company)}))]})};D.defaultProps={data:[]};var E=D,M=[{school:"Hong Kong University of Science and Technology",degree:"B.Sc. Physics",link:"https://hkust.edu.hk",year:2025},{school:"West Island School",degree:"International Baccalaureate",link:"https://wis.edu.hk",year:2021}],Z=[{company:"Project Melo",position:"Fellow",link:"https://www.projectmelo.com/",daterange:"December 2022 - Present",points:["Working with leading CEOs and industry leaders to empower youth and drive positive social impact in Hong Kong.","Focused on forging inter-generational trust through authentic communication, co-creation, and joint-discovery."]},{company:"Tramplus x MIT Node",position:"Freelance Tutor",link:"https://www.tramplus.net/",daterange:"December 2022 - Present",points:["Working with the Massachusetts Institute of Technology Hong Kong Innovation Node and Tramplus on a co-developed STEAM education program promoting sustainability and circular design."]},{company:"Laboratory for Space Research (HKU)",position:"Full-Time Research Assistant",link:"https://www.lsr.hku.hk/",daterange:"June 2021 - August 2022",points:["Working with an international team of over a dozen experienced professionals and researchers to prototype, simulate, and launch a satellite to space operating in the MeV-regime","Analyzed, debugged, and modified Python and Bash scripts for running mass simulations on Fermi-GBM database increasing efficiency thousandfold","Independently setup departmental Linux computer, including deploying and employing MEGALib toolkit to run preliminary satellite simulations","Setup and managed system administration duties through remote and on-site problem-solving on departmental Linux computer from 2020 to 2021 as an Undergraduate Affiliate","Specialized in MEGALib Simulations, Python and Bash scripting, and Linux Architecture","Promoted from Intern to Undergraduate Affiliate to full-time Research Assistant"]},{company:"Cyclopes Education",position:"Exam Analyst",link:"https://www.linkedin.com/company/cyclopeseducation/",daterange:"March 2022 - Present",points:["Working with a team of peers to assist a big-data and machine-learning driven student consultation company","Tools used include Microsoft Office Suite & Teams, Python, and LaTeX"]},{company:"Bloom Standard",position:"Software Engineering Intern",link:"https://www.bloomstandard.com/",daterange:"February 2016 - March 2016",points:["Working hands-on with the CTO to develop a stable prototype of user-driven and affordable ultrasound technology","Worked with CTO to develop a fully-functional prototype of medical handheld ultrasound device","Deployed and configured Python-based TensorFlow neural network machine learning algorithm to Nvidia GPU driven supercomputer from HK AI Labs","Effectively performed system administration duties in setting up and managing remote access through VNC and RaspberryPi on Linux supercomputer","Specializing in Python, Linux, RaspberriPi, Git, TensorFlow, VNC, and Docker"]},{company:"Discord",position:"Community Manager",link:"https://discord.com",daterange:"2018 - December 2021",points:["Working professionally with Discord and Keywords Studio in community management to build safe and thriving online communities through team and bot management","Clientele includes NetEase, Warner Bros, Skullcandy, Webtoon, and more"]}],W=n(907);var R=n(181);var F,I=[{title:"Python",competency:5,category:["Languages","Python"]},{title:"Lua",competency:4,category:["Languages"]},{title:"PHP",competency:3,category:["Languages","Web Development"]},{title:"Javascript",competency:3,category:["Languages","Web Development"]},{title:"HTML + CSS",competency:4,category:["Languages","Web Development"]},{title:"LaTeX",competency:5,category:["Languages"]},{title:"C(++)",competency:3,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"Bash/Shell",competency:4,category:["Languages","Tools"]},{title:"Linux",competency:5,category:["Tools"]},{title:"Docker",competency:3,category:["Tools"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"MySQL/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"phpMyAdmin",competency:3,category:["Web Development","Databases"]},{title:"Git",competency:4,category:["Tools"]},{title:"Google Cloud Compute",competency:4,category:["Tools","Web Development"]},{title:"Numpy",competency:4,category:["Data Science","Python"]},{title:"TensorFlow + Keras",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:4,category:["Python","Data Science"]},{title:"Pandas",competency:5,category:["Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Science","Python"]},{title:"Scikit-Learn",competency:3,category:["Data Science","Python"]}].map((function(e){return(0,k.Z)((0,k.Z)({},e),{},{category:e.category.sort()})})),U=["#694053","#0E4A59","#6E6362","#54525B","#4CAE7A","#C78283"],B=(F=new Set(I.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,W.Z)(e)}(F)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(F)||(0,R.Z)(F)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:U[t]}})),H=[{school:"Hong Kong University of Science and Technology",degree:"Exceptional Grade Scholarship",link:"https://hkust.edu.hk/",year:2021},{school:"United Kingdom Mathematics Trust",degree:"Senior Challenge Gold Award",link:"https://www.ukmt.org.uk/",year:2020}],G=[{company:"Google Developer Student Club",position:"Tech Lead",link:"https://gdsc.community.dev/the-hong-kong-university-of-science-and-technology/",daterange:"September 2022 - Present",points:["Organised and supervised numerous events promoting entrepreneurship and technology at HKUST","Frequently managed teams of 5-10 people","Organised events focusing on a myriad of of technical topics ranging from Google technologies to general tech"]},{company:"Model United Nations",position:"Lead & Chair",daterange:"September 2017 - September 2021",points:["Worked with a team of four peers to lead our school's largest club","With my coleads, organised and hosted WISMUN, an MUN conference with hundreds of participants during the COVID-19 Pandemic","In charge of education nd onboarding new junior team members from 2018 to 2020","Performing chairing duties to supervise and prepare senior team for competitions (2020-2021)","Selected to chair the largest committee (NATO) at the largest MUN conference in Hong Kong (HKMUN)","Selected among peers to attend our school's first ever international MUN conference"]},{company:"Digital Leaders",position:"Senior Lead",daterange:"September 2015 - July 2021",points:["Working with a team of peers to promote safe and effective use of technology within our school","Organised and taught primary school students, teaching them basic tech and presentation skills","In charge of offering presentations to parents on promoting safe tech-usage at home for their children","Managed teams of 3-10 students to host numerous inter and intra-school tech-related competitions"]},{company:"Cyber-CTF Team",position:"Founder & Lead",daterange:"September 2018 - July 2020",points:["Found and managed club hosting internal cybersecurity CTF competitions and challenges within our school to prepare a team of 4 students for inter-school CTF competitions"]},{company:"Hackathon Club",position:"Founder & Lead",daterange:"September 2018 - July 2020",points:["Found and managed club hosting internal hackathon to prepare a team of 15 students for the Greater China Coding Competition & Canadian Coding Competition"]},{company:"VEX Robotics",position:"Lead",daterange:"September 2017 - July 2015",points:["Taught and prepared a team of 5 select students to participate in inter-school VEX Robotics competitions"]}],K=["Education","Experience","Skills","Awards","Leadership","References"],J=function(){return(0,i.jsx)(a.Z,{title:"Resume",description:"Aditya Mangla's Resume",children:(0,i.jsxs)("article",{className:"post",id:"resume",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h2",{"data-testid":"heading",children:(0,i.jsx)(r.rU,{to:"resume",children:"Resume"})}),(0,i.jsx)("div",{className:"link-container",children:K.map((function(e){return(0,i.jsx)("h4",{children:(0,i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,i.jsx)(l,{data:M}),(0,i.jsx)(p,{data:Z}),(0,i.jsx)(O,{skills:I,categories:B}),(0,i.jsx)(A,{data:H}),(0,i.jsx)(E,{data:G}),(0,i.jsx)(C,{})]})})}},4942:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(9142);function r(e,t,n){return(t=(0,o.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(4942);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},9142:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(1002);function r(e){var t=function(e,t){if("object"!==(0,o.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==(0,o.Z)(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,o.Z)(t)?t:String(t)}},1002:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=300.1b8b3e4e.chunk.js.map