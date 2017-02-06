# RESTful API

## 7 RESTful Routes

Name|Path|HTTP Verb|Purpose|Mongoose
----|----|---------|-------|
Index|/members|GET|List all members|Member.find()
New|/members/new|GET|Show New Member Form|N/A
Create|/members|POST|Create a new member and then redirect somewhere|Member.create()
Show|/members/:id|GET|Show info about a specific member|Member.findById()
Edit|/members/:id/edit|GET|Show Edit Form for a specific member|Member.findById()
Update|/members/:id|PUT|Update a particular member then redirect somewhere|Member.findByIdAndUpdate()
Destroy|/members/:id|DELETE|Delete a particular member, then redirect somewhere|Member.findByIdAndRemove()
