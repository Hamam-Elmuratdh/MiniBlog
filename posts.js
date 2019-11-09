var posts = [MakePost('He allowed himself to be swayed by his conviction that human beings are not born once and for all on the day their mothers give birth to them, but that life obliges them over and over again to give birth to themselves.'),MakePost('The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.'), MakePost('If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things '), ];
//this function will return the post object which has text and the date
function MakePost(text){
return {
	text: text,
	date: new Date()
}
}// this function will display posts in the posts div
function displayPosts(){
		$('.posts').html('<p>Your Posts</p>') //change html to empty old posts
		posts.forEach(function(post,index){ //loop over the array
			var postdiv = $('<div class= "oldposts"></div>')
			var deletebtn = $ ('<div><button class= "delete">delete</button><div>')
			deletebtn.on('click',function(){ //add delete button
				console.log(index)
				posts.splice(posts.indexOf(post),1) //remove post by finding index in posts array
				console.log(posts)
				$(this).parent().remove()
			})
		postdiv.append(post.text)
		postdiv.append(deletebtn)
		postdiv.append('<div class ="postdate " >'+post.date.toDateString()+ '</div>')
		$('.posts').append(postdiv)

	})
}
displayPosts()

//this function adds posts to the posts array
function addPost(){
	var input = $('#text').val()
	if(input !== ''){
		var post = MakePost(input)
		posts.push(post)
		displayPosts()
	}else{
		alert('please enter a word')
	}}
$('#btn').on('click',addPost) //add function addpost to button


//search for posts by text input
function searchPosts(){
	var find = $('#text').val() //get the text
	var found = posts.filter(function(elem,index){ //filter to find posts
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