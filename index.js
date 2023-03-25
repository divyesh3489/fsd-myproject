console.log(typeof(localStorage.getItem("username")))
if (typeof(localStorage.getItem("username"))!="object") {

    user = localStorage.getItem("username")
    var profile1 = document.getElementById("Sign_up")
    profile1.innerHTML = `<li class="nav-item dropdown" style="transition:5s !important;">
    <a class="nav-link dropdown-toggle" href="#" role="button"
        data-bs-toggle="dropdown" aria-expanded="false"
        style="font-size: x-large; padding-left: 40px; color:white ;">
        ${user}
    </a>
    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
        <li><a class="dropdown-item" href="#profile-modal" data-bs-toggle="modal" aria-controls="staticBackdrop" onclick="detalis_p()">Profile</a></li>
        <li><a class="dropdown-item" href="#" onclick="logout()">Log-Out</a></li>
    </ul>
</li>`
}
function detalis_p()
{
    user = localStorage.getItem("username")
    email = localStorage.getItem("Email")
    mo=localStorage.getItem("Mobile Number")
    var U_na= document.getElementById("u_name")
    var U_em = document.getElementById("E_mail")
    var U_mo= document.getElementById("M_no")
    U_na.innerHTML=`${user}`
    U_em.innerHTML=`${email}`
    U_mo.innerHTML=`${mo}`
}
function logout()
{
    localStorage.clear()
    var profile1 = document.getElementById("Sign_up")
    profile1.innerHTML=`<li class="navbar-item">
    <a href="#exampleModal" class="nav-link " data-bs-toggle="modal"
        style="font-size: x-large;padding-left: 40px; color:white ;">Sing-up</a>
</li>`
}
function submittedform() {
    var emailid = document.getElementById('email').value
    var number = document.getElementById('number').value
    var password = document.getElementById('password').value
    var C_password = document.getElementById("Conform_password").value
    var username = document.getElementById("username").value
    var e_user = /^[A-z ]+$/
    var e_mo = /^\d{10}$/
    var e_email = /^\w+([\._]?\w+)*@\w+([\._]?\w+)*(\.\w{2,3})+$/
    var e_digit = /\d/
    var e_word = /[A-Z]/
    var e_Lword = /[a-z]/
    var e_pancution = /\W/
    // var e_name = /^[A-z]+$/
    if (e_mo.test(number) && e_email.test(emailid) && e_digit.test(password) && e_word.test(password) && e_pancution.test(password) && e_Lword.test(password) && C_password == password && password.length >= 8 && password.length <= 16 && e_user.test(username)) {
        console.log(1)
        localStorage.setItem("username", username)
        localStorage.setItem("Email", emailid)
        localStorage.setItem("Mobile Number", number)
        return true
    }
    else {
        var a1 = document.getElementById("alert1")
        var a2 = document.getElementById("alert2")
        var a3 = document.getElementById("alert3")
        var a4 = document.getElementById("alert4")
        var a5 = document.getElementById("alert5")
        if (!e_email.test(emailid)) {
            a1.innerHTML = "Invalid Email!"
        }
        if (!e_mo.test(number)) {
            a2.innerHTML = "Invalid Mobile Number!"
        }
        if (!e_Lword.test(password) || !e_digit.test(password) || e_pancution.test(password) || e_word.test(password)) {

            a3.innerHTML = "Password Must Contain Upper Word and Lower Word and punctuation and digit "
        }
        if (password.length <= 8 || password.length >= 16) {
            a3.innerHTML += "password must be between 8 and 16 characters"
        }
        if (password != C_password) {
            a4.innerHTML = "Password And Conform password are not same"
        }
        if (!e_user.test(username)) {
            a5.innerHTML = "Username can not contain digit or punctuation"
        }
        return false
    }
}


class Products {
    constructor(Title, link, price, description, added) {
        this.Title = Title
        this.Imagelink = link
        this.Price = price
        this.Description = description
        this.cartcount = added
    }
}

