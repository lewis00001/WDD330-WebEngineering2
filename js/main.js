// wait for the page to load then make changes
document.addEventListener('DOMContentLoaded', function() {
    let assign = [
        {   week: '01.0',
            name: 'Lesson Portal',
            link: 'https://github.com/lewis00001/WDD330-WebEngineering2'
        },
        {   week: '02.1',
            name: 'Team Activity',
            link: './assignments/week2Team.html'
        },
        {   week: '02.2',
            name: 'Exercises/Notes',
            link: './assignments/week2ExercisesNotes.html'
        },
        {   week: '03.1',
            name: 'Team Activity',
            link: 'https://github.com/willhawkes/wdd330/blob/main/week3/Array%20Cardio.html'
        },
        {   week: '03.2',
            name: 'Exercises/Notes',
            link: './assignments/week3ExercisesNotes.html'
        },
        {   week: '04.1',
            name: 'Team Activity',
            link: './assignments/week4Team.html'
        },
        {   week: '04.2',
            name: 'Exercises/Notes',
            link: './assignments/week4ExercisesNotes.html'
        },
        {   week: '05.2',
            name: 'Exercises/Notes',
            link: './assignments/week5ExercisesNotes.html'
        },
        {   week: '06.1',
            name: 'Midterm - ToDo App',
            link: './assignments/toDoApp.html'
        },
        {   week: '07.2',
            name: 'Exercises/Notes',
            link: './assignments/ajax.html'
        },
        {   week: '08.1',
            name: 'Excercises/Notes',
            link: './assignments/week8ExercisesNotes.html'
        },
        {   week: '09.1',
            name: 'Excercises/Notes',
            link: 'https://docs.google.com/document/d/1A0c75886J1UegaqF9jl4IF9T67WAEF1E4rdVBIIV2nk/edit?usp=sharing'
        },
        {   week: '10.0',
            name: 'Excercises/Notes',
            link: 'https://docs.google.com/document/d/1WBgdiV8vu10Yc02SyUlTJixrf2MbduJKbyuQQ6R_rJo/edit?usp=sharing'
        },
        {   week: '11.0',
            name: 'assignment',
            link: '#'
        },
        {   week: '12.0',
            name: 'assignment',
            link: '#'
        },
        {   week: '13.0',
            name: 'assignment',
            link: '#'
        },
        {   week: '14.0',
            name: 'assignment',
            link: '#'
        }
    ];

    // create li items for the ul
    let ul = document.getElementById('assignments_ul');
    for (let i = 0; i < assign.length; i++) {
        ul.innerHTML += `<li><a class='assgnLinks' href=${assign[i].link} 
        target='_blank'>Week ${assign[i].week} :: ${assign[i].name}</a></li>`;
    };
    
    // create a var for the current year
    let fYear = new Date().getFullYear();
    // add current year to the html page
    document.querySelector('#currentYear').textContent = fYear;
    
    // loop through assignment list and add a check if the link has been added
    let links = document.getElementsByClassName('assgnLinks');
    for (let i = 0; i < links.length; i++) {
        let attVal = links[i].getAttribute('href');
        if (attVal != '#') {
            links[i].innerHTML += '<span class="isDone"><i class="fas fa-check-circle"></i></i></span>';
        } else {
            links[i].innerHTML += '<span class="isDone">--</span>';
        }
    }
}, false);

