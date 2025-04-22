const notifContainer = document.querySelector('.notifContainer')
const button = document.getElementById('button')

const notifications = [
    'Instagram Bildirim',
    'Facebook Bildirim',
    'GitHub Bildirim',
    'LinkedIn Bildirim',
    'Youtube Bildirim',
    'SnapChat Bildirim'
]

const colors = ['red' , 'purple' , 'black' , 'gray' , 'green' , 'blue' ]

button.addEventListener('click' , () => createNotificaion())

function createNotificaion() {
    const notif = document.createElement('div')
    notif.classList.add('notif')
    notif.classList.add(getRandomColor())

    notif.innerText = getRandomNotif()

    notifContainer.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    } , 3000)
}

function getRandomNotif() {
    return notifications [Math.floor(Math.random() * notifications.length)]
}

function getRandomColor() {
    return colors [Math.floor(Math.random() * colors.length)]
}