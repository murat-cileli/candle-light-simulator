
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas')
    const body = document.getElementsByTagName('body')[0]
    const ctx = canvas.getContext('2d')
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const colors = ["#e48149", "#e89e5e", "#dd5735", "#fbf5cb", "#eaa663"]
    
    const draw = (radius, isBlack = false) => {
        let color = isBlack ? "black" : colors[Math.floor((Math.random() * colors.length))]

        body.style.backgroundColor = color
        canvas.style.backgroundColor = color
        
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
        ctx.fillStyle = color
        ctx.fill()

    }

    setInterval(function () {
        if (Math.random() < 0.3) {
            draw(centerY, true)
            return
        }
        draw(centerY)
        draw(centerY / 2)
        draw(centerY / 4)
    }, 50)
})
