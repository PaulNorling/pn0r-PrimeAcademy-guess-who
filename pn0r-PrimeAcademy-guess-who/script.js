console.log('js');

let display = 0;

$(document).ready(onReady);

function onReady() {
    console.log('jquery is ready!');
    $('#paulNorling').on('click', norling);
    $('#dylanRoets').on('click', roets);
    $('#jaredLindquist').on('click', lindquist);
    $('#generateBtn').on('click', generate);
}

var people = [
    { 
      number: 1,
      name: 'paul',
      githubUsername: 'devjanaprime'
    },
    {
      number: 2,
      name: 'Dylan',
      githubUsername: 'DoctorHowser'
    },
    {
      number: 3,
      name: 'Jared',
      githubUsername: 'matthew-black'
    },
    // {
    //   name: 'Kris',
    //   githubUsername: 'kdszafranski'
    // },
    // {
    //   name: 'Edan',
    //   githubUsername: 'eschwartz'
    // },
    // {
    //   name: 'Liz',
    //   githubUsername: 'emkerber'
    // },
    // {
    //   name: 'Chris',
    //   githubUsername: 'christopher-black'
    // },
];
  
function norling()  {
     console.log('norling')
    // render();
    if(display === people[0].number){
        $(`footer`).addClass('.correct')
        $('.correct').append(`
        <div class="wow">Correct!</div>
        `);
    }else $('footer').addClass('.inCorrect');
}

function roets()  {
     console.log('Roets')
    // render();
    if(display === people[1].number){
        $(`footer`).addClass('.correct')
        $('.correct').append(`
        <div class="wow">Correct!</div>
        `);
    }else $('.correct').append(`
    <div class="inCorrect">Wrong</div>
    `);
}

function lindquist()  {
    
    // console.log('Lindquist')
    // render();
    if(display === people[2].number){
        $(`footer`).addClass('.correct')
        $('.correct').append(`
        <div class="wow">Correct!</div>
        `);
    }else $('footer').addClass('.inCorrect');
}

function generate() {
    $('#rdm').empty();
    console.log(randomNumber(1,3));
    render()
    match();
    
}

function randomNumber(min , max){
    display = Math.floor(Math.random() * (1 + max - min) + min);

}

function render() {
    clearForm();
    $('#rdm').append(`
    <div>${display}</div>
    `)
}

function match()  {
    if(display === people[0].number){
        name = people[0].name
    }
}

function clearForm() {
    $('#rdm').val('');
  }
