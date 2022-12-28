"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5008],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),i=n(51048),o=n(33609),s=n(1943),p=n(72957);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:i,values:c,groupId:m,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,o.l)(k,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,s.U)(),[v,S]=(0,r.useState)(b),_=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=m){const e=h[m];null!=e&&e!==v&&k.some((t=>t.value===e))&&S(e)}const C=e=>{const t=e.currentTarget,n=_.indexOf(t),a=k[n].value;a!==v&&(w(t),S(a),null!=m&&y(m,String(a)))},T=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=_.indexOf(e.currentTarget)+1;t=_[n]??_[0];break}case"ArrowLeft":{const n=_.indexOf(e.currentTarget)-1;t=_[n]??_[_.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},g)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>_.push(e),onKeyDown:T,onClick:C},i,{className:(0,l.Z)("tabs__item",u,i?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},21465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(34259),i=n(18679);const o={title:"Salesforce",slug:"/generated/ingestion/sources/salesforce",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/salesforce.md"},s="Salesforce",p={unversionedId:"docs/generated/ingestion/sources/salesforce",id:"docs/generated/ingestion/sources/salesforce",title:"Salesforce",description:"Module salesforce",source:"@site/genDocs/docs/generated/ingestion/sources/salesforce.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/salesforce",permalink:"/docs/generated/ingestion/sources/salesforce",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/salesforce.md",tags:[],version:"current",frontMatter:{title:"Salesforce",slug:"/generated/ingestion/sources/salesforce",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/salesforce.md"},sidebar:"overviewSidebar",previous:{title:"SageMaker",permalink:"/docs/generated/ingestion/sources/sagemaker"},next:{title:"Snowflake",permalink:"/docs/generated/ingestion/sources/snowflake"}},d={},u=[{value:"Module <code>salesforce</code>",id:"module-salesforce",level:2},{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Integration Details",id:"integration-details",level:2},{value:"REST API Resources used in this integration",id:"rest-api-resources-used-in-this-integration",level:3},{value:"Concept Mapping",id:"concept-mapping",level:3},{value:"Caveats",id:"caveats",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3},{value:"Questions",id:"questions",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"salesforce"},"Salesforce"),(0,r.kt)("h2",{id:"module-salesforce"},"Module ",(0,r.kt)("inlineCode",{parentName:"h2"},"salesforce")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"})),(0,r.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capability"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/docs/dev_guides/sql_profiles"},"Data Profiling")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Only table level profiling is supported via ",(0,r.kt)("inlineCode",{parentName:"td"},"profiling.enabled")," config field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Detect Deleted Entities")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported yet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/domains"},"Domains")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported via the ",(0,r.kt)("inlineCode",{parentName:"td"},"domain")," config field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"Platform Instance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be equivalent to Salesforce organization")))),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"In order to ingest metadata from Salesforce, you will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Salesforce username, password, ",(0,r.kt)("a",{parentName:"li",href:"https://developer.Salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_concepts_security.htm"},"security token")," OR "),(0,r.kt)("li",{parentName:"ul"},"Salesforce instance url and access token/session id (suitable for one-shot ingestion only, as access token typically expires after 2 hours of inactivity)")),(0,r.kt)("p",null,"The account used to access Salesforce requires the following permissions for this integration to work:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View Setup and Configuration"),(0,r.kt)("li",{parentName:"ul"},"View All Data")),(0,r.kt)("h2",{id:"integration-details"},"Integration Details"),(0,r.kt)("p",null,"This plugin extracts Salesforce Standard and Custom Objects and their details (fields, record count, etc) from a Salesforce instance.\nPython library ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/simple-salesforce/"},"simple-salesforce")," is used for authenticating and calling  ",(0,r.kt)("a",{parentName:"p",href:"https://developer.Salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm"},"Salesforce REST API")," to retrive details from Salesforce instance."),(0,r.kt)("h3",{id:"rest-api-resources-used-in-this-integration"},"REST API Resources used in this integration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.Salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_versions.htm"},"Versions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.salesforce.com/docs/atlas.en-us.api_tooling.meta/api_tooling/intro_rest_resources.htm"},"Tooling API Query")," on objects EntityDefinition, EntityParticle, CustomObject, CustomField"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.Salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_record_count.htm"},"Record Count"))),(0,r.kt)("h3",{id:"concept-mapping"},"Concept Mapping"),(0,r.kt)("p",null,"This ingestion source maps the following Source System Concepts to DataHub Concepts:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Source Concept"),(0,r.kt)("th",{parentName:"tr",align:null},"DataHub Concept"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Salesforce")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataplatform"},"Data Platform")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Standard Object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataset"},"Dataset")),(0,r.kt)("td",{parentName:"tr",align:null},'subtype "Standard Object"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom Object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataset"},"Dataset")),(0,r.kt)("td",{parentName:"tr",align:null},'subtype "Custom Object"')))),(0,r.kt)("h3",{id:"caveats"},"Caveats"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This connector has only been tested with Salesforce Developer Edition."),(0,r.kt)("li",{parentName:"ul"},"This connector only supports table level profiling (Row and Column counts) as of now. Row counts are approximate as returned by ",(0,r.kt)("a",{parentName:"li",href:"https://developer.Salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_record_count.htm"},"Salesforce RecordCount REST API"),"."),(0,r.kt)("li",{parentName:"ul"},"This integration does not support ingesting Salesforce ",(0,r.kt)("a",{parentName:"li",href:"https://developer.Salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_external_objects.htm"},"External Objects"))),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[salesforce]'\n")),(0,r.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline_name: my_salesforce_pipeline\nsource:\n  type: "salesforce"\n  config:\n    instance_url: "https://mydomain.my.salesforce.com/"\n    username: user@company\n    password: password_for_user\n    security_token: security_token_for_user\n    platform_instance: mydomain-dev-ed\n    domain:\n      sales:\n        allow:\n          - "Opportunity$"\n          - "Lead$"\n\n    object_pattern:\n      allow:\n        - "Account$"\n        - "Opportunity$"\n        - "Lead$"\n\nsink:\n  type: "datahub-rest"\n  config:\n    server: "http://localhost:8080"\n')),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"View All Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"env"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,r.kt)("td",{parentName:"tr",align:null},"PROD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platform"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"salesforce")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platform_instance"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The instance of the platform that all assets produced by this recipe belong to"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"enum(SalesforceAuthType)"),(0,r.kt)("td",{parentName:"tr",align:null},"Allowed symbols are USERNAME_PASSWORD, DIRECT_ACCESS_TOKEN"),(0,r.kt)("td",{parentName:"tr",align:null},"USERNAME_PASSWORD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Salesforce username"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for Salesforce user"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"security_token"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Security token for Salesforce username"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance_url"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Salesforce instance url. e.g. ",(0,r.kt)("a",{parentName:"td",href:"https://MyDomainName.my.salesforce.com"},"https://MyDomainName.my.salesforce.com")),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_sandbox"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Connect to Sandbox instance of your Salesforce"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_token"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Access token for instance url"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingest_tags"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingest Tags from source. This will override Tags entered from UI"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object_pattern"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null},"Regex patterns for Salesforce objects to filter in ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object_pattern.allow"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,r.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object_pattern.deny"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object_pattern.ignoreCase"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dict","[str, AllowDenyPattern]"),(0,r.kt)("td",{parentName:"tr",align:null},'Regex patterns for tables/schemas to describe domain_key domain key (domain_key can be any string like "sales".) There can be multiple domain keys specified.'),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".allow"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,r.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".deny"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".ignoreCase"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"profiling"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SalesforceProfilingConfig (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"{'enabled': False}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"profiling.enabled"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether profiling should be done. Supports only table-level profiling at this stage"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"profile_pattern"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null},"Regex patterns for profiles to filter in ingestion, allowed by the ",(0,r.kt)("inlineCode",{parentName:"td"},"object_pattern"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"profile_pattern.allow"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,r.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"profile_pattern.deny"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"profile_pattern.ignoreCase"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))),(0,r.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "SalesforceConfig",\n  "description": "Any source that is a primary producer of Dataset metadata should inherit this class",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform": {\n      "title": "Platform",\n      "default": "salesforce",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "auth": {\n      "default": "USERNAME_PASSWORD",\n      "allOf": [\n        {\n          "$ref": "#/definitions/SalesforceAuthType"\n        }\n      ]\n    },\n    "username": {\n      "title": "Username",\n      "description": "Salesforce username",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Password for Salesforce user",\n      "type": "string"\n    },\n    "security_token": {\n      "title": "Security Token",\n      "description": "Security token for Salesforce username",\n      "type": "string"\n    },\n    "instance_url": {\n      "title": "Instance Url",\n      "description": "Salesforce instance url. e.g. https://MyDomainName.my.salesforce.com",\n      "type": "string"\n    },\n    "is_sandbox": {\n      "title": "Is Sandbox",\n      "description": "Connect to Sandbox instance of your Salesforce",\n      "default": false,\n      "type": "boolean"\n    },\n    "access_token": {\n      "title": "Access Token",\n      "description": "Access token for instance url",\n      "type": "string"\n    },\n    "ingest_tags": {\n      "title": "Ingest Tags",\n      "description": "Ingest Tags from source. This will override Tags entered from UI",\n      "default": false,\n      "type": "boolean"\n    },\n    "object_pattern": {\n      "title": "Object Pattern",\n      "description": "Regex patterns for Salesforce objects to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "domain": {\n      "title": "Domain",\n      "description": "Regex patterns for tables/schemas to describe domain_key domain key (domain_key can be any string like \\"sales\\".) There can be multiple domain keys specified.",\n      "default": {},\n      "type": "object",\n      "additionalProperties": {\n        "$ref": "#/definitions/AllowDenyPattern"\n      }\n    },\n    "profiling": {\n      "title": "Profiling",\n      "default": {\n        "enabled": false\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/SalesforceProfilingConfig"\n        }\n      ]\n    },\n    "profile_pattern": {\n      "title": "Profile Pattern",\n      "description": "Regex patterns for profiles to filter in ingestion, allowed by the `object_pattern`.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "SalesforceAuthType": {\n      "title": "SalesforceAuthType",\n      "description": "An enumeration.",\n      "enum": [\n        "USERNAME_PASSWORD",\n        "DIRECT_ACCESS_TOKEN"\n      ]\n    },\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "SalesforceProfilingConfig": {\n      "title": "SalesforceProfilingConfig",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "Whether profiling should be done. Supports only table-level profiling at this stage",\n          "default": false,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.salesforce.SalesforceSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/salesforce.py"},"GitHub"))),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for Salesforce, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}m.isMDXComponent=!0}}]);