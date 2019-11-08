var posts = [MakePost('He allowed himself to be swayed by his conviction that human beings are not born once and for all on the day their mothers give birth to them, but that life obliges them over and over again to give birth to themselves.'),MakePost('The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.'), MakePost('If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things '), ];
//this function will take the text and return it with pu
function MakePost(text){
return {
	text: text,
	date: new Date()
}
}
console.log(posts)
function displayPosts(){
		$('.posts').html('<p>Your Posts</p>')
		posts.forEach(function(post,index){
		var postdiv = $('<div class= "oldposts"></div>')
		var deletebtn = $ ('<div><button class= "delete">delete</button><div>')
		deletebtn.on('click',function(){
			console.log(index)
			posts.splice(posts.indexOf(post),1)
			console.log(posts)
			$(this).parent().remove()
		})
		console.log(deletebtn)
		postdiv.append(post.text)
		postdiv.append(deletebtn)
		postdiv.append('<div class ="postdate " >'+post.date.toDateString()+ '</div>')
		$('.posts').append(postdiv)

	})
}
displayPosts()
function addPost(){
	var input = $('#text').val()
	if(input !== ''){
	var post = MakePost(input)
	posts.push(post)
	displayPosts()
}else{
	alert('please enter a word')
}}
$('#btn').on('click',addPost)



function searchPosts(){
	var find = $('#text').val()
	var found = posts.filter(function(elem,index){
		return elem.text.indexOf(find)>=0;
	})
	$('.posts').html('<p>search results</p>')
		found.forEach(function(post,index){
		var postdiv = $('<div class= "oldposts"></div>')
		var deletebtn = $ ('<div><button class= "delete">delete</button><div>')
		deletebtn.on('click',function(){
			posts.splice(posts.indexOf(post),1)
			$(this).parent().remove()
		})
		console.log(deletebtn)
		postdiv.append(post.text)
		postdiv.append(deletebtn)
		postdiv.append('<div class ="postdate " >'+post.date.toDateString()+ '</div>')
		$('.posts').append(postdiv)
})}

$('#search').on('click',searchPosts)