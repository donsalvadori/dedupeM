# M Dedupe

deduplicates json data based on 3 criteria:

1. Objects have unique ID
2. Objects have unique email
3. If for some reason objects are created at exact same timestamp, 
select only the last object that matches on timestamp


# Instructions

Clone the repo and run `node marketo.js`

sample json data is provided within REPO