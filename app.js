const anchor = document.getElementById('anchor')
const rekt = anchor.getBoundingClientRect()
const anchorX = rekt.left + rekt.width / 2
const anchorY = rekt.top + rekt.height / 2
const eyes = document.querySelectorAll('.eye')

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
    const transAngle = angleDeg + 90
    
    eyes.forEach(eye => {
        eye.style.transform = 'rotate('+transAngle+'deg)'
        anchor.style.filter = 'hue-rotate('+angleDeg+'deg)'
    })
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy
    const dx = ex - cx 
    const rad = Math.atan2(dy, dx)
    const deg = rad * 180 / Math.PI
    return deg
}