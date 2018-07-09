// if dates are identical data provided last in the list should be preferred


// const fs = require('fs');

// fs.readFile('leads.json', (err, data) => {  
//     if (err) throw err;
//     let json = JSON.parse(data);
//     console.log(json);
// });

// console.log('This is after the read call');  

const json = {
	"leads":[
		{
		"_id": "jkj238238jdsnfsj23",
		"email": "foo@bar.com",
		"firstName":  "John",
		"lastName": "Smith",
		"address": "123 Street St",
		"entryDate": "2014-05-07T17:30:20+00:00"
		},
		{
		"_id": "edu45238jdsnfsj23",
		"email": "mae@bar.com",
		"firstName":  "Ted",
		"lastName": "Masters",
		"address": "44 North Hampton St",
		"entryDate": "2014-05-07T17:31:20+00:00"
		},
		{
		"_id": "wabaj238238jdsnfsj23",
		"email": "bog@bar.com",
		"firstName":  "Fran",
		"lastName": "Jones",
		"address": "8803 Dark St",
		"entryDate": "2014-05-07T17:31:20+00:00"
		},
		{
		"_id": "jkj238238jdsnfsj23",
		"email": "coo@bar.com",
		"firstName":  "Ted",
		"lastName": "Jones",
		"address": "456 Neat St",
		"entryDate": "2014-05-07T17:32:20+00:00"
		},
		{
		"_id": "sel045238jdsnfsj23",
		"email": "foo@bar.com",
		"firstName":  "John",
		"lastName": "Smith",
		"address": "123 Street St",
		"entryDate": "2014-05-07T17:32:20+00:00"
		},
		{
		"_id": "qest38238jdsnfsj23",
		"email": "foo@bar.com",
		"firstName":  "John",
		"lastName": "Smith",
		"address": "123 Street St",
		"entryDate": "2014-05-07T17:32:20+00:00"
		},
		{
		"_id": "vug789238jdsnfsj23",
		"email": "foo1@bar.com",
		"firstName":  "Blake",
		"lastName": "Douglas",
		"address": "123 Reach St",
		"entryDate": "2014-05-07T17:33:20+00:00"
		},
		{
		"_id": "wuj08238jdsnfsj23",
		"email": "foo@bar.com",
		"firstName":  "Micah",
		"lastName": "Valmer",
		"address": "123 Street St",
		"entryDate": "2014-05-07T17:33:20+00:00"
		},
		{
		"_id": "belr28238jdsnfsj23",
		"email": "mae@bar.com",
		"firstName":  "Tallulah",
		"lastName": "Smith",
		"address": "123 Water St",
		"entryDate": "2014-05-07T17:33:20+00:00"
		},
		{
		"_id": "jkj238238jdsnfsj23",
		"email": "bill@bar.com",
		"firstName":  "John",
		"lastName": "Smith",
		"address": "888 Mayberry St",
		"entryDate": "2014-05-07T17:33:20+00:00"
		}
	]
}


const leads = json.leads;


 
const uniqueID = [...new Set(leads.map( item => item._id ))];
const uniqueEmail = [...new Set(leads.map( item => item.email ))];


const jsonFiltered = uniqueID.map( id => leads.find( obj => (id === obj._id) ) );
const emailFilter = uniqueEmail.map( email => jsonFiltered.find( obj => (email === obj.email) ) );


const solution = emailFilter.filter( obj =>  obj !== undefined ); 


// const datesArr = solution.map( obj => obj.entryDate );

const noDupeDate = solution.map(c => c.entryDate.valueOf() )
															.map( (c, i, a) => i === a.indexOf(c) ? i : undefined)
																.map(c => solution[c]).filter(c => c !== undefined);





console.log('original json data:');
console.log(json);
console.log('===============================================');
console.log('deduplicate json data:');

console.log(noDupeDate);


