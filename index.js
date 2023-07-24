//template_615iwf6
//service_kis2jfh
//g8nr-JDg7evl8MATD

// const contact = (event) => {
//     event.preventDefault();
//     const loading = document.querySelector(".modal__overlay--loading")
//     const success = document.querySelector(".modal__overlay--success")
//     loading.classList += " modal__overlay--visible"
//     emailjs
//         .sendForm(
//             'service_kis2jfh',
//             'template_615iwf6',
//             event.target, //targetting all the events in the form , the email, name and message
//             'g8nr-JDg7evl8MATD'
//         ).then(() => {
//             throw new Error("error");
//             loading.classList.remove("modal__overlay--visible")
//             success.classList += " modal__overlay--visible"
//         }).catch(() => {
//             loading.classList.remove("modal__overlay--visible");
//             alert("Sorry the email service is temporarily unavailable. Please email me at waseefafridi39@gmail.com to contact with me directly!")
//         })
    
    
//     // setTimeout(() => {
        
//     //     console.log('It worked 1')
//     // }, 1000)
// }

const contact = (event) => {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_kis2jfh',
            'template_615iwf6',
            event.target, //targetting all the events in the form , the email, name and message
            'g8nr-JDg7evl8MATD'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("Sorry the email service is temporarily unavailable. Please email me at waseefafridi39@gmail.com to contact with me directly!")
        })
    
}

let isModal = false
const modalToggle = () => {
    if (!isModal){
        isModal = true
        document.body.classList += " modal--open"
    }
    else{
        isModal = false
        document.body.classList.remove("modal--open")

    }
}

let isContrast = false
const toggleContrast = () => {
    isContrast = !isContrast
    if (isContrast){
        document.body.classList.add("dark-theme")
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const scaleFactor = 1 / 20;
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length;i++){
        const isOdd = i % 2 !== 0;
        const boolInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInteger}px, ${y * boolInteger}px)`
    }
}
