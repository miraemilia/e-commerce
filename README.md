# Front-end Project: E-commerce

![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/RTK-v.1-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4-green)
![SASS](https://img.shields.io/badge/SASS-v.1-hotpink)

This is a project for the Integrify Academy Frontend module. The task was to create an e-commerce website using API endpoints from [https://fakeapi.platzi.com/](https://fakeapi.platzi.com/).

## Table of contents
- [Technologies](#technologies)
- [Features](#features)
- [Project overview](#project-overview)
- [Running the project](#running-the-project)
- [Deployment](#deployment)
- [To do](#to-do)

## Technologies

- Typescript
- React
- Redux toolkit (+ RTK query)
- Jest
- MUI
- SASS

## Features

(* not implemented in UI/optional)

### User (unregistered/not logged in)
- able to view all product listings (all or by category)
- able to sort(by price) and filter products
- able to view single product page
- able to register
- able to log in
	#### Logged in user
	- able to view own account details
	- able to modify email, name and avatar for self
	- *able to change password
	- able to log out
	- *able to delete account
	- able to create cart
	- able to update cart
	- able to check out cart
	#### Admin
  - able to manage products (create, update, delete)
  - able to manage categories (update, delete)
  - *able to view all users (all details but password)
  - *able to delete users
  - *able to modify user roles

### Product: 
- can be viewed as list (all/by category)
- can be viewed individually
- can be sorted (by price)
- can be filtered
- can be added to cart(by logged in user)
- can be created, modified and deleted (by admin)

### Category:
- can be viewed as list
- can be updated and deleted by admin

### Cart:
- can be created
- can be modified (add cart item, update cart item quantity, delete cart item)
- can be checked out
- can be deleted

## Project overview

### Folder structure

- vertical structure

````
.
├── README.md
├── readme_images
├── public
|
├── src
|   ├── index.tsx
|   ├── App.tsx
|   ├── app
|   |   ├── store.ts
|   |   ├ ...
|   ├── shared
|   |   ├ ...
|   ├── features
|       ├── products
|       |   ├ ...
|       ├── users
|       |   ├ ...
|       ├── credentials
|       |   ├ ...
|       ├── cart
|       |   ├ ...
|       ├── categories
|           ├ ...
├── .gitignore
├── .tsconfig
├── package.json
````

### Functions

![Diagram](readme_images/E-commerceDiagram.png)

### Flowchart

![Flowchart](readme_images/E-commerceFlowchart.png)

## Running the project

Requirements: Node

After cloning the project run `npm install` in project directory.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode

## Deployment

Deployed with Netlify at [https://courageous-palmier-3375a6.netlify.app](https://courageous-palmier-3375a6.netlify.app)

![Screenshot](readme_images/E-commerceScreenshot.png)

To try out admin functionalities, visit [API users](https://api.escuelajs.co/api/v1/users) for credentials

## To do
- UI
	- medium fixes
		- [x] reset after checkout
		- [x] edit product quantity in cart with input field
		- [x] ability to change avatar
		- [x] ability to choose product images (now hardcoded)
		- [x] show several pictures in single product page
		- [x] dropdown menu for category change in product page
		- [x] createproduct success and error message
		- [ ] MUI DataGrid update success message
		- [x] profile info refetched after update
		- [ ] product card style and content!
		- [ ] cart style!
		- [x] productsPage layout
		- [x] selectField warning(ProductFilter, AdminNewProduct)!
		- [ ] keep CardMedia/Avatar size independently from content
	- small fixes
		- [x] headings for several pages
		- [x] reposition filter button
		- [x] AppBar heading: styling and link
		- [x] style: after profile logout + after registering + not authorized
		- [x] registration link on login page
		- [ ] footer position
		- [ ] per page label
		- [x] createproduct select field
	- to develop further
		- [x] user able to update profile info
		- [ ] user able to change password
		- [x] pagination
		- [ ] admin functionalities: manage users
		- [x] admin functionalities: manage categories
		- [ ] home page more content
		- [ ] component testing!
		- [ ] reusable components e.g. dialog, category selection...
		- [ ] better exception handling & ErrorPage
		- [ ] products page mobile layout
		- [ ] image upload
- redux
	- to develop further
		- [ ] Error to AxiosError!
		- [x] categoryReducer: delete, uodate + tests
		- [x] RTK query: tests for retreiving single product!
		- [ ] test organization / describe sections!
		- [ ] refine tests
		- [ ] better error messages for UI
		- [ ] store persist
		- [ ] rename credentialsReducer?
- general
	- [x] deployment
	- [x] publish code
	- [x] cleanup/lint: Components and Pages
	- [ ] cleanup (setting up Prettier)
	- [x] revise README
