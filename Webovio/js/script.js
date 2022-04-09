let headerIcon = $('.headerLogoBtn')
headerIcon.hide().fadeIn(1000)


let firstPageP = $('.firstPageGrid')
firstPageP.hide().slideDown(2000)

let services = $('.servicesGridItem').each(function() {
    $(this).hover(function() {
        $(this).removeClass('opacity')
    }, function() {
        $(this).addClass('opacity')
    })
})

let btnOne = $('#btnOne').click(function() {
    $('#moreTextOne').slideToggle(500)
    return false
})

let btnTwo = $('#btnTwo').click(function() {
    $('#moreTextTwo').slideToggle(500)
    return false
})

let btnThree = $('#btnThree').click(function() {
    $('#moreTextThree').slideToggle(500)
    return false
})

let btnFour = $('#btnFour').click(function() {
    $('#moreTextFour').slideToggle(500)
    return false
})