mouse1 = new Products('HyperX Pulsefire Haste USB Gaming Mouse', "m2.jpg", 3745, "The HyperX Pulsefire Haste is built for elite gamers looking  to gain every fraction of a second possible in their quest to <br> be the best. Weighing in at 59 grams, this full-featured <br>, responsive honeycomb shell mouse has everything you need,  just without the extra weight. TTC Golden micro switches provide satisfying, reliable clicks and are rated for 60 million  clicks, so you wont have to worry about missing inputs. The  flexible HyperFlex USB cable and the virgin-grade PTFE skates work together to give you a smooth, easy glide to make dominating the game simple", 0)
mouse2 = new Products('Redgear A-15 Wired Gaming Mouse', "m3.jpg", 499, "Compatibility: Redgear A15 is compatible with PCs, laptops, notebooks and other devices with a similar input.Multi Programmable Buttons: The Redgear A15 is designed with multi programmable buttons and also has durable and semi honeycomb design for a better grip.Upto 6400 DPI: With Redgear A15 you can experience a DPI change of upto 6400RGB Lighting: A15 comes equipped with customizable RGB mode", 0)
mouse3 = new Products('Redgear A-10 Wired Gaming Mouse', "m4.jpg", 279, "Lightweight Gaming mouse for quick moves during your gaming sessions On the Fly Dpi Change upto 2400 Extra Durable switches and build quality to increase the durability of the mouse  Designed for All types of Grips and All types of Games; Country of Origin: China; Hardware Platform: Pc", 0)
mouse4 = new Products('Redgear A-17 Gaming Mouse RGB Lighting (Black)', "m5.jpg", 559, "Upto 6400 DPI: With Redgear A17 you can experience a DPI change of upto 6400 RGB Lighting: A17 comes equipped with customizable RGB mode 5M durable switches and enhanced build quality with Braided Cable to increase the durability of the mouse. Suitable for Claw & Palm grip Compatibility: Redgear A-17 is compatible with PCs, laptops, notebooks and other devices with a similar input. 1 year warranty from the date of purchase.", 0)
keyboard1 = new Products('Redgear Shadow Blade Mechanical Keyboard', "k1.jpg", 2499, "Blue Switches: Shadow blade comes equipped with mechanical Blue Clicky Switches which gives you a tactile feedback of it. It also helps to increase the gaming speed by reducing the effort required to push the keys all the way through and provides a 100% typing speed bonus. LED: It has a 22 Spectrum LED Mode for the day and also for the night time. You can adjust the LED as per your requirement Windows Key-Lock: With its Windows Key Lock you can play for long hours without being any hassle or interruption. Floating Key-Caps: The keycaps are perfectly placed which gives a clicky sound and accurate results every time you click. Its ergonomic design helps distance each pressure laid on it while using it. Control Knob: Shadow Blade is also equipped with a Control Knob that helps you control your media i.e play/pause and volume control Driver customization via Redgear garage", 0)
keyboard2 = new Products('Redgear Blaze Mechanical wired Gaming keyboard', "k2.jpg", 999, "Semi-Mechanical Keyboard with Floating Key caps, greater durability and responsiveness.Interface: Wired USB 3 Color mode for your gaming setup needs. Illuminated Keys : Yes 19 keys anti-ghost for your gamers and programmers Windows key-lock function to avoid in-game pop up", 0)
keyboard3 = new Products('Redgear MT02 Keyboard Control Knob (Black)', "k3.jpg", 998, "3 LED Modes: MT02 Keyboard is equipped with 3 LED modes to complete your gaming setup. Windows Key Lock: Windows Key Lock for intense gaming hours without any hassle or interruption. Floating Keycaps: Floating keycaps in the keyboard are perfectly placed which gives you faster actuation on every key press. Its ergonomic design helps distance each pressure laid on it while using it. Double Injected Keycaps: It comes equipped with double injected Key-caps for night time use.", 0)
keyboard4 = new Products('Redgear GC-100 Keyboard and Mouse Set', "k4.jpg", 1199, "Double Injected Keycaps Gaming Mouse Comes with RGB mode Gaming Grade Sensor and Durable Switches for the rough gaming hours Floating keycaps in the keyboard are perfectly placed which gives a clicky sound and accurate results every time you click. Keyboard comes equipped with 3 Mix LED modes Compatible with PCs, laptops, notebooks and other devices with a similar input. 1 Year warranty from the date of purchase.", 0)
headphone1 = new Products('Redgear Cloak Wired headphone with mic', "h1.jpg", 799, "Sound Quality: Redgear Cloak comes equipped with 50mm Driver with Enhanced audio bass and clarity which dramatically improves your in-game sound experience. Inline Remote : NoMicrophone: It comes equipped with a Omni-directional microphone which can be used as per you gaming situations. You can just put it up if it is not in use.Build Quality: It is luxurious noise-isolating memory foam ear pads and adjustable split headband reduces pressure and provides optimal comfort for long gaming sessions.Other Features: This headset has an amazing RGB LED light effect on ear-ups and tip of the microphone. It also comes equipped with volume control, so just scroll up or down to adjust it.", 0)
headphone2 = new Products('Redgear Cosmo 7.1 Wired headphone ', "h2.jpg", 1499, "Sound Quality: Truly immerse yourself in your games with hardware-driven virtual 7.1 surround sound for precisely located audio. Inline Remote :Yes Microphone: Redgear Cosmo 7.1 comes equipped with a high quality built-in noise cancelling microphone for a quick and stable communication Build Quality: It is luxurious noise-isolating memory foam ear pads and adjustable split headband which reduces pressure and provides optimal comfort for long gaming sessions Noise Cancellation: Redgear Cosmo 7.1 provides you a passive noise cancelling experience. It is closed earcups design blocks any kind of distraction from outside which helps you keep focus during the game for as long as you want Other Features: This headset has an amazing RGB LED light effect on ear-ups and tip of the microphone. It also comes equipped with audio control which helps control volume", 0)
headphone3 = new Products('Redgear Shadow Spear headphone', "h3.jpg", 998, "Equipped with 50mm Driver and Breathing LED lights which dramatically improves your in-game sound experience It comes equipped with a Omni-directional microphone which can be used as per your gaming situations. You can just put it up if it is not in use.Build Quality: The headphone comes with adjustable headbands, Braided cable and Comfortable Design It comes equipped with inline remote control For Audio & Mic, Connector type: 3.5 Warranty Description: 1 Year Warranty From The Date Of Purchase; Size Name: One Size", 0)
headphone4 = new Products('Redgear Shadow Helm headphone', "h4.jpg", 898, "50MM Drivers- RedgGear Shadow Helm comes with 50MM Driver with enhanced bass and clarity that explicitly improves your in-game experience and immersive sound quality Superior Fit- Shadow Helm over the ear headphone comes with extra soft earmuffs and headband to ensure that your usage and gaming knows no bounds. It features 50 mm drivers with increased audio bass and crystal-clear sound for an immersive gaming experience RGB Lighting- It also has RGB breathing lights for slaying your foes in flair. VOX Microphone- Voice Operated Exchange(VOX) tech will ensure that whenever you talk, the mic picks it in an automated way so you have a worriless experience Warranty Description: 1 Year Warranty From The Date Of Purchase; Size Name: One Size", 0)
controller1 = new Products('Redgear Pro Wireless Gamepad', "co1.jpg", 1600, "Gamepad comes equipped with2.4GHz wireless technology and supports up to 10 metres range, an ideal choice for those looking to enjoy your favourite games without the hassle of cables and wires. The built-in lithium-ion battery in the gamepad can provide uninterrupted gameplay for up to 2 hours in a single charge for upto 30-minute. Integrated dual intensity motor which allows a realistic gaming experience. Integrated force feedback. Reset : When an exception occurs, such as Keys disorder, or crash, unable to connect. Remove the USB connection from the gamepad and device and reconnect. The gamepad comes with illuminated keys on the back which light up and allow visibility even in low light conditions.1 year warranty from the date of purchase", 0)
controller2 = new Products('Redgear MS-150 Wired Gamepad ', "co2.jpg", 1048, "Gamepad comes equipped with2.4GHz wireless technology and supports up to 10 metres range, an ideal choice for those looking to enjoy your favourite games without the hassle of cables and wires. The built-in lithium-ion battery in the gamepad can provide uninterrupted gameplay for up to 2 hours in a single charge for upto 30-minute. Integrated dual intensity motor which allows a realistic gaming experience. Integrated force feedback. Reset : When an exception occurs, such as Keys disorder, or crash, unable to connect. Remove the USB connection from the gamepad and device and reconnect. The gamepad comes with illuminated keys on the back which light up and allow visibility even in low light conditions.1 year warranty from the date of purchase", 0)
controller3 = new Products('EvoFox Elite Ops Wireless Gamepad', "co3.jpg", 1429, "The EvoFox Elite Ops Wireless Gamepad with Type C Charging is the ideal Android TV Gamepad. With all Android TVs supporting at least basic Gaming, a Gamepad at home is a must. Use the provided USB Extender Cable on your TV to ensure optimal wireless performance. This Wireless Controller also supports Windows with X input and D input modes, and PS3s. It automatically detects and changes the gamepad mode based on your system. Simply Plug and Play! The Elite Ops features Digital Triggers (not Analog), Accurate 360 degree concave thumbsticks, a Precise 8 way floating D-Pad. The gamepad also features dual rumble Vibration motors (for PC and PS3 only) and an easy to use Turbo Mode. The gamepad comes with a Type C charging port and the 400mAh Rechargeable battery ensures 8 hours of non stop gameplay. The ergonomic and robust design with anti-sweat matte finish makes it easy on your hands, but tough on your enemies. Hassle Free 1 Year Manufacturing Warranty | Please Call or Email our customer support for any assistance.", 0)
controller4 = new Products('Microsoft Xbox X/S Wireless Controller', "co4.jpg", 4999, "Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined Geometry for enhanced comfort and effortless control during gameplay Stay on target with textured grip on the triggers, bumpers, and back case and with a new hybrid D-pad for accurate, yet familiar input Make the controller your own by customizing button Mapping with the Xbox accessories app", 0)

