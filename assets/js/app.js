// Check off specific li by clicking v1
// let todoGrey = {
//   color: 'grey',
//   textDecoration: 'line-through'
// }

// let todoBlack = {
//   color: 'black',
//   textDecoration: 'none'
// }

// // Initial state is Black
// let isBlack = true

// // Add event listener to each li
// $('li').on('click', function () {
//   // console.log($(this))

//   // Switch between todo states
//   if (isBlack) {
//     $(this).css(todoGrey)
//     // $(this).css('text-decoration', 'line-through')
//   } else {
//     $(this).css(todoBlack)
//   }
//   // inverse isBlack
//   isBlack = !isBlack
// })

// Delete todo from page
// Check off specific li by clicking v2
// Add event listener to each li and future li. Use event event-delegation (propagation)
// (Trickling here - going event down way. Bubbling - event goes up)
// Big diff between click and on('click'). Latter takes all future elements
$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed')
})

// Add event listener to X of each li
$('ul').on('click', 'li span', function (e) {
  // console.log('X clicked')

  // remove parent li
  $(this).parent().fadeOut(1000, function () {
    $(this).remove()
  })
  // .remove()

  // stop event propagation to upper levels
  e.stopPropagation()
})

// Create new todo and put it on the list
// Add event listener for Enter press
$('input[type="text"]').keypress(function (e) {
  if (e.which === 13) {
    // Grab input value
    // console.dir(e)
    // console.log($(this).val())
    let todoText = $(this).val()

    // Make input empty
    $(this).val('')

    // Create new li and add to the end of the list
    $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + todoText + '</li>')
  }
})

// Add event listener to + icon
$('.fa-plus').on('click', function () {
  $('input[type="text"]').fadeToggle()
})
