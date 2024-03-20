# Crawlie UI

[Crawlie](https://github.com/phuwn/crawlie) is a web application that will extract large amounts of data from the Google search results page. This is the User Interface of Crawlie.
---

## Table of contents

- [Tech stacks](http://github.com/phuwn/crawlie_ui#tech-stacks)
- [Setup](http://github.com/phuwn/crawlie_ui#setup/)
- [Solution Diagram](http://github.com/phuwn/crawlie_ui#solution-diagram)
- [Route List](http://github.com/phuwn/crawlie_ui#route-list)
- [API List](http://github.com/phuwn/crawlie_ui#api-list)
- [Contact](http://github.com/phuwn/crawlie_ui#contact)

## Tech stacks

- Frontend (Web)
  - Typescript
  - Vue
  - Vite
  - TailwindCSS
- Backend
  - Go
  - Echo Web Framework
  - PostgreSQL

## Setup

- Install all dependencies

```sh
npm install
```

- Create new env file and start filling the required value

```sh
cp .env.example .env
```

- Run the app

```sh
npm run dev
```

## Solution Diagram

![image](https://github.com/phuwn/crawlie_ui/assets/37581250/c20ae5c4-09fb-424d-bd06-cf3223b0d977)

There are 4 main processes run in the Create New Keywords task
1. `crawlie_ui` send the `.csv` file to `crawlie_server` through a POST request
2. `crawlie_server` parse the file and create `keywords` record for each keyword then save it in the `database`
3. `crawlie_crawler` will pick up a list of uncrawled `keywords` records from the `database`
4. `crawlie_crawler` will fetch the keyword page on google.com/search and then save the extracted info to the `database`

## Screenshots
- Home screen
![image](https://github.com/phuwn/crawlie_ui/assets/37581250/a5e67465-233e-4418-95cd-e4f99d9adbfd)

- Login screen
![image](https://github.com/phuwn/crawlie_ui/assets/37581250/17562c13-b477-416f-81fa-dfd7a1c696bf)

- ListKeywords screen
![image](https://github.com/phuwn/crawlie_ui/assets/37581250/ab7f56ab-1fb2-436a-957d-6aa2fc52fb1d)

- KeywordDetail screen
![image](https://github.com/phuwn/crawlie_ui/assets/37581250/b2880099-ab44-44f8-9ddf-f9fcaa6dc278)

## Route List
- `/` Home Page
- `/login` Login Page
- `/list-keywords` ListKeywords Page
- `/keywords/:name` Keyword Detail Page

## API List
- POST `/v1/auth` Login API
- GET `/v1/users/me` Get User Profile
- GET `/v1/keywords` List Keywords By User
- GET `/v1/keywords/:name` Get Keyword Detail
- POST `/v1/keywords` Upload New Keywords File

## Contact
- Email: [phuongtt.297@gmail.com](mailto:phuongtt.297@gmail.com)
- LinkedIn: [phuwn](https://www.linkedin.com/in/phuwn/)
