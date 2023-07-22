//template_615iwf6
//service_kis2jfh
//g8nr-JDg7evl8MATD

const contact = (event) => {
    event.preventDefault();
    // emailjs
    //     .sendForm(
    //         'service_kis2jfh',
    //         'template_615iwf6',
    //         event.target, //targetting all the events in the form , the email, name and message
    //         'g8nr-JDg7evl8MATD'
    //     ).then(() => {
    //         console.log("this worked!")
    //     })
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible")
        console.log('It worked 1')
    }, 1000)
}