var posts = [MakePost('today was a good day'),MakePost('the weather is great to go out'), MakePost('I wanna go for running')];
//this function will take the text and return it with pu
function MakePost(text){
return {
	text: text,
	date: new Date()
}
}

function displayPosts(){
	$('.posts').html('<p>Your Posts</p>')
	posts.forEach(function(post,index){
		var postdiv = $('<div class= "oldposts"></div>')
		var deletebtn = $ ('<button class= "delete">delete</button>')
		deletebtn.on('click',function(){
			console.log(index)
			posts.splice(index,1)
			console.log(posts)
			$(this).parent().remove()
		})
		console.log(deletebtn)
		postdiv.append(post.text)
		postdiv.append(deletebtn)
		postdiv.append('<div class ="postdate" >'+post.date.toDateString()+'</div>')
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
	alert(' bro you can`t do that ')
}}
$('#btn').on('click',addPost)



