# lazada-fe-test
 
## FRONT side runs (front use the bolderplate:  create-react-app) :

- Access "front" folder
- Run: "npm i" to install packages
- Run "npm start" or "yarn start"


In this front project: I use: 
  - reactjs, redux, redux-thunk, react-router-dom
  - react-lazyload, axios


Separate UI components and Container components
This code hasn't had unit test yet

----------------------
## BACK side:

- Backend use Nodejs, Express to create a static environment. Data get from the exist json files. The date respond from API also change a little to see the different between API call.

**Step to setup backend server**:

- Acces "**backend**" folder
- Run: "**npm i**" to install package
- then run: "**npm start**" => will start the node server with port: **7878** : http://127.0.0.1:7878


There are API which you can use:

### Caterory API:

- **/category/get** : to get the list product of category (currently, there is no load more function)
  
### Product API:
-  **/product/get** : to get main detail information of that product
-  **/product/getSponsorProducts** : to get the sponsor products (3 products)
-  **/product/getQA** : to get list of Q&A (3 items per page, paging-able)
-  **/product/getReview** : to get list of review (3 items per page, paging-able)
-  **/product/getAlsoLike** : to get list of product which same store (12 products)