Redgearproduct = [mouse1, mouse2, mouse3, mouse4, keyboard1, keyboard2, keyboard3, keyboard4, headphone1, headphone2, headphone3, headphone4, controller1, controller2, controller3, controller4]


var modalTitle = document.getElementById('titleOfmodal')
var modalImage = document.getElementById('imageOfmodal')
var modalDescription = document.getElementById('descriptionOfmodal')
var modalPrice = document.getElementById('priceOfmodal')
var modalThing = document.getElementById('ModaloftheThing')

function modalOftheWeb(h1name) {

    modalTitle.innerHTML = h1name.children[2].children[0].innerHTML
    modalImage.src = h1name.children[1].children[0].src
    for (let i = 0; i < Redgearproduct.length; i++) {
        if (modalTitle.innerHTML === Redgearproduct[i].Title) {
            modalPrice.innerHTML = Redgearproduct[i].Price + ' Rs'
            modalDescription.innerHTML = Redgearproduct[i].Description
        }
    }
    modalImage.style.width = '100%'
}
function func(nice) {
    console.log(nice)
    console.log(nice)
}

var cartMultiplethings = new Array()

function Cartofthings() {
    var cartTitle = modalThing.children[0].children[0].children[0].children[0].innerHTML
    for (let i = 0; i < Redgearproduct.length; i++) {
        if (cartTitle == Redgearproduct[i].Title) {
            var cartImg = Redgearproduct[i].Imagelink
            var cartPrice = Redgearproduct[i].Price
            Redgearproduct[i].cartcount = 1

            // var stringss = `<div class="card cartPro" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            //     <div class="d-flex flex-row align-items-center">
            //         <img src="${cartImg}" width="100" class="rounded-circle">
            //         <div class="d-flex flex-column">
            //             <span class="font-weight-normal" >${cartTitle}</span>
            //             <span >Price : ${cartPrice} rs</span>
            //             <span ><button class="btn btn-primary" onclick="remove_cart(this)">Remove</button></span>
            //         </div>
            //     </div>
            // </div> `
            var stringss = `<div class="card cartPro" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div class="d-flex flex-row align-items-center">
                    <img src="${cartImg}" width="100" class="rounded-circle">
                    <div class="d-flex flex-column">
                        <span class="font-weight-normal">${cartTitle}</span>
                        <span>Price : ${cartPrice} rs</span>
                        <span><button class="btn btn-primary" onclick="remove_cart(this)">Remove</button></span>
                    </div>
                </div>
            </div>`

            if (cartMultiplethings.length == 0) {
                var flag = 0
                cartMultiplethings.push(stringss)
            }
            else {
                var flag = 0
                for (i = 0; i < cartMultiplethings.length; i++) {
                    if (stringss == cartMultiplethings[i]) {
                        console(2)
                        flag += 1
                    }
                }
                if (flag < 1) {
                    cartMultiplethings.push(stringss)
                }
            }
            addthisstring = document.getElementById('CartThings')
            addthisstring.innerHTML = ''
            console.log(cartMultiplethings)
            for (let i = 0; i < cartMultiplethings.length; i++) {
                addthisstring.innerHTML += cartMultiplethings[i]
            }
        }
    }
}
function remove_cart(items) {
    var parentsare = items.parentElement.parentElement.parentElement.parentElement

    cartImg = parentsare.children[0].children[0].src.slice(22)
    cartTitle = parentsare.children[0].children[1].children[0].innerHTML
    cartPrice = parentsare.children[0].children[1].children[1].innerHTML
    var cartThings = `<div class="card cartPro" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div class="d-flex flex-row align-items-center">
                    <img src="${cartImg}" width="100" class="rounded-circle">
                    <div class="d-flex flex-column">
                        <span class="font-weight-normal">${cartTitle}</span>
                        <span>${cartPrice}</span>
                        <span><button class="btn btn-primary" onclick="remove_cart(this)">Remove</button></span>
                    </div>
                </div>
            </div>`
    for (i = 0; i < cartMultiplethings.length; i++) {
        if (cartMultiplethings[i] == cartThings) {
            cartMultiplethings[i] = 0
        }
    }
    addthisstring = document.getElementById('CartThings')
    addthisstring.innerHTML = ''
    console.log(cartMultiplethings)
    for (let i = 0; i < cartMultiplethings.length; i++) {
        if (cartMultiplethings[i] != 0) {
            addthisstring.innerHTML += cartMultiplethings[i]
        }
    }
}


// console.log(h1name.children[1].children[0].src)
// h1name.children[2].children[0].innerHTML
// h1name.children[1].children[0].src