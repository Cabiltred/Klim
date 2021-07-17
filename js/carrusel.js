/**
 * @file
 * custom.js.
 */

(function ($, Drupal) {
  'use strict'

  /**
   * @method
   */
  $('.view-klim-carousel-articles .view-content').slick({
    autoplay: true,
    autoplaySpeed: 20000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  })

  $('.view-klim-carousel-products .view-content').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
  })

  /**
   * @method
   * ScrollSpy
   */

  var animateScroll = function (obj, event) {
    // Store hash
    var hash = obj.hash

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 150
    }, 800, function () {
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash
    })
  }

  $('body').scrollspy({ target: '#category-scrollspy', offset: 150 })

  $('#category-scrollspy ul li a').on('click', function (event) {
    animateScroll(this, event)
  })

  $('#category-scrollspy').on('activate.bs.scrollspy', function () {
    var activeSection = $(this).find('li.active a').attr('href')
    var firtsItem = $(this).find('li:first-child a').attr('href')
    var lastItem = $(this).find('li:last-child a').attr('href')

    $('#category-scrollspy .up-scroll a ').show()
    $('#category-scrollspy .down-scroll a ').show()

    if (activeSection === firtsItem) {
      $('#category-scrollspy .up-scroll a ').hide()
    }

    if (activeSection === lastItem) {
      $('#category-scrollspy .down-scroll a ').hide()
    }

  })

  $('#category-scrollspy .up-scroll a ').on('click', function (event) {
    // Prevent default anchor click behavior
    event.preventDefault()
    var activeSection = $('#category-scrollspy').find('li.active a').attr('href')
    var lastItem = $('#category-scrollspy').find('ul li:last-child a').attr('href')
    if (activeSection === undefined) {
      activeSection = lastItem
    } else {
      activeSection = $('a[href="' + activeSection + '"]').parent().prev().find('a').attr('href')
    }

    if (activeSection !== undefined) {
      $(this).attr('href', activeSection)
      animateScroll(this, event)
    }
  })

  $('#category-scrollspy .down-scroll a ').on('click', function (event) {
    // Prevent default anchor click behavior
    event.preventDefault()
    var activeSection = $('#category-scrollspy').find('li.active a').attr('href')
    var firtsItem = $('#category-scrollspy').find('li:first-child a').attr('href')

    if (activeSection === undefined) {
      activeSection = firtsItem
    } else {
      activeSection = $('a[href="' + activeSection + '"]').parent().next().find('a').attr('href')
    }

    if (activeSection !== undefined) {
      $(this).attr('href', activeSection)
      animateScroll(this, event)
    }
  })

})(jQuery, Drupal)
