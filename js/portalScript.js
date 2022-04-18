// wait for the page to load then make changes
document.addEventListener('DOMContentLoaded', function() {
    let assign = [
        {   week: '01.0',
            name: 'assignment',
            link: '#'
        },
        {   week: '02.0',
            name: 'assignment',
            link: '#'
        },
        {   week: '03.0',
            name: 'assignment',
            link: '#'
        },
        {   week: '04.0',
            name: 'assignment',
            link: '#'
        },
        {   week: '05.0',
            name: 'assignment',
            link: '#'
        },
        {   week: '06.0',
            name: 'assignment',
            link: '#'
        },
        {   week: '07.0',
            name: 'assignment',
            link: '#'
        },
        {   week: '08.0',
            name: 'assignment',
            link: '#'
        },
        {   week: '09.0',
            name: 'assignment',
            link: '#'
        },
        {   week: '10.0',
            name: 'assignment',
            link: '#'
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
        target='_blank'>Lesson ${assign[i].week} :: ${assign[i].name}</a></li>`;
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

