
document.addEventListener('DOMContentLoaded', () => {
    if (confirm(`EPILEPSY WARNING: 
                This app may potentially trigger seizures 
                for people with photosensitive epilepsy. 
                Do you want to continue?`
    ) === false) {
        return
    }

    const body = document.querySelector('body')
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const colors = ["#e48149", "#e89e5e", "#dd5735", "#fbf5cb", "#eaa663"]

    const draw = (radius) => {
        let color = Math.random() < 0.2 ? "black" : colors[Math.floor((Math.random() * colors.length))]
        body.style.backgroundColor = color
        canvas.style.backgroundColor = color
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
        ctx.fillStyle = color
        ctx.fill()
    }

    setInterval(() => {
        draw(centerY)
        draw(centerY / 2)
        draw(centerY / 4)
    }, 50)
})
