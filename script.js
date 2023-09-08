let containerDiv = document.querySelector('.container')

function createWrapDiv(){
    let wrapDiv = document.createElement('div')
    wrapDiv.className = 'wrap'
    wrapDiv.style =`display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;`
    return wrapDiv
}
let wrapDiv = createWrapDiv()
containerDiv.append(wrapDiv)

function createBox1(){
    let box1Div = document.createElement('div')
    box1Div.className = "box1"
    return box1Div
}

function createBox2(){
    let box2Div = document.createElement('div')
    box2Div.className = "box2"
    return box2Div
}

let box1Div = createBox1()
let box2Div = createBox2()
wrapDiv.append(box1Div, box2Div)

function createHeadingH1() {
    let headingH1 = document.createElement('h1')
    headingH1.textContent ="Find Us"
    headingH1.className = "heading"
    headingH1.style =`text-transform: capitalize;`
    return headingH1
}
let headingH1 = createHeadingH1()
box1Div.append(headingH1)

function createInnerBoxes(){
    let boxesDiv = document.createElement('div')
    boxesDiv.className = 'inner-boxes'
    boxesDiv.style =`display: grid;
                     grid-template-columns: 1fr 1fr;
                     gap: 15px;`
    return boxesDiv
}
let boxesDiv = createInnerBoxes()
box1Div.append(boxesDiv)


function createInnerBox(title, phoneNumber, email, address){
    let innerBoxDiv1 = document.createElement('div')
    innerBoxDiv1.className = "inner-box"
    boxesDiv.append(innerBoxDiv1)
    
    let boxNameH2 = document.createElement('h2')
    boxNameH2.className = 'box-name'
    boxNameH2.textContent = title
    innerBoxDiv1.append(boxNameH2)
    
    let boxTextDiv = document.createElement('div')
    boxTextDiv.className = 'box-text'
    innerBoxDiv1.append(boxTextDiv)
    
    let phoneDiv = document.createElement('div')
    phoneDiv.className = 'phone'
    boxTextDiv.append(phoneDiv)
    
    let phoneSpan = document.createElement('span')
    phoneSpan.textContent = 'Phone: '
    phoneDiv.append(phoneSpan)
    
    let phoneTel = document.createElement('a')
    phoneTel.textContent = phoneNumber
    phoneTel.href =`tel: ${phoneNumber}`
    phoneDiv.append(phoneTel)
    
    let emailDiv = document.createElement('div')
    emailDiv.className = 'email'
    boxTextDiv.append(emailDiv)
    
    let emailSpan = document.createElement('span')
    emailSpan.textContent = 'Email: '
    emailDiv.append(emailSpan)
    
    let emailHref = document.createElement('a')
    emailHref.textContent = email
    emailHref.href =`mailto: ${email}`
    emailDiv.append(emailHref)
    
    let addressDiv = document.createElement('div')
    addressDiv.className = 'address'
    boxTextDiv.append(addressDiv)
    
    let addressSpan = document.createElement('span')
    addressSpan.textContent = 'Address: '
    addressDiv.append(addressSpan)
    
    let addressHref = document.createElement('a')
    addressHref.href = `${address}`
    addressHref.textContent = address
    addressDiv.append(addressHref)

    return createInnerBox
}

let innerBox1 = createInnerBox('Parduotuvė 1', '+37045461211', 'info@parduotuve1.lt', 'Rotušės aikštė 1, Kaunas')
let innerBox2 = createInnerBox('Parduotuvė 2', '+37045461212', 'info@parduotuve2.lt', 'Rotušės aikštė 2, Kaunas')
let innerBox3 = createInnerBox('Parduotuvė 3', '+37045461213', 'info@parduotuve3.lt', 'Rotušės aikštė 3, Kaunas')
let innerBox4 = createInnerBox('Parduotuvė 4', '+37045461214', 'info@parduotuve4.lt', 'Rotušės aikštė 4, Kaunas')

let iframe = document.createElement('iframe')
iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.3423075885275!2d23.887974!3d54.896913899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7220ff3184881%3A0x8002872ac9bbdb7c!2sRotu%C5%A1%C4%97s%20a.%201%2C%2044280%20Kaunas!5e0!3m2!1sen!2slt!4v1692877269499!5m2!1sen!2slt'
box2Div.append(iframe)

iframe.style = `width: 100%;
                height: 450px`











