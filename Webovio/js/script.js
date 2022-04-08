let headerIcon = $('.headerLogoBtn')
headerIcon.hide().fadeIn(1000)

let services = $('.servicesGridItem').each(function() {
    $(this).hover(function() {
        $(this).removeClass('opacity')
    }, function() {
        $(this).addClass('opacity')
    })
})
