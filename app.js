const packages = [
    { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs' },
    { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk' },
    { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147' },
    { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145' },
    { heavy: true, priority: true, fragile: true, to: 'Brittany' },
    { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz' },
    { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367' }]




let current = []

function draw() {
    let template = ""
    for (let i = 0; i < current.length; i++) {
        const Package = current[i]
        template +=
            `<div class="col-12 col-sm-6 col-md-4 p-3">
            <div class="bg-white shadow rounded">
            <img class="img-fluid rounded-top"
            src="https://static9.depositphotos.com/1669785/1150/i/600/depositphotos_11506024-stock-photo-package.jpg">
            <div class="p-2 text-center">
            <h3>Package</h3>
            </div>
            </div>
            </div>`
    }
    document.getElementById('cards').innerHTML = template
    console.log(package)
}
function newsearch() {
    packages.forEach(package => package.trackingNumber = true);
    const randomIndex = Math.floor(Math.random() * packages.length)
    packages[randIndex].trackingNumber = false
    current = packages
    draw()
}
function filter(propertyofpackages) {
    let missingpackage = packages.find(package => packages.trackingNumber)
    current = current.filter(packages[trackingNumber] === missingpackage[trackingNumber])
    draw()
}
function lostpackagecheck(trackingnumber) {
    let missingpackage = packages.find(package => packages.trackingNumber)
    if (missingpackage.trackingNumber == trackingNumber) {
        alert('you found missing package')
    }
    else {
        alert('Not the package you are looking for')
    }
}


newsearch()



function evenorodd(number) {
    if (5 % 2 >= 1) {
        return even
    }
    return odd

}