const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots-container');


async function fetchListofImages() {
    try {
        const response = await fetch(
            "https://picsum.photos/v2/list?page=1&limit=10",
            {
                method: "GET",
            }
        );
        const result = await response.json();
        if (result && result.length > 0) {
            displayImages(result);
        }
    }
    catch (error) {
        console.log('Something Went Wrong::', error);
    }
}

function displayImages(imagesList) {
    slider.innerHTML = imagesList.map((item) => `
       <div class="slide">
            <img src= ${item.download_url} alt=${item.id} />
        </div>
 
    `).join(" ");

    dotsContainer.innerHTML = imagesList
        .map(
            (item, index) => `
    <span class="dot ${index === 0 ? "active" : ""}" data-slide=${index}></span>
    `
        )
        .join(" ");
}

fetchListofImages();

setTimeout(() => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentSlide = 0;

    function activeDot(slide) {
        document
            .querySelectorAll(".dot")
            .forEach((dotItem) => dotItem.classList.remove("active"));
        document
            .querySelector(`.dot[data-slide="${slide}"]`)
            .classList.add("active");
    }

    function changeCurrentSlide(currentSlide) {
        slides.forEach(
            (slideItem, index) =>
            (slideItem.style.transform = `translateX(${100 * (index - currentSlide)
                }%)`)
        );
    }

    changeCurrentSlide(currentSlide)

    nextBtn.addEventListener("click", () => {
        currentSlide++;

        if (currentSlide > slides.length) {
            currentSlide = 0;
        }

        changeCurrentSlide(currentSlide);
        activeDot(currentSlide);
    });

    prevBtn.addEventListener("click", () => {
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        changeCurrentSlide(currentSlide);
        activeDot(currentSlide);
    });

    dotsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains('dot')) {
            const currentSlide = event.target.dataset.slide
            changeCurrentSlide(currentSlide)
            activeDot(currentSlide)
        }
    });
}, 1000);
