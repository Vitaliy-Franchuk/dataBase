let db = [{
    name: 'Victor',
    code: 1601416,
    age: 14,
    length: 160,
    weight: 42,
    money: 252
},
{
    name: 'Taras',
    code: 1423243,
    age: 19,
    length: 180,
    weight: 50,
    money: 1000
},
{
    name: 'Alex',
    code: 4533333,
    age: 10,
    length: 110,
    weight: 45,
    money: 10
},
{
    name: 'Nastya',
    code: 89878789,
    age: 20,
    length: 160,
    weight: 60,
    money: 776
},
{
    name: 'Oleg',
    code: 66787998,
    age: 30,
    length: 180,
    weight: 90,
    money: 12323
},
{
    name: 'Valera',
    code: 76787876,
    age: 17,
    length: 190,
    weight: 110,
    money: 12
},
{
    name: 'John',
    code: 34343422,
    age: 9,
    length: 90,
    weight: 30,
    money: 776
},
{
    name: 'Yura',
    code: 7888765,
    age: 14,
    length: 150,
    weight: 56,
    money: 8998
},
{
    name: 'Andrii',
    code: 8898788,
    age: 18,
    length: 170,
    weight: 77,
    money: 677
},
{
    name: 'Yulia',
    code: 1215456,
    age: 7,
    length: 80,
    weight: 34,
    money: 0
}
]

for (i = 0; i < db.length; i++) {
    $('.userContainer').append(`<div id='c${db[i].code}' class='userItem'>
    <span>${db[i].code}</span>
    <span>${db[i].name}</span>
    <span>${db[i].age}</span>
    <span>${db[i].weight}</span>
    <span>${db[i].length}</span>
        </div>`);
}

$('.userItem').click(function(e) {
    let userID = (e.target.id).substring(1);
    for (i = 0; i < db.length; i++) {
        if (db[i].code == userID) {
            alert(db[i].money + '$');
        }
    }
});


$('#applyAgeBtn').click(function() {
    let minAge = $('#minNumAge').val();
    let maxAge = $('#maxNumAge').val();
     $('.userContainer').empty();  
    for (i = 0; i < db.length; i++) {
        if (db[i].age >= minAge && db[i].age <= maxAge) {
            $('.userContainer').append(`<div id='c${db[i].code}' class='userItem'>
    <span>${db[i].code}</span>
    <span>${db[i].name}</span>
    <span>${db[i].age}</span>
    <span>${db[i].weight}</span>
    <span>${db[i].length}</span>
        </div>`);
        }
    }
});

$('#applyWeightBtn').click(function() {
    let minWeight = $('#minNumWeight').val();
    let maxWeight = $('#maxNumWeight').val();
     $('.userContainer').empty();  
    for (i = 0; i < db.length; i++) {
        if (db[i].weight >= minWeight && db[i].weight <= maxWeight) {
            $('.userContainer').append(`<div id='c${db[i].code}' class='userItem'>
    <span>${db[i].code}</span>
    <span>${db[i].name}</span>
    <span>${db[i].age}</span>
    <span>${db[i].weight}</span>
    <span>${db[i].length}</span>
        </div>`);
        }
    }
});

$('#applyLengthBtn').click(function() {
    let minLength = $('#minNumLength').val();
    let maxLength = $('#maxNumLength').val();
     $('.userContainer').empty();  
    for (i = 0; i < db.length; i++) {
        if (db[i].length >= minLength && db[i].length <= maxLength) {
            $('.userContainer').append(`<div id='c${db[i].code}' class='userItem'>
    <span>${db[i].code}</span>
    <span>${db[i].name}</span>
    <span>${db[i].age}</span>
    <span>${db[i].weight}</span>
    <span>${db[i].length}</span>
        </div>`);
        }
    }
});

minRanAge.addEventListener('input', function(){
  minNumAge.value = minRanAge.value
});

maxRanAge.addEventListener('input', function(){
  maxNumAge.value = maxRanAge.value
})

minRanWeight.addEventListener('input', function(){
  minNumWeight.value = minRanWeight.value
});

maxRanWeight.addEventListener('input', function(){
  maxNumWeight.value = maxRanWeight.value
})

minRanLength.addEventListener('input', function(){
    minNumLength.value = minRanLength.value
  });
  
  maxRanLength.addEventListener('input', function(){
    maxNumLength.value = maxRanLength.value
  })
