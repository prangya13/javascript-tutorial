const pages = {
    'intro.html': 0,
    'access.html':1,
    'comments.html': 2,
    'datatypes.html': 3,
    'numbers.html': 4,
    'string.html': 5,
    'array.html': 6,
    'objects.html': 7,
    'math.html': 8,
    'date.html': 9,
    'regexpresion.html': 10,
    'error.html': 11,
    'assignment.html': 12,
    'Quiz/quiz.html': 13,
}
const indexes = {
    0:'intro.html',
    1:'access.html',
    2:'comments.html',
    3:'datatypes.html',
    4:'numbers.html',
    5:'string.html',
    6:'array.html',
    7:'objects.html',
    8:'math.html',
    9:'date.html',
    10:'regexpresion.html',
    11:'error.html',
    12:'assignment.html',
    13:'quiz.html',
}

function load_intro()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/intro.html'; 
}
function load_access()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/access.html'; 
}
function load_comments()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/comments.html';
}
function load_datatypes()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/datatypes.html';
}
function load_numbers()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/numbers.html'; 
}
function load_string()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/string.html'; 
}
function load_array()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/array.html'; 
}
function load_objects()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/objects.html';
}

function load_math()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/math.html'; 
}
function load_date()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/date.html';
}
function load_regexpresion()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/regexpresion.html'; 
}
function load_error()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/error.html'; 
}
function load_assignment()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/assignment.html'; 
}
function load_quiz()
{
    document.getElementById("main-frame").src = 'Pages/Sub-Pages/quiz.html';
}

function goBack()
{
    var x = document.getElementById("main-frame").src.substring(61); 
    var ind = pages[x];
    if(ind == 0)
        alert("Cannot Go Back Since it's the Introduction Page");
    else
    {
        document.getElementById("main-frame").src = 'Pages/Sub-Pages/'+indexes[ind-1];
    }
}
function goForward()
{
    var x = document.getElementById("main-frame").src.substring(61); 
    var ind = pages[x];
    if(ind == 12)
        alert("Cannot Go Forward Since Next Page is Quiz page which will open in the New Tab");
    else
    {
        document.getElementById("main-frame").src = 'Pages/Sub-Pages/'+indexes[ind+1];
    }
}