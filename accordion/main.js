const data = [
    {
        id: '1',
        question: 'What are accordion components?',
        answer: 'Accordion components are user interface elements used for expanding and collapsing content panels, allowing users to view only one panel at a time to manage large amounts of information efficiently.'
    },
    {
        id: '2',
        question: 'How does a modal window work?',
        answer: 'A modal window is a dialog box or popup that appears on top of the current page to capture user input or display information. It requires the user to interact with it before they can return to the main content.'
    },
    {
        id: '3',
        question: 'What is a responsive design?',
        answer: 'Responsive design is an approach to web design that ensures web pages render well on a variety of devices and window sizes, providing an optimal viewing experience across desktops, tablets, and smartphones.'
    },
    {
        id: '4',
        question: 'What is a CSS grid layout?',
        answer: 'CSS Grid Layout is a two-dimensional layout system for the web that allows you to design complex web layouts easily and efficiently using a grid-based approach.'
    },
    {
        id: '5',
        question: 'What is an API?',
        answer: 'An API (Application Programming Interface) is a set of rules and tools that allows different software applications to communicate with each other by defining the methods and data formats that they use to request and exchange information.'
    }
];

const accordionWrapper = document.querySelector('.accordion');

function createAccordionData() {
    accordionWrapper.innerHTML = data.map((dataItem) =>
        `<div class="accordion_item">
            <div class="accordion_title">
                <h3>${dataItem.question}</h3>
                <i class="fa-solid fa-arrow-down"></i>
            </div>
            <div class="accordion_content">
                <p>${dataItem.answer}</p>
            </div>
        </div>`
    ).join(" ")
}
createAccordionData();

const getAccordionTitles = document.querySelectorAll('.accordion_title');
getAccordionTitles.forEach(currentItem => {
    currentItem.addEventListener('click', (event) => {
        if (currentItem.classList.contains('active')) {
            currentItem.classList.remove('active');
        } else {
            let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");

            getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
                currentActiveItem.classList.remove("active");
            });

            currentItem.classList.add("active");
        }
    })
})