const content = document.getElementById('content')
const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const aboutButton = document.getElementById('about')

const cafePic = document.createElement('img')
cafePic.src = '/cafe2.jpg'

const homeHeader = document.createElement('h1')
homeHeader.textContent = "Jon's Cafe"

const homeParagraph = document.createElement('p')
homeParagraph.textContent = "Jon's Cafe is a charming retreat where aroma-laden coffee fills the air, complementing the cozy ambiance. With a menu boasting artisanal blends and delectable pastries, it's a haven for coffee aficionados seeking moments of indulgence and relaxation."



const aboutHeader = document.createElement('h1')
aboutHeader.textContent = "About Jon's Cafe"

const aboutParagraph = document.createElement('p')
aboutParagraph.textContent = "Nestled in the heart of the bustling city, Jon’s Cafe beckons with its inviting facade and warm ambiance, drawing patrons into a haven of aromatic delights and culinary indulgence. Stepping through its doors, visitors are greeted by the tantalizing scent of freshly brewed coffee, mingling harmoniously with the comforting aroma of baked goods emanating from the kitchen. The interior exudes a rustic charm, with exposed brick walls adorned with vintage-inspired decor, creating an atmosphere that is both cozy and welcoming. Soft lighting casts a gentle glow over the space, inviting guests to linger and unwind amidst the soothing ambiance. At the heart of Jon’s Cafe lies its dedication to exceptional coffee, sourced from the finest beans and expertly crafted by skilled baristas. From rich and robust espressos to velvety cappuccinos and indulgent lattes, the menu offers a wide array of specialty brews to suit every palate. Complementing the coffee selection is a tempting assortment of freshly baked pastries and artisanal treats, lovingly prepared in-house each day. From flaky croissants to decadent cakes and pastries bursting with seasonal flavors, every bite is a testament to the cafe’s commitment to quality and craftsmanship. Beyond its coffee and pastries, Jon’s Cafe also offers a thoughtfully curated menu of light bites and savory dishes, perfect for breakfast, brunch, or a leisurely lunch. Guests can savor hearty sandwiches, crisp salads, and gourmet paninis, all made with the freshest ingredients sourced from local farmers and producers. But Jon’s Cafe is more than just a place to enjoy great food and coffee; it’s a gathering spot for the community, where friends come together to catch up over a steaming cup of joe, and neighbors gather for lively conversations and laughter. Whether it’s a morning pick-me-up, an afternoon treat, or an evening spent unwinding with friends, Jon’s Cafe offers a welcoming sanctuary where every visit feels like coming home."



const burger = document.createElement('div')

const burgerHeader = document.createElement('h1')
burgerHeader.textContent = 'Burger'

const burgerParagraph = document.createElement('p')
burgerParagraph.textContent = 'Juicy, savory, grilled patty nestled between soft, toasted buns, topped with cheese.'

const fries = document.createElement('div')

const friesHeader = document.createElement('h1')
friesHeader.textContent = 'fries'

const friesParagraph = document.createElement('p')
friesParagraph.textContent = 'Crispy, golden, seasoned potato strips, perfect for savory indulgence.'





homeButton.addEventListener('click', function() {
    content.innerHTML = ''
    content.appendChild(cafePic)
    content.appendChild(homeHeader)
    content.appendChild(homeParagraph)
})

aboutButton.addEventListener('click', function() {
    content.innerHTML = ''
    content.appendChild(aboutHeader)
    content.appendChild(aboutParagraph)
    
})

menuButton.addEventListener('click', function() {
    content.innerHTML = ''
    
    content.appendChild(burger)
    burger.appendChild(burgerHeader)
    burger.appendChild(burgerParagraph)
    

    content.appendChild(fries)
    fries.appendChild(friesHeader)
    fries.appendChild(friesParagraph)
})



content.appendChild(cafePic)
content.appendChild(homeHeader)
content.appendChild(homeParagraph)

