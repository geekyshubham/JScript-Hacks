//udemy course completer script by DIGITAL_SHADOW 


//dropdown all the tabs 

var sections =  document.querySelectorAll("div[data-purpose='section-heading']")

sections[0].click()

sections.forEach(section => {section.click() } )

//checking all checkboxes

var checkboxes = document.querySelectorAll("input[type='checkbox']")

checkboxes.forEach(element => { element.click() } )