# RESTful API

## 7 RESTful Routes

Name|Path|HTTP Verb|Purpose|
----|----|---------|-------|
Index|/members|GET|List all members|
New|/members/new|GET|Show New Member Form|
Create|/members|POST|Create a new member and then redirect somewhere|
Show|/members/:id|GET|Show info about a specific member|
Edit|/members/:id/edit|GET|Show Edit Form for a specific member
Update|/members/:id|PUT|Update a particular member then redirect somewhere|
Destroy|/members/:id|DELETE|Delete a particular member, then redirect somewhere|
