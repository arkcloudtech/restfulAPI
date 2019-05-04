# restfulAPI

Weedmaps API to manage Weed Purchase and Consumption Validity
> User Access Control
> Member Document Managements
    - StateID
    - MedicalRecommendation Card

Tech Reqs (Server):
    1) Node
    2) Express
        npm install --save express
            > server.js
            > app.js
    3) Setup Debuging Env
        use Postman
            > Create new collection
            > Start Creating GET and POST basic requests
    4) Build out folder structure
            > Routes
            > Controllers (for later use)
    5) Scaffold basic CRUD ops
            > Users
            > Medical Records
            > State IDs
    6) Authorization
            > add jsonwebtokens support
            > create middleware for routes to honor authorization
    7) Upload Image Support
        use Multer
            > apply to MedRecs
            > apply to StateIDs
Tech Reqs (Client):
    1) React.js
    2) Bootstrap
    3) Scaffold Page Flow