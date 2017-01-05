$(document).ready(function(){

var items = $('gallery.li'),
itemsByTags = {};

//Loop thro tags
items.each(function(i){
var elem = $(this),
tags = elem.data('tags').split(',');

//Add data attribute for Quicksand
elem.attr('data-id',i);

$each(tags, function(key,value){

	//white space remove
	value = $.trim(value);
	if (!(value in itemsByTags)) {
		//add empty value
		itemsByTags[value] =[];
	}
	//add image to array

	itemsByTags[value].push(elem);

	});


	});
//Create all items option
	createList("All Items", items);

	$.each(itemsByTags, function(k,v){
		createList(k,v);
	});

//Create click handler - so when we click on it it talks to quicksand and do the animation
// and set the class of active -cute?cartoon?

$('#navbar.a').live('click',function(e){
	var link=$(this);
	//add active class
	link.addClass('active').siblings().removeClass('active');

	$('#gallery').quicksand(link.data('list').find('li'));
	e.preventDefault();
});
$('#navbar a:first').click();

//create the lists
function createList(text,items){
	//Create empty ul

	var ul =$('<ul>', {'class':'hidden'});

	$.each(items,function(){
		$(this).clone().appendTo(ul)
	});

	ul.appendTo('#gallery');
	//create menu item
	var a =$('<a>',{
		html:text,
		href:'#',
		data:{list:ul}
	}).appendTo('#navbar');
}

	